<script setup>

const courseStore = useCourseStore();
const {saveLoading,showImageModal,uploadImageLoading } =
  storeToRefs(courseStore);


</script>
<template>
  <BaseModal :show="showImageModal">
    <template #title>
      <h1 class="text-xl mb-4">Upload course Thumbnail</h1>
    </template>
    <template #body>
           <img style="height: 150px" alt="image" id="outputImage" />
            <label for="">Select image</label>
            <input @change="courseStore.selectImage" type="file" id="imageInput"  />
      
      
    </template>
    <template #footer>
      <BaseBtn
        @click="courseStore.toggleImageModal"
        :class="'secondary'"
        label="Close"
      />
      <BaseBtn
        :class="'primary'"
        @click="courseStore.uploadImage"
        :label="'Upload Image'"
        :loading="uploadImageLoading"
      />
    </template>
  </BaseModal>
</template>
