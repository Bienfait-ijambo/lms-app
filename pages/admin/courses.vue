<script setup>
definePageMeta({
  layout: "admin",
});

const courseStore=useCourseStore()
const {courseInput,saveLoading,showModal,serverData}=storeToRefs(courseStore)

const categoryStore=useCategoryStore()

await categoryStore.fetchCategories()
await courseStore.fetchCourses()


</script>
<template>
  <div class="h-screen">
    
    <ClientOnly>
      <CourseModal />
    </ClientOnly>
  
    <div class="flex justify-between mb-4 mt-4">
      <h1 class="text-xl " >Courses</h1>
      
      <BaseBtn   :class="'primary'" label="Create" @click="courseStore.toggleModal" />
    </div>

    <CourseTable :courses="serverData?.courses" />
  </div>
</template>
