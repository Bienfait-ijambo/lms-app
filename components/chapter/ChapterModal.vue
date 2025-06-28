<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

const courseStore = useCourseStore();
const { chapterInput,chapterLoading,chapterModal } = storeToRefs(courseStore);


const rules = {
  title: { required },
  courseId: { required },
};


 const v$ = useVuelidate(rules,chapterInput);

async function submitInput() {
 
  const result = await v$.value.$validate();
  if (!result) return;
   courseStore.createOrUpdateChapter().then(async function(){
    await courseStore.fetchChapters()
   });
  v$.value.$reset();
}
</script>
<template>
  <BaseModal :show="chapterModal">
    <template #title>
      <h1 class="text-xl mb-4">Chapter</h1>
    </template>
    <template #body>
      <FormError :errors="v$.title.$errors">
        <BaseInput
          class="mb-2"
          v-model="chapterInput.title"
          :placeholder="'Title'"
        />
      </FormError>

    </template>
    <template #footer>
      <BaseBtn
        @click="courseStore.toggleChapterModal"
        :class="'secondary'"
        label="Close"
      />
      <BaseBtn
        :class="'primary'"
        @click="submitInput"
        :label="editChapter ? 'Update' : 'Create'"
        :loading="chapterLoading"
      />
    </template>
  </BaseModal>
</template>
