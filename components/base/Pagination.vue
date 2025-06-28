
<script setup>
const props = defineProps(["serverData"]);
const emit=defineEmits(['paginate'])

</script>
<template>
 <button
      class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      :disabled="serverData?.metadata?.page === 1"
      @click="emit('paginate',serverData?.metadata?.page-1)"
    >
      Prev
     
    </button>

    <span
      >Page {{ serverData?.metadata?.page }} of
      {{ serverData?.metadata?.totalPages }}</span
    >

    <button
      class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      :disabled="
        serverData?.metadata?.page === serverData?.metadata?.totalPages
      "
      @click="emit('paginate',serverData?.metadata?.page+1)"
    >
      Next
    </button>

</template>