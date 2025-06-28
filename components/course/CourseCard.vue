
<script setup >

const props = defineProps(["courses"]);


const config = useRuntimeConfig();
const fallbackImage = config.public?.FALL_BACK_IMG_URL;
</script>
<template>
<div  v-for="(course, index) in courses" :key="course.id" class="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4">
          <img
            :src="course?.imageUrl || fallbackImage"
            alt="Course"
            class="w-full h-40 object-cover rounded"
          />
          <div class="mt-3">
            <h3 class="font-semibold text-lg">{{course?.title}}</h3>
        
            <p class="text-indigo-600 font-bold mt-2">{{course?.price}} $</p>
          </div>
        </div>
    </template>

