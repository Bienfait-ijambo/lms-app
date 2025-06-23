<script setup>



const courseStore = useCourseStore();
const {showImageModal } =
  storeToRefs(courseStore);

const image=ref(null)


function selectImage(event){
    const selectedImage=event.target.files[0]
    const output=document.querySelector('#outputImage')
    output.src=URL.createObjectURL(selectedImage)
    output.onload=function(){
        URL.revokeObjectURL(selectedImage)
    }
    image.value=selectedImage
    
    
}
async function uploadImageToServer(){
    console.log('...')

}
</script>
<template>
  <BaseModal :show="showImageModal">
    <template #title>
      <h1 class="text-xl mb-4">Upload Course Thumbnail</h1>
    </template>
    <template #body>
      
      <img style="height: 150px" alt="image" id="outputImage" />
      <label for="">Select image</label>

      <input @change="selectImage" type="file" id="imageInput" />
    </template>
    <template #footer>
      <BaseBtn
        @click="courseStore.toggleImageModal"
        :class="'secondary'"
        label="Close"
      />
      <BaseBtn
        :class="'primary'"
        @click="uploadImageToServer"
        :label="'Upload image'"
        :loading="saveLoading"
      />
    </template>
  </BaseModal>
</template>
