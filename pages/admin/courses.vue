<script setup>
definePageMeta({
  layout: "admin",
});

const courseStore=useCourseStore()
const {courseInput,saveLoading,showModal,serverData}=storeToRefs(courseStore)

const categoryStore=useCategoryStore()

await categoryStore.fetchCategories()
await courseStore.fetchCourses()

const router=useRouter()

function editCourse(course){
  router.push('/admin/course/'+course?.slug)
}


</script>
<template>
  <div class="h-screen">
    
    <ClientOnly>
      <CourseModal />
    </ClientOnly>
  
    <div class="flex justify-between mb-4 mt-4">

      <h1 class="text-xl " >Courses</h1>

  

    </div>

    <CourseTable @editCourse="editCourse" :courses="serverData?.courses" />
  </div>
</template>
