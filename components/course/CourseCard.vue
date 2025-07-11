<script setup>
const props = defineProps(["courseData"]);

const config = useRuntimeConfig();
const fallbackImage = config.public?.FALL_BACK_IMG_URL;

const courseStore = useCourseStore();
const { fetchLoading, search } = storeToRefs(courseStore);

const searchCourse = __debounce(async function (event) {
  const val = event[0].target.value;
  search.value = val;
  await courseStore.fetchCourses();
}, 1000);
</script>
<template>
  <div class="flex w-[23%] mb-3">
    <button
      title="Refresh table"
      class="hover:bg-slate-200 text-gray-900 font-bold py-1 px-2 cursor-pointer rounded flex items-center gap-2"
    >
      <LoadingIcon v-if="fetchLoading" />

      <RefreshIcon v-else />
    </button>

    <BaseInput
      :placeholder="'Search...'"
      @keydown="searchCourse"
      v-model="search"
    />
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
    <!-- Course Card -->

    <div
      v-for="(course, index) in courseData?.courses"
      :key="course.id"
      class="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4"
    >
      <img
        :src="course?.imageUrl || fallbackImage"
        alt="Course"
        class="w-full h-40 object-cover rounded"
      />
      <div class="mt-3">
        <h3 class="font-semibold text-lg">{{ course?.title }}</h3>
        <span class="bg-slate-100 px-2 py-1 rounded-full text-sm">{{ course?.category?.name }}</span>
        <div class="flex justify-between">
          <div>
            <p class="text-blue-400 font-bold mt-2">{{ formatAmount(course?.price) }} </p>
          </div>

           <div>
            <NuxtLink
            :to="'/view-course/'+course?.slug"
              class="text-sm bg-blue-400 rounded-full px-2 py-1 text-white font-semibold"
            >
              View Course
            </NuxtLink>
          </div>
         
        </div>
      </div>
    </div>
  </div>

  <Pagination
    :serverData="courseData"
    @paginate="courseStore.paginateCourses"
  ></Pagination>
</template>
