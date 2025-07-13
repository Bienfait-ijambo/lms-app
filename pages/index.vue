<script setup>
definePageMeta({
  layout: "learner",
});

const courseStore = useCourseStore();
const { serverData: courseData } = storeToRefs(courseStore);

const { isSignedIn, user, isLoaded } = useUser();
const categoryStore = useCategoryStore();
const { serverData } = storeToRefs(categoryStore);

await categoryStore.fetchCategories();
await courseStore.fetchCourses();
</script>
<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <!-- Header -->
    <Header />
    

    <div class="flex">
      <CategoryFilter :categories="serverData?.categories" />

      <main class="flex-1 p-6">
        <h2 class="text-2xl font-semibold mb-4">All Courses</h2>

        <CourseCard :courseData="courseData" />
      </main>
    </div>
  </div>
</template>
