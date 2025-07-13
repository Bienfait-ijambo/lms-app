<script setup>
definePageMeta({
  layout: "admin",
});


const paymentStore = usePaymentStore();
const {serverData}=storeToRefs(paymentStore)

await paymentStore.fetchPayments()

</script>
<template>
  <div class="h-screen">
    
 
  
    <div class="flex justify-between mb-4 mt-4">
      <h1 class="text-xl " >Payments</h1>
     
    </div>

    <PaymentTable :payments="serverData?.payments" >
         <template #pagination>
      <Pagination :serverData="serverData" 
      @paginate="paymentStore.paginatePayments"></Pagination>
    </template>
        </PaymentTable>
  </div>
</template>
