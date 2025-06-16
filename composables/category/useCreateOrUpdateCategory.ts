import { showServerError, successMsg } from "~/utils/toast/toast-notification";
import { useFetchCategories } from "./useFetchCategories";



export function useCreateOrUpdateCategory(){


      const categoryInput = ref({ id: null, name: "" });
  const edit = ref(false)
  const saveLoading = ref(false)

  const {fetchCategories}=useFetchCategories()


  const showModal = ref(false)
  function toggleModal() {
     categoryInput.value = {} as any
     edit.value=false
    showModal.value = !showModal.value
  }

  async function createOrUpdate() {

    try {
      const endpoint = edit.value ? '/api/admin/categories/update' :
        '/api/admin/categories/create'

      saveLoading.value = true
      const result = await $fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(categoryInput.value)
      })
      categoryInput.value = {} as any
      await fetchCategories()
      successMsg(result?.message)
      edit.value = false
      saveLoading.value = false

    } catch (error) {
      saveLoading.value = false
     showServerError((error as Error)?.message)

    }
  }


  return{
     categoryInput, createOrUpdate,saveLoading,toggleModal,edit, showModal
  }
}