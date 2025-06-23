<script setup>

// async function submitInput() {
 
//   const result = await v$.value.$validate();
//   if (!result) return;
//   await courseStore.createOrUpdate();
//   v$.value.$reset();
// }
</script>
<template>
  <BaseModal :show="showModal">
    <template #title>
      <h1 class="text-xl mb-4">Uploa</h1>
    </template>
    <template #body>
      
      
      
    </template>
    <template #footer>
      <BaseBtn
        @click="courseStore.toggleModal"
        :class="'secondary'"
        label="Close"
      />
      <BaseBtn
        :class="'primary'"
        @click="submitInput"
        :label="edit ? 'Update' : 'Create'"
        :loading="saveLoading"
      />
    </template>
  </BaseModal>
</template>
