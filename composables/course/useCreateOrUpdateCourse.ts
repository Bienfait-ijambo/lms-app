import { showServerError, successMsg } from "~/utils/toast-notification";
import { useFetchCourses } from "./useFetchCourses";



export function useCreateOrUpdateCourse(){

    
    const courseInput = ref({ id: null, title: "",price:"",description:"", categoryId: null, userId: "" });
    const saveLoading = ref(false)
    const edit=ref(false)
    const {fetchCourses}=useFetchCourses()
    

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


        async function createOrUpdate() {
    
            try {
                const endpoint=edit.value?'/api/admin/courses/update':'/api/admin/courses/create'
    
                saveLoading.value = true
                const result = await $fetch(endpoint, {
                    method: 'POST',
                    body: JSON.stringify(courseInput.value)
                })
                courseInput.value = {} as any
                edit.value=false
                showModal.value=false
                await fetchCourses()
                successMsg(result?.message)
                saveLoading.value = false
    
            } catch (error) {
                saveLoading.value = false
                showServerError((error as Error)?.message)
    
            }
        }
    
        return{
            createOrUpdate,
            courseInput,
            saveLoading,
            edit,
            toggleModal,
            showModal,
            appendUserIdPropValue

        }
}