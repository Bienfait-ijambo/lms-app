<script setup>

const courseStore = useCourseStore();
const {   
        showVideoModal,
        uploadVideoLoading,
        progressBar,uploadVideoInput} =
  storeToRefs(courseStore);


</script>
<template>
  <BaseModal :show="showVideoModal">
    <template #title>
      <h1 class="text-xl mb-4">Upload Video</h1>
    </template>
    <template #body>
        <!-- {{uploadVideoInput}} -->
           <!-- <img style="height: 150px" alt="image" id="outputImage" /> -->
          <p>
             upload progress : {{progressBar}} %
          </p>
           <p>
             <label for="" class="mb-2 font-bold">Select Video</label>
           </p>
            <input @change="courseStore.selectVideo" type="file" id="videoInput"  />
      
      
    </template>
    <template #footer>
      <BaseBtn
        @click="courseStore.toggleVideoModal"
        :class="'secondary'"
        label="Close"
      />
      <BaseBtn
        :class="'primary'"
        @click="courseStore.uploadVideo"
        :label="'Upload Video'"
        :loading="uploadVideoLoading"
      />
    </template>
  </BaseModal>
</template>
