

<script setup>

const props = defineProps({
  icon: String,
  label: String,
  collapsed: Boolean,
})

// Use v-html to inject raw SVG safely (hardcoded, not user-generated)
const iconSvg = computed(() => {
  const icons = {
    Courses: `
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path d="M3 12h18M3 6h18M3 18h18" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    `,
    Categories: `
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06A1.65 1.65 0 0015 19.4a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 01-1.06 0 
          1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-.33-1.82 1.65 1.65 0 010-1.06 
          A1.65 1.65 0 004.6 9a1.65 1.65 0 00.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001.82.33h.06a1.65 1.65 0 011.06 0 
          1.65 1.65 0 001.82-.33 1.65 1.65 0 012.83 0l.06.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9c.15.33.15.73 0 1.06a1.65 1.65 0 00.33 1.82z" />
      </svg>
    `,
  
  }

  return icons[props.icon] || ''
})
</script>

<template>
  <NuxtLink
    :to="'/admin/'+props.icon"
    class="flex items-center  space-x-3 px-4 py-3  hover:bg-gray-100 transition-all duration-200"
    :class="{ 'justify-center': collapsed }"
  >
    <!-- Icon -->
    <span class="w-6 h-6 text-gray-600" v-html="iconSvg" />

    <!-- Label -->
    <span
      v-if="!collapsed"
      class="text-gray-700 text-sm"
    >{{ label }}</span>
  </NuxtLink>
</template>
