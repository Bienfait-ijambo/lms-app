import { useServerStripe } from "#stripe/server";
import prisma from "~/lib/prisma";
import { validatePaymentInput } from "./validateInput";
export default defineEventHandler(async (event) => {
    const stripe = await useServerStripe(event);
    const { courseId, price, userId, email } = await readBody(event);


    const result = validatePaymentInput.safeParse({ courseId, price, userId, email });

    if (!result.success) {
        throw createError({
            message: "Validation Failed",
            data: result.error?.flatten()?.fieldErrors,
        } as any);
    }

    // 15*100=1500=15
    // 15=0.15
    const totalPrice = price * 100;

    try {
        // Create Stripe customer
        const customer = await stripe.customers.create({
            email: email,
        });

        // Start Prisma transaction
        const [paymentRecord, paymentIntent] = await Promise.all([
            prisma.payment.create({
                data: {
                    courseId,
                    userId,
                    customerId: customer.id,
                    amount: price,
                    status: "succeed",
                },
            }),

       stripe.paymentIntents.create({
                amount: totalPrice,
                currency: "usd",
                customer: customer.id,
                automatic_payment_methods: { enabled: true },
                metadata: {
                    integration_check: "accept_a_payment",
                },
            })
        ]);

        return {
            clientSecret: paymentIntent.client_secret,
            error: null,
            message: "Payment processed successfully!",
        };

    } catch (error) {

        throw createError({
            statusCode: 500,
            message: "An error occurred while processing the payment.",
            data:(error as Error)?.message
        });
    }
});
