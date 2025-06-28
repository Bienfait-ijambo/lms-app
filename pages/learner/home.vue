

<script setup>

definePageMeta({
    layout:"learner"
})

 
 const { isSignedIn, user, isLoaded } = useUser();
 

</script>
<template>
 <div class="min-h-screen bg-gray-50 text-gray-800">
  <!-- Header -->
  <header class="flex justify-between items-center px-4 py-4 bg-white shadow">
    <div class="text-xl font-bold text-indigo-600">LMS Academy</div>
    <div class="flex items-center space-x-4">
      <img
        src="https://i.pravatar.cc/40"
        alt="User Avatar"
        class="w-10 h-10 rounded-full border border-gray-300"
      />
    </div>
  </header>

  <div class="flex">
   


    <!-- Main Section: Courses -->
    <main class="flex-1 p-6">
     <div class="max-w-7xl mx-auto px-6 py-10">
  <div class="grid grid-cols-12 gap-8">
    <!-- Video Player -->
    <div class="col-span-12 lg:col-span-8">
      <div class="aspect-video rounded-xl overflow-hidden shadow">
        <img  class="w-full h-full object-cover" src="/miro-clone.jpg"/>
        <!-- <video
          class="w-full h-full object-cover"
          controls
          poster="/miro-clone.jpg"
        >
          <source src="/videos/sample-course.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video> -->
      </div>

      <!-- Course Description -->
      <div class="mt-6 bg-white rounded-xl p-6 shadow-sm">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Description du cours</h2>
        <p class="text-gray-700 leading-relaxed text-sm">
          Apprenez à maîtriser les bases du développement web avec ce cours complet. Vous serez
          guidé pas à pas dans la création d'une application moderne, tout en apprenant les bonnes
          pratiques du métier.
        </p>
      </div>
    </div>

    <!-- Course Chapters -->
    <div class="col-span-12 lg:col-span-4">
      <div class="bg-white rounded-xl shadow-sm p-6 h-full overflow-y-auto max-h-[650px]">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Chapitres du cours</h2>
        <ul class="space-y-4">
          <li class="flex justify-between items-center">
            <span class="text-sm text-gray-800">1. Introduction</span>
            <span class="text-xs text-gray-500">4:50</span>
          </li>
          <li class="flex justify-between items-center">
            <span class="text-sm text-gray-800">2. Configuration</span>
            <span class="text-xs text-gray-500">10:20</span>
          </li>
          <li class="flex justify-between items-center">
            <span class="text-sm text-gray-800">3. Composants Vue</span>
            <span class="text-xs text-gray-500">14:45</span>
          </li>
          <li class="flex justify-between items-center">
            <span class="text-sm text-gray-800">4. API & Authentification</span>
            <span class="text-xs text-gray-500">18:10</span>
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