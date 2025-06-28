

<script setup>

definePageMeta({
    layout:"learner"
})

const courseStore=useCourseStore()
const {serverData:courseData}=storeToRefs(courseStore)

 
 const { isSignedIn, user, isLoaded } = useUser();
 const categoryStore = useCategoryStore();
const { serverData } = storeToRefs(categoryStore);

await categoryStore.fetchCategories()
await courseStore.fetchCourses()


</script>
<template>
    <div class="min-h-screen bg-gray-50 text-gray-800">
  <!-- Header -->
  <header class="flex justify-between items-center px-6 py-4 bg-white shadow">
    <div class="text-xl font-bold text-indigo-600">LMS Academy</div>
    <div class="flex items-center space-x-4">
         <UserButton />
    </div>
  </header>

  <div class="flex">
    <!-- Sidebar: Course Categories -->
  <CategoryFilter :categories="serverData?.categories" />



    <!-- Main Section: Courses -->
    <main class="flex-1 p-6">
      <h2 class="text-2xl font-semibold mb-4">All Courses</h2>
      


      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Course Card -->
         
        
       <CourseCard :courses="courseData?.courses"
 />


      </div>
    </main>
  </div>
</div>

  </template>