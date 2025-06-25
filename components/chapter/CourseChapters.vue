




<script setup lang="ts">
import type { ChapterType } from '~/composables/course/useFetchChapters';

// const props = defineProps(["chapters"]);


const props = defineProps<{
  chapters: ChapterType
}>()

// const emit=defineEmits(['editCategory'])

// const categoryStore = useCategoryStore();
// const { fetchLoading } = storeToRefs(categoryStore);


// async function refreshTable(){
//   await categoryStore.fetchCategories()
// }

</script>
<template>

       <ul class="space-y-4">
            <li v-for="(chapter,index) in chapters" :key="chapter?.id" class="flex justify-between items-center">
              <span class="text-gray-700 text-sm"
                >{{index}}. {{chapter?.title}}</span
              >
              <span
                class="bg-slate-100 rounded-sm hover:shadow-sm px-2 py-2 text-gray-900 text-xs cursor-pointer font-semibold"
                >Add video</span
              >
            </li>
           

            <!-- Repeat for more chapters -->
          </ul>
</template>