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
</script>
<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <!-- Header -->
   
    <Header/>

    <div class="flex">
      <!-- Main Section: Courses -->
      <main class="flex-1 p-6">
        <div class="max-w-7xl mx-auto px-6 py-10">
          <div class="grid grid-cols-12 gap-8">
            <!-- Video Player -->
            <div class="col-span-12 lg:col-span-8">
              <div class="aspect-video overflow-hidden shadow">
                <!-- <img class="w-full h-full object-cover" src="/miro-clone.jpg" /> -->
                <ClientOnly>
                  <mux-player
                    playback-id="B9yptBrQinLR00I1TaYp7iCwT0100lA5hpf77DQlH43Te4"
                    metadata-viewer-user-id="Placeholder (optional)"
                  ></mux-player>
                </ClientOnly>
              </div>

              <!-- Course Description -->
              <div class="mt-6 bg-white rounded-xl p-6 shadow-sm">
                <h2 class="text-xl font-semibold text-gray-900 mb-4">
                  Description
                </h2>
                <p class="text-gray-700 leading-relaxed text-sm">
                  Apprenez à maîtriser les bases du développement web avec ce
                </p>
              </div>
            </div>

            <!-- Course Chapters -->
            <div class="col-span-12 lg:col-span-4">
              <div
                class="bg-white rounded-xl shadow-sm p-6 h-full overflow-y-auto max-h-[650px]"
              >
                <h2 class="text-xl font-semibold text-gray-900 mb-4">
                  Chapitres du cours
                </h2>
                <ul class="space-y-4">
                  <li
                    class="flex hover:bg-slate-200 font-semibold cursor-pointer px-2 py-2 rounded-md justify-between items-center"
                  >
                    <span class="text-sm text-gray-800"
                      >1. Introduction to javascript alpha</span
                    >
                    <span class="text-xs text-gray-500">4:50</span>
                  </li>

                  <!-- Add more chapters as needed -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
