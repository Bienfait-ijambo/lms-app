<script setup>

const { stripe } = useClientStripe();



let elements = null;
let cardElement = null;

const createStripeElements = async () => {
  elements = stripe.value.elements();

  cardElement = elements.create("card", { hidePostalCode: true });
  cardElement.mount("#card-element");
};

async function createPayment() {
 

  // Use the globally stored cardElement
//   const { paymentIntent, error: confirmError } =
//     await stripe.value.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: cardElement,
//         billing_details: {
//           //   email: userCookie.value?.data?.user?.email,
//         },
//       },
//     });

//   if (confirmError) {
//     console.error("Payment failed:", confirmError.message);
//   } else {
//     shoppingCartStore.clearOutCart();
//     successMsg(message);
//   }

}

onMounted(() => {
  setTimeout(() => createStripeElements(), 2000);
});
</script>

<template>
  <div class="bg-white p-4 mb-2 rounded-md shadow-md">
    <div class="text-2xl font-bold text-gray-600">Pay with Stripe</div>
    <div
      id="card-element"
      class="mb-2 mt-6 border border-slate-300 p-4 rounded-md"
    ></div>
    <!-- v-if="userCookie" -->

    <div class="flex justify-between">
      <div></div>
      <button
        @click="createPayment"
        :disabled="isLoading"
        class="flex items-center text-white bg-blue-400 justify-center gap-3 p-3 mt-4 font-semibold text-center rounded-lg shadow-md bg-primary hover:bg-primary-dark disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        <span >Pay 16.00 $</span>
      </button>
    </div>

    <!-- <div v-else>
      <p class="mt-1 text-gray-500">
        Sign In to process payment or see orders
        <NuxtLink href="/auth/signin" class="text-bold text-red-500"
          >Sign in</NuxtLink
        >.
      </p>
    </div>
     -->
  </div>
</template>