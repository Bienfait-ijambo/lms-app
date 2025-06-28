


export function useFetchCourses(){


    
    const limit = ref(1)
    const page = ref(1)
    const search = ref('')
    const fetchLoading = ref(false)
    const serverData = ref({})
    
    const singleCourseData=ref({})

    
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


    async function fetchSingleCourse(slug:string){
         try {
            fetchLoading.value = true
            const { data } = await useFetch('/api/admin/courses/single-course', {

                query: {
                    slug: slug,
                  
                }
            })
            singleCourseData.value = data.value as any
          
            fetchLoading.value = false
            return data.value
           

        } catch (error) {
            fetchLoading.value = false
        }

    }

    return{
        fetchCourses,fetchLoading,serverData,search,fetchSingleCourse,singleCourseData
    }
}