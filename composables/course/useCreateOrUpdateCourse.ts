import { showServerError, successMsg } from "~/utils/toast/toast-notification";
import { useFetchCourses } from "./useFetchCourses";



export function useCreateOrUpdateCourse(){

    
    const courseInput = ref({ id: null, title: "", categoryId: null, userId: "" });
    const saveLoading = ref(false)
    const {fetchCourses}=useFetchCourses()
    

    const showModal = ref(false)
    const { user } = useUser();

    function toggleModal() {
        //  categoryInput.value = {} as any
        //  edit.value=false
        courseInput.value.userId = (user.value?.id as string)
        showModal.value = !showModal.value
    }


        async function createOrUpdate() {
    
            try {
    
                saveLoading.value = true
                const result = await $fetch('/api/admin/courses/create', {
                    method: 'POST',
                    body: JSON.stringify(courseInput.value)
                })
                courseInput.value = {} as any
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
            toggleModal,
            showModal

        }
}