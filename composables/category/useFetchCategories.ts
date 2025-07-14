

export function useFetchCategories() {

  const fetchLoading = ref(false)

  const serverData = ref({})



  async function fetchCategories() {
    try {
      fetchLoading.value = true
      const { data } = await useFetch('/api/admin/categories/get',{
        headers:{
          Accept: "application/json",
        }
      })
      serverData.value = data.value as any

      fetchLoading.value = false

    } catch (error) {
      fetchLoading.value = false
    }


  }


  return {
    fetchCategories,
    fetchLoading,
    serverData
  }
}