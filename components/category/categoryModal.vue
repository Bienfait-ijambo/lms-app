<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";


const categoryStore=useCategoryStore()
const {categoryInput,showModal,saveLoading,edit}=storeToRefs(categoryStore)

const rules = {
  name: { required }, // Matches state.firstName
};

const v$ = useVuelidate(rules,categoryInput);

async function submitInput() {
  const result = await v$.value.$validate();

  if (!result) return;
  await categoryStore.createOrUpdate()
  v$.value.$reset()
}
</script>
<template>
  <BaseModal :show="showModal">
    <template #title>
      <h1 class="text-xl mb-4">Create category</h1>
    </template>
    <template #body>
      <FormError :errors="v$.name.$errors">
      

         <BaseInput v-model="categoryInput.name" :placeholder="'Enter category'" />
     
      </FormError>
       
    </template>
    <template #footer>
      <BaseBtn @click="categoryStore.toggleModal" :class="'secondary'" label="Close" />
      <BaseBtn
        :class="'primary'"
        @click="submitInput"
        :label="edit?'Update':'Create'"
        :loading="saveLoading"
      />
    </template>
  </BaseModal>
</template>
