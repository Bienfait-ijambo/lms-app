

<script setup>
const props = defineProps(["loading","label","class"]);

const primary="flex justify-center bg-sky-500 cursor-pointer hover:bg-sky-600 text-white py-2 px-4 rounded items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
const secondary="flex justify-center border border-gray-300 text-gray-900  cursor-pointer py-2 px-4 rounded items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
</script>
<template>
  <button
  :class="props.class==='primary'?primary:secondary"

  :disabled="loading"
>
  <LoadingIcon v-show="loading" />
  {{ label }}
</button>

</template>
