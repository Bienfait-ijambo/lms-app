import { useFetchChapters } from "./useFetchChapters"



export function useCreateOrUpdatechapter(){


    const editChapter=ref(false)
    const chapterLoading=ref(false)
    const chapterModal=ref(false)
    // const {fetchChapters}=useFetchChapters()
    const chapterInput=ref({
        title:"",
        courseId:""
    })

    
    function toggleChapterModal(courseId:string) {
        //  categoryInput.value = {} as any
        //  edit.value=false
        // appendUserIdPropValue()
        chapterInput.value.courseId=courseId
       
        chapterModal.value = !chapterModal.value
    }
       async function createOrUpdateChapter() {
        
                try {
                    const endpoint=editChapter.value?'/api/admin/chapters/update':'/api/admin/chapters/create'
        
                    chapterLoading.value = true
                  
               
                    const result = await $fetch(endpoint, {
                        method: 'POST',
                        body: JSON.stringify(chapterInput.value)
                       
    
                    })
                    // courseInput.value = {} as any
                    editChapter.value=false
                    chapterInput.value.title=""
                 
                    // showModal.value=false
                    // await fetchCourses()
                    successMsg(result?.message)
                    chapterLoading.value = false
        
                } catch (error) {
                //  const serverError=error?.data?.data?.data
                //  console.log(serverError)
                    chapterLoading.value = false
                    showValidationErrors((error as Error))
        
                }
            }

            return{
                chapterInput,chapterModal,toggleChapterModal,createOrUpdateChapter,chapterLoading,editChapter
            }
}