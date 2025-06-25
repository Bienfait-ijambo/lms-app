<script setup>
definePageMeta({ layout: "admin" });

const route = useRoute();

const courseStore = useCourseStore();
const { singleCourseData, edit, showModal, courseInput, saveLoading,chapters } =
  storeToRefs(courseStore);

const categoryStore = useCategoryStore();
await categoryStore.fetchCategories();
await courseStore.fetchChapters();


courseStore.fetchSingleCourse(route?.params?.slug).then((data) => {
  courseInput.value.description = data?.course?.description;
  courseInput.value.id = data?.course?.id;
});

function showEditModal(id) {
  if (typeof id !== "undefined") {
    edit.value = true;
    courseInput.value.id = id;
    showModal.value = true;
    courseStore.appendUserIdPropValue();
  }
}
const config=useRuntimeConfig()
const fallbackImage=config.public?.FALL_BACK_IMG_URL
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-10">
    <!-- Single Course Card (Top) -->
    <ClientOnly>
      <CourseModal />
      <UploadImageModal />
      <ChapterModal/>
    </ClientOnly>
    <div class="grid grid-cols-12 gap-8 mb-10">
      <div
        class="col-span-12 bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row items-center gap-6"
      >
        <!-- Thumbnail -->
        <img
          :src="singleCourseData?.course?.imageUrl || fallbackImage"
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
              @click="showEditModal(singleCourseData?.course?.id)"
              class="hover:bg-slate-200 text-gray-900 font-bold px-2 py-2 cursor-pointer rounded flex items-center"
            >
              <EditIcon />
            </button>

            <button
              title="Upload course image"
              @click="courseStore.toggleImageModal(singleCourseData?.course?.id)"
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

        <div class="flex justify-end mb-3" >
         <button
         @click="courseStore.toggleChapterModal(singleCourseData?.course?.id)"
                class=" bg-sky-500 text-white flex p-1 px-2 rounded-sm hover:shadow-sm 1  text-xs cursor-pointer font-semibold"
                ><AddIcon ></AddIcon> <span class="pt-1 px-2" >Add Chapter</span> 
                
                </button
              >
          
        </div >

        <CourseChapters :chapters="chapters"/>


        </div>
      </div>
    </div>
  </div>
</template>
