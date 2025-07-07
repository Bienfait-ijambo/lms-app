<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

const courseStore = useCourseStore();
const { courseInput, saveLoading, showModal, edit,courseStatus } = storeToRefs(courseStore);

const categoryStore = useCategoryStore();
const { serverData } = storeToRefs(categoryStore);

const rules = {
  title: { required },
  categoryId: { required },
  userId: { required },

  price: { required },
  status: { required },

};

const { price,status, description, ...restProps } = rules;
const propsToValidate = edit.value ? { ...rules } : { ...restProps };

const v$ = useVuelidate(propsToValidate, courseInput);

async function submitInput() {
  const result = await v$.value.$validate();
  if (!result) return;
  await courseStore.createOrUpdate();
  v$.value.$reset();
}
</script>
<template>
  <BaseModal :show="showModal">
    <template #title>
      <h1 class="text-xl mb-4">{{ edit ? "Update" : "Create" }} course</h1>
    </template>
    <template #body>
      <FormError :errors="v$.title.$errors">
        <BaseInput
          class="mb-2"
          v-model="courseInput.title"
          :placeholder="'Title'"
        />
      </FormError>

      <FormError v-if="edit" :errors="v$?.price?.$errors">
        <BaseInput
          class="mb-2"
          v-model="courseInput.price"
          :placeholder="'Price'"
        />
      </FormError>

      <FormError :errors="v$?.categoryId?.$errors" class="mb-2">
        <select
          v-model="courseInput.categoryId"
          class="peer w-full pl-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-200 transition-all"
        >
          <option selected="true" value="">Select category</option>
          <option
            v-for="category in serverData?.categories"
            :key="category?.id"
            :value="category?.id"
          >
            {{ category?.name }}
          </option>
        </select>
      </FormError>


      <FormError :errors="v$?.status?.$errors" class="mb-2">
        <select
          v-model="courseInput.status"
          class="peer w-full pl-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-200 transition-all"
        >
          <option selected="true" value="">Select status</option>
          <option
            v-for="status in courseStatus"
            :key="status"
            :value="status"
          >
            {{ status }}
          </option>
        </select>
      </FormError>

    

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
