


<script setup>
const props = defineProps(["categories"]);

const emit=defineEmits(['editCategory'])

const categoryStore = useCategoryStore();
const { fetchLoading } = storeToRefs(categoryStore);


async function refreshTable(){
  await categoryStore.fetchCategories()
}

</script>
<template>

  <div class="flex  justify-between mb-4 mt-4">
          <button
          @click="refreshTable"
          title="Refresh table"
            class="hover:bg-slate-200 text-gray-900 font-bold py-1 px-2 cursor-pointer rounded flex items-center gap-2 "
          >
            <LoadingIcon v-if="fetchLoading"   />

            <RefreshIcon v-else  />
          </button>

         
        
          <BaseBtn   :class="'primary'" label="Create" @click="categoryStore.toggleModal" />
      </div>

  <table class="bg-white rounded-md w-full shadow-sm border border-gray-300">
    <thead>
      <tr class="bg-gray-100 text-left">
        <td class="border border-gray-300 py-2 px-4">#</td>
        <td class="border border-gray-300 py-2 px-4">Name</td>
        <td class="border border-gray-300 py-2 px-4">Action</td>
      </tr>
    </thead>

    <tbody>
      <tr
        class="text-left"
        v-for="(category, index) in categories"
        :key="category.id"
      >
        <td class="border border-gray-300 py-2 px-4">
          {{ index + 1 }}
        </td>
        <td class="border border-gray-300 py-2 px-4">
          {{ category?.name }}
        </td>

        <td class="border 0 border-gray-300 py-2 px-4">
            <button
            @click="emit('editCategory',category)"
            class=" justify-center hover:bg-slate-200 text-gray-900 font-bold py-2 px-4 rounded flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="loading"
          >
            <EditIcon />

          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>