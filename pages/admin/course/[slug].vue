<script setup>
definePageMeta({ layout: "admin" });

const route = useRoute();

const courseStore = useCourseStore();
const { singleCourseData, edit, showModal, courseInput, saveLoading, } =
  storeToRefs(courseStore);

const categoryStore = useCategoryStore();
await categoryStore.fetchCategories();

  courseStore.fetchSingleCourse(route?.params?.slug).then((data)=>{
  courseInput.value.description = data?.course?.description
  courseInput.value.id = data?.course?.id

})

function showEditModal(id) {
  if (typeof id !== "undefined") {
    edit.value = true;
    courseInput.value.id = id;
    showModal.value = true;
    courseStore.appendUserIdPropValue();
  }
}


</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-10">
    <!-- Single Course Card (Top) -->
       <ClientOnly>
      <CourseModal />
      <UploadImageModal />

    </ClientOnly>
    <div class="grid grid-cols-12 gap-8 mb-10">
      <div
        class="col-span-12 bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row items-center gap-6"
      >
     
        <!-- Thumbnail -->
        <img
          src="/miro-clone.jpg"
          alt="Course Thumbnail"
          class="w-full md:w-64 h-40 object-cover rounded-lg"
        />

        <!-- Info -->
        <div class="flex-1">
          <h1 class="text-2xl font-bold text-gray-800 mb-2">
            {{ singleCourseData?.course?.title }}
          </h1>
          <p class="text-gray-600 mb-4">
            <span class="font-medium">user-name</span>
          </p>
          <div class="flex items-center gap-4 text-sm text-gray-500">
             <span>$ {{ singleCourseData?.course?.price }}</span>
            <span>💻 12 Chapiters</span>
            <span>⏱ 4h 30m</span>
          </div>

          <div class="flex items-center gap-2 text-sm text-gray-500 mt-2">
            <button
            title="Edit course"
            @click="showEditModal( singleCourseData?.course?.id)"
              class="hover:bg-slate-200 text-gray-900 font-bold px-2 py-2 cursor-pointer rounded flex items-center"
            >
              <EditIcon />
            </button>

            <button
             title="Upload course image"
            @click="courseStore.toggleImageModal"
              class="hover:bg-slate-200 text-gray-900 font-bold py-2 px-2 cursor-pointer rounded flex items-center gap-2"
            >
              <CameraIcon />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Description + Chapters Grid -->
    <div class="grid grid-cols-12 gap-8">
      <!-- Course Description -->
      <div class="col-span-12 lg:col-span-8">
        <div class="bg-white p-6 rounded-xl shadow-sm">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Description</h2>
          <div class="mb-2">
          
            <ClientOnly>
              <rich-editor
                :value="courseInput.description"
                @input="(event) => (courseInput.description = event)"
              />
            </ClientOnly>
          </div>

          <div class="flex justify-end">
            <BaseBtn
              @click="courseStore.updateCourseDescription"
              :class="'primary'"
              :label="'Update'"
              :loading="saveLoading"
            />
          </div>
        </div>
      </div>

      <!-- Course Chapters -->
      <div class="col-span-12 lg:col-span-4">
        <div
          class="bg-white p-6 rounded-xl shadow-sm h-full overflow-y-auto max-h-[500px]"
        >
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Chapitres</h2>
          <ul class="space-y-4">
            <li class="flex justify-between items-center">
              <span class="text-gray-700 text-sm"
                >1. Introduction au cours</span
              >
              <span
                class="bg-slate-100 rounded-sm hover:shadow-sm px-2 py-2 text-gray-900 text-xs cursor-pointer font-semibold"
                >Add video</span
              >
            </li>
            <li class="flex justify-between items-center">
              <span class="text-gray-700 text-sm"
                >2. Introduction au cours</span
              >
              <span
                class="bg-slate-100 rounded-sm hover:shadow-sm px-2 py-2 text-gray-900 text-xs cursor-pointer font-semibold"
                >Add video</span
              >
            </li>
            <li class="flex justify-between items-center">
              <span class="text-gray-700 text-sm"
                >3. Introduction au cours</span
              >
              <span
                class="bg-slate-100 rounded-sm hover:shadow-sm px-2 py-2 text-gray-900 text-xs cursor-pointer font-semibold"
                >Add video</span
              >
            </li>

            <!-- Repeat for more chapters -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
