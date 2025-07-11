<script setup>
const props = defineProps(["singleCourseData"]);
const { stripe } = useClientStripe();
const paymentStore = usePaymentStore();
const {user}=storeToRefs(paymentStore)

let elements = null;
let cardElement = null;
const isLoading = ref(false);

const createStripeElements = async () => {
  elements = stripe.value.elements();

  cardElement = elements.create("card", { hidePostalCode: true });
  cardElement.mount("#card-element");
};

async function createPayment() {
  try {
    const price = props.singleCourseData?.course?.price;
    const courseId = props.singleCourseData?.course?.id;

    isLoading.value = true;
    const { clientSecret, error, message, email } =
      await paymentStore.createPayment(courseId, price);

    if (error || !clientSecret) {
      showServerError(message);
    }

    // Use the globally stored cardElement
    const { paymentIntent, error: confirmError } =
      await stripe.value.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            email: email,
          },
        },
      });
    isLoading.value = false;
    if (confirmError) {
      showServerError("Payment failed:", confirmError.message);
    } else {
      successMsg(message);
    }
  } catch (error) {
    isLoading.value = false;
    showServerError(error?.message);
  }
}

onMounted(() => {
  setTimeout(() => createStripeElements(), 2000);
});
</script>

<template>
  <div class="bg-white p-4 mb-2 rounded-md shadow-md" v-if="user">
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
        <div class="flex" v-if="isLoading" > <LoadingIcon /> Processing.... </div>

        <div v-else>Pay {{ formatAmount(singleCourseData?.course?.price) }} </div>
      </button>
    </div>

   
     
  </div>

    <div v-else class="bg-white p-4 mb-2 rounded-md shadow-md border border-slate-200">
      <p class="mt-1 text-gray-500">
        Sign In to process payment
        <NuxtLink href="/auth/signin" class="text-bold text-xl text-blue-400"
          >Sign in</NuxtLink
        >.
      </p>
    </div>

 
</template>
