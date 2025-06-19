<script setup >
definePageMeta({ layout: "admin" });

const route = useRoute();

const courseStore = useCourseStore();
const { singleCourseData,edit,showModal,courseInput } = storeToRefs(courseStore);

const categoryStore=useCategoryStore()
await categoryStore.fetchCategories()

await courseStore.fetchSingleCourse(route?.params?.slug);

function showEditModal(id){

  if(typeof id!=='undefined'){
      edit.value=true
      courseInput.value.id=id
    showModal.value=true
    courseStore.appendUserIdPropValue()

  }
  
}
</script>

<template>
  <div>

 <ClientOnly>
      <CourseModal />
    </ClientOnly>
  
    <div class="mb-4 mt-4">
      <h2 class="text-xl font-semibold text-gray-500">Edit course</h2>
    </div>

    <div class="flex gap-4 mb-8">
      <!-- form -->
      <div class="flex w-[65%] bg-white rounded-md p-4">
        <div class="px-2">
          <img
            width="84"
            class="rounded-md"
            src="./../../../public/miro-clone.jpg"
            alt=""
          />
        </div>
        {{ edit }}
        <div class="flex flex-col px-2 flex-1">
          <div class="flex justify-between ">
            <h1 class="text-xl font-medium text-gray-800">
              Title : {{ singleCourseData?.course?.title }}
            </h1>
            <div class="flex">
              <button
              @click="showEditModal(singleCourseData?.course?.id)"
                class="hover:bg-slate-200 text-gray-900 font-bold px-2 cursor-pointer rounded flex items-center"
              >
                <EditIcon />
              </button>

              <button
                class="hover:bg-slate-200 text-gray-900 font-bold py-1 px-2 cursor-pointer rounded flex items-center gap-2"
              >
                <CameraIcon />
              </button>
            </div>
          </div>

          <p class="text-sm text-gray-500 mb-4">
            Category : {{ singleCourseData?.course?.category?.name }} - Price :
            {{
              singleCourseData?.course?.price
                ? "-"
                : singleCourseData?.course?.price
            }}
            $
          </p>
          <p class="text-sm text-gray-500 mb-2">
            {{ singleCourseData?.course?.description }}
          </p>
        </div>
      </div>

      <!-- end form  -->
    </div>
    <!-- Chapters Section -->
    <div class="space-y-4 w-[65%]">
      <div class="flex justify-between items-center mb-2 mt-4">
        <h2 class="text-xl font-semibold text-gray-500">Chapters</h2>

        <BaseBtn :class="'primary'" label=" + Add Chapter" />
      </div>

      <!-- Chapter List -->
      <div class="space-y-3">
        <!-- Chapter Item -->
        <div
          class="bg-white shadow-md rounded-lg p-4 mb-2 flex justify-between items-center"
        >
          <div class="flex gap-3">
            <div class="px-2">
              <img
                width="84"
                class="rounded-md"
                src="./../../../public/miro-clone.jpg"
                alt=""
              />
            </div>
            <div>
              <h3 class="text-lg font-medium text-gray-800">
                Chapter 1: Introduction
              </h3>
            </div>
          </div>
          <div class="flex space-x-2">
            <button class="text-blue-600 hover:underline text-sm">
              Add video
            </button>
            <button class="text-red-600 hover:underline text-sm">Delete</button>
          </div>
        </div>
        <div
          class="bg-white shadow-md rounded-lg p-4 mb-2 flex justify-between items-center"
        >
          <div class="flex gap-3">
            <div class="px-2">
              <img
                width="84"
                class="rounded-md"
                src="./../../../public/miro-clone.jpg"
                alt=""
              />
            </div>
            <div>
              <h3 class="text-lg font-medium text-gray-800">
                Chapter 1: Introduction
              </h3>
            </div>
          </div>
          <div class="flex space-x-2">
            <button class="text-blue-600 hover:underline text-sm">
              Add video
            </button>
            <button class="text-red-600 hover:underline text-sm">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
