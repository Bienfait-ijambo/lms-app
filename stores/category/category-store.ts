
import { defineStore,acceptHMRUpdate } from 'pinia'
import { useCreateOrUpdateCategory } from '~/composables/category/useCreateOrUpdateCategory';
import { useFetchCategories } from '~/composables/category/useFetchCategories';


export const useCategoryStore = defineStore('category-store', () => {


  const fetchCategoryProps=useFetchCategories()
  const createOrUpdateCategoryProps=useCreateOrUpdateCategory()


  return { ...fetchCategoryProps,...createOrUpdateCategoryProps}
})


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCategoryStore, import.meta.hot))
}