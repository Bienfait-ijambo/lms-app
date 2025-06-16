


<script setup>
const props = defineProps(["courses"]);

const emit=defineEmits(['editCourse'])


const courseStore=useCourseStore()
const {serverData}=storeToRefs(courseStore)


</script>
<template>
  <table class="bg-white rounded-md w-full shadow-sm border border-gray-300">
    <thead>
      <tr class="bg-gray-100 text-left">
        <td class="border border-gray-300 py-2 px-4">#</td>
        <td class="border border-gray-300 py-2 px-4">Title</td>
        <td class="border border-gray-300 py-2 px-4">Category</td>

        <td class="border border-gray-300 py-2 px-4">Action</td>
      </tr>
    </thead>

    <tbody>
      <tr
        class="text-left"
        v-for="(course, index) in courses"
        :key="course.id"
      >
        <td class="border border-gray-300 py-2 px-4">
          {{ index + 1 }}
        </td>
          <td class="border border-gray-300 py-2 px-4">
          {{ course?.title }}
        </td>
        <td class="border border-gray-300 py-2 px-4">
          {{ course?.category?.name }}
        </td>

        <td class="border 0 border-gray-300 py-2 px-4">
            <button
            @click="emit('editCourse',course)"
            class=" justify-center hover:bg-slate-200 text-gray-900 font-bold py-2 px-4 rounded flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="loading"
          >
            <EditIcon />

          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <div>
      <button
        class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        :disabled="serverData?.metadata?.page === 1"
        @click="courseStore.fetchCourses(serverData?.metadata?.page - 1)"
      >
        Prev
      </button>

      <span>Page {{ serverData?.metadata?.page }} of {{ serverData?.metadata?.totalPages }}</span>

      <button
        class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        :disabled="serverData?.metadata?.page === serverData?.metadata?.totalPages"
        @click="courseStore.fetchCourses(serverData?.metadata?.page + 1)"
      >
        Next
      </button>
    </div>
</template>