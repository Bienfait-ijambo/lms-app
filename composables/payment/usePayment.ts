


export function usePayment() {


    const { user } = useUser()

      const serverData = ref({})
      const fetchLoading=ref(false)
       const limit = ref(10)
    const page = ref(1)

       async function paginatePayments(currentPage:number){
        page.value=currentPage
        await fetchPayments()
    }


  async function fetchPayments() {
    try {
      fetchLoading.value = true
      const { data } = await useFetch('/api/payment/payments')
      serverData.value = data.value as any

        limit.value = data.value?.metadata.limit as number
            page.value = data.value?.metadata.page as number

      fetchLoading.value = false

    } catch (error) {
      fetchLoading.value = false
    }


  }

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
        fetchPayments,
        serverData,
        paginatePayments,
        user,
        createPayment
    }
}