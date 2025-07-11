
import { defineStore, acceptHMRUpdate } from 'pinia'
import { usePayment } from '~/composables/payment/usePayment'

export const usePaymentStore = defineStore('payment-store', () => {


   const paymentProps=usePayment()



    return { ...paymentProps}
})


if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePaymentStore, import.meta.hot))
}