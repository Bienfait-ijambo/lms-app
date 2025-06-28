import { showServerError, successMsg } from "~/utils/toast-notification";
import { useFetchCourses } from "./useFetchCourses";



export function useCreateOrUpdateCourse(){

    

    const saveLoading = ref(false)
    const edit=ref(false)
    const {fetchCourses}=useFetchCourses()
      const courseInput = ref({ id: null, title: "",price:"",description:"", categoryId: null, userId: "" });
    
    

    const showModal = ref(false)
    const { user } = useUser();

    function appendUserIdPropValue(){
        courseInput.value.userId = (user.value?.id as string)
    }

    function toggleModal() {
        //  categoryInput.value = {} as any
         edit.value=false
        appendUserIdPropValue()
        showModal.value = !showModal.value
    }



    async function updateCourseDescription() {
    
            try {
             
                saveLoading.value = true
              
                const {description,id,...restInput}=courseInput.value
                
                const result = await $fetch('/api/admin/courses/update-description', {
                    method: 'POST',
                    body: JSON.stringify({id:id,description:description})
                   

                })
                
                successMsg(result?.message)
                saveLoading.value = false
    
            } catch (error) {
            
                saveLoading.value = false
                showValidationErrors((error as Error))
    
            }
        }


        async function createOrUpdate() {
    
            try {
                const endpoint=edit.value?'/api/admin/courses/update':'/api/admin/courses/create'
    
                saveLoading.value = true
              
                const {price,...restInput}=courseInput.value
                
                const result = await $fetch(endpoint, {
                    method: 'POST',
                    body: JSON.stringify({price:parseInt(price),...restInput})
                   

                })
                // courseInput.value = {} as any
                edit.value=false
                showModal.value=false
                await fetchCourses()
                successMsg(result?.message)
                saveLoading.value = false
    
            } catch (error) {
             const serverError=error?.data?.data?.data
            
                saveLoading.value = false
                showValidationErrors((error as Error))
    
            }
        }
    
        return{
            createOrUpdate,
            courseInput,
            saveLoading,
            edit,
            toggleModal,
            showModal,
            appendUserIdPropValue,
            updateCourseDescription

        }
}