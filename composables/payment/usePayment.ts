


export function usePayment() {


    const { user } = useUser()
    async function createPayment(courseId: string, price: string) {

        try {
            const userId = user.value?.id as string
            const email = user.value?.emailAddresses[0]?.emailAddress as string
            const { clientSecret, error, message } = await $fetch(
                "/api/payment/create-payments",
                {
                    method: "post",
                    body: JSON.stringify({

                        courseId: courseId,
                        userId: userId,
                        price: parseFloat(price),
                        email: email
                    }),
                }
            );
            return { clientSecret, error, message, email, userId }
        } catch (error) {

            showValidationErrors((error as Error))

        }
    }

    return {
        user,
        createPayment
    }
}