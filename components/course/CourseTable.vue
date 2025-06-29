<script setup>
const props = defineProps(["courses"]);

const emit = defineEmits(["editCourse"]);

const courseStore = useCourseStore();
const { serverData, fetchLoading, search } = storeToRefs(courseStore);


const searchCourse = __debounce(async function (event) {
  const val = event[0].target.value;
  search.value = val;
  await courseStore.fetchCourses();
}, 1000);

async function refreshTable() {
  await courseStore.fetchCourses();
}

</script>
<template>
  <div class="flex justify-between mb-4 mt-4">
    <div class="flex">
      <button
        @click="refreshTable"
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

    <BaseBtn
      :class="'primary'"
      label="Create"
      @click="courseStore.toggleModal"
    />
  </div>

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
      <tr class="text-left" v-for="(course, index) in courses" :key="course.id">
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
            @click="emit('editCourse', course)"
            class="justify-center hover:bg-slate-200 cursor-pointer text-gray-900 font-bold py-2 px-4 rounded flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="loading"
          >
            <EditIcon />
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <div>
   <slot name="pagination"></slot>
  </div>
</template>
