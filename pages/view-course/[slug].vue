<script setup>
definePageMeta({
  layout: "learner",
});

const { isSignedIn, user, isLoaded } = useUser();

useHead({
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/@mux/mux-player",
      defer: true,
    },
  ],
});

const route = useRoute();
const config=useRuntimeConfig()
const courseStore = useCourseStore();
const { singleCourseData, fetchVideoLoading, chapters, chapterVideoData } =
  storeToRefs(courseStore);

await courseStore.fetchChapters();

courseStore.fetchSingleCourse(route?.params?.slug).then(async (data) => {
  await courseStore.fetchChapters(data?.course?.id);
});
</script>
<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <!-- Header -->

    <Header />

    <div class="flex">
      <!-- Main Section: Courses -->
        
      <main class="flex-1 p-6">
        <div class="max-w-7xl mx-auto px-6 py-10">
          <div class="grid grid-cols-12 gap-8">
            <!-- Video Player -->
            
            <div class="col-span-12 lg:col-span-8">
              <StripeElement :singleCourseData="singleCourseData"/>
              <div
                class="aspect-video overflow-hidden shadow"
              v-if="chapterVideoData?.playbackId"
              >
                <ClientOnly>
                  <mux-player
                    :playback-id="chapterVideoData?.playbackId"
                    metadata-viewer-user-id="Placeholder (optional)"
                  ></mux-player>
                </ClientOnly>
              </div>

              <div
                class="aspect-video overflow-hidden shadow"
             v-else
              >
                <div class="flex justify-center">
                  <div class="flex flex-col mt-40">
                    <div align="center" class="mb-2">
                      <img width="100" :src="config?.public?.CHAPTER_WITHOUT_VIDEO_IMG" alt="">
                    </div>
                    <div align="center" >
                   <span class="font-bold"> No video found for this chapter</span>
                  </div>

                  </div>
                </div>
              </div>
              

              <div>
                <h1 class="text-2xl font-semibold text-gray-900 mb-2 mt-2">
                  {{ singleCourseData?.course?.category?.name }}
                  <span>| {{ chapterVideoData?.chapter?.title }}</span>
                </h1>
                <div class="flex gap-2 justify-between">
                  <span
                    class="text-white px-3 py-1 bg-green-600 rounded-full text-sm font-semibold border border-green-600"
                  >
                   {{ singleCourseData?.course?.status}}</span
                  >
                  <button
                    class="cursor-pointer shadow-md text-white bg-blue-400 px-2 py-1 font-bold rounded-md text-sm"
                  >
                    Pay to watch {{ formatAmount(singleCourseData?.course?.price) }} 
                  </button>
                </div>
              </div>

              <!-- Course Description -->
              <div class="mt-6 bg-white rounded-xl p-6 shadow-sm">
                <h2 class="text-xl font-semibold text-gray-900 mb-4">
                  Description
                </h2>
                <div
                  class="text-gray-700 leading-relaxed text-sm"
                  v-html="singleCourseData?.course?.description"
                ></div>
              </div>
            </div>

            <!-- Course Chapters -->
            <div class="col-span-12 lg:col-span-4">
              <div
                class="bg-white rounded-xl shadow-sm p-6 h-full overflow-y-auto max-h-[650px]"
              >
                <h2 class="text-xl font-semibold text-gray-900 mb-4">
                  Chapters
                  <span
                    v-if="fetchVideoLoading"
                    class="text-blue-400 text-sm font-semibold"
                  >
                    <LoadingIcon :loading="fetchVideoLoading" />

                    loading video...</span
                  >
                </h2>

                <CourseChapters
                  :chapters="chapters"
                  @fetchChapterVideo="courseStore.fetchChapterVideo"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
