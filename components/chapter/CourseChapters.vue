<script setup lang="ts">
import type { ChapterType, IChapter } from "~/composables/course/useFetchChapters";

const props = defineProps<{
  chapters: ChapterType;
  checkCourseStatusData:{lockChapters:boolean}
}>();


const emit = defineEmits<{
  (e: "uploadVideo", chapterId: string): void;
  (e: "fetchChapterVideo", videoUrl: string): void;
}>();

const config = useRuntimeConfig();

const { isSignedIn, user, isLoaded } = useUser();
const role = user.value?.publicMetadata?.role as string;

function fetchVideoChapter(chapter:IChapter){
  const lock=props.checkCourseStatusData?.lockChapters
  if(lock){
    showServerError('This chapter is locked, you need to pay')
  }else{
    emit('fetchChapterVideo', chapter?.videoUrl)
  }
  
}
</script>
<template>
  <ul class="space-y-4">
    <li
      v-for="(chapter, index) in chapters"
      :key="chapter?.id"
      @click="fetchVideoChapter(chapter)"
      class="flex justify-between items-center cursor-pointer hover:bg-slate-100"
    >
      <div class="flex items-center gap-2">
        <LockIcon v-if="checkCourseStatusData?.lockChapters"></LockIcon>
        <img
        v-else
          width="50"
          class="border border-gray-300 rounded-md"
          :src="
            chapter?.videoUrl
              ? config?.public?.CHAPTER_WITH_VIDEO_IMG
              : config?.public?.CHAPTER_WITHOUT_VIDEO_IMG
          "
          alt="image"
        />
        
        
        <span class="text-gray-700 text-sm"
          >{{ index }}. {{ chapter?.title }}
        </span>
      </div>
      <span
        v-if="role === 'admin'"
        @click="emit('uploadVideo', chapter?.id)"
        class="bg-slate-100 rounded-sm hover:shadow-sm px-2 py-2 text-gray-900 text-xs cursor-pointer font-semibold"
        >Add video</span
      >
    </li>

    
  </ul>
</template>
