<script setup>
const props = defineProps(["categories"]);

const courseStore=useCourseStore()
const {categoryFilter}=storeToRefs(courseStore)

async function selectCategory(categoryId){

  const exist=categoryFilter.value.filter(category=>category===categoryId)
 if(exist.length===0){
  categoryFilter.value.push(categoryId)
  await courseStore.fetchCourses(categoryFilter.value);
 }else{
   const categories=categoryFilter.value.filter(category=>category!==categoryId)
   categoryFilter.value=[]
  categoryFilter.value=categories
  await courseStore.fetchCourses(categoryFilter.value);
 }

}
</script>
<template>
  <aside
    class="w-64 hidden h-screen lg:block px-8 py-6 border-r border-gray-200"
  >
    <!-- Title -->
    <h2 class="text-xl font-semibold text-gray-900 mb-6 tracking-tight">
      Catégories
    </h2>

    <!-- Category Filters -->
  
   
    <div class="space-y-4 ">
      <label
        v-for="(category, index) in categories"
        :key="category.id"
        @click="selectCategory(category?.id)"
      
        class="flex items-center cursor-pointer group"
      >
        <input
          type="checkbox"
          class="form-checkbox h-5 w-5 text-blue-600 rounded-md border-gray-300 focus:ring-blue-500"
        />

        <span
         @click="selectCategory(category?.id)"
          class="text-gray-700 px-2 text-sm group-hover:text-indigo-600 transition"
        >
          {{ category?.name }}
        </span>
      </label>
    </div>
  </aside>
</template>
