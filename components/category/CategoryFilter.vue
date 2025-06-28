
<script setup>
const props = defineProps(["categories"]);



</script>
<template>
     <aside class="w-64 hidden h-screen lg:block  px-8 py-6 border-r border-gray-200">
  <!-- Title -->
  <h2 class="text-xl font-semibold text-gray-900 mb-6 tracking-tight">Catégories</h2>

  <!-- Category Filters -->
  <div class="space-y-4">
    <label
    
     v-for="(category, index) in categories"
        :key="category.id"
    
    
    class="flex items-center cursor-pointer group">
      <input
        type="checkbox"
        class="hidden peer"
      />
      <div
        class="w-5 h-5 mr-3 border border-gray-300 rounded-sm flex items-center justify-center peer-checked:border-indigo-600 peer-checked:bg-indigo-600 transition"
      >
        <svg
          class="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span class="text-gray-700 text-sm group-hover:text-indigo-600 transition">
        {{category?.name}}
      </span>
    </label>


  </div>
</aside>
</template>