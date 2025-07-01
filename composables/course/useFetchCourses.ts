


export function useFetchCourses(){


    
    const limit = ref(10)
    const page = ref(1)
    const search = ref('')
    const fetchLoading = ref(false)
    const serverData = ref({})
    
    const singleCourseData=ref({})
    const categoryFilter=ref([])

    async function paginateCourses(currentPage:number){
        page.value=currentPage
        await fetchCourses()
    }


    
    async function fetchCourses(categories?:string[]) {
        try {
            const filters=[] as Record<string,any >

            if(typeof categories!=='undefined'){
                    filters['categories']=categories
                }


                if(search.value!==''){
                    filters['search']=search.value
                }

            fetchLoading.value = true
            const { data } = await useFetch('/api/admin/courses/get', {

                
                query: {
                    ...filters,
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
        paginateCourses,
        categoryFilter,
        fetchCourses,fetchLoading,serverData,search,fetchSingleCourse,singleCourseData
    }
}