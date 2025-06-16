


export function useFetchCourses(){


    
    const limit = ref(10)
    const page = ref(1)
    const search = ref('')
    const fetchLoading = ref(false)
    const serverData = ref({})

    
    async function fetchCourses() {
        try {
            fetchLoading.value = true
            const { data } = await useFetch('/api/admin/courses/get', {

                query: {
                    search: search.value,
                    page: page.value,
                    limit: limit.value
                }
            })
            serverData.value = data.value as any
            limit.value = data.value?.metadata.limit as number
            page.value = data.value?.metadata.page as number


            fetchLoading.value = false

        } catch (error) {
            fetchLoading.value = false
        }


    }

    return{
        fetchCourses,fetchLoading,serverData
    }
}