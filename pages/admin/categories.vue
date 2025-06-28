<script setup>
definePageMeta({
  layout: "admin",
});


const categoryStore = useCategoryStore();
const { categoryInput,edit,serverData,showModal } = storeToRefs(categoryStore);

await categoryStore.fetchCategories()

function editCategory(category){
 
  categoryInput.value=category
  edit.value=true
  showModal.value=true
}


</script>
<template>
  <div class="h-screen">
    
    <ClientOnly>
      <CategoryModal />
    </ClientOnly>
  
    <div class="flex justify-between mb-4 mt-4">
      <h1 class="text-xl " >Categories</h1>
      
     
    </div>

    <CategoryTable @editCategory="editCategory" :categories="serverData?.categories" />
  </div>
</template>
