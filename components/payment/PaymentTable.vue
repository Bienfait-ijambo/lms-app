<script setup>
const props = defineProps(["payments"]);

async function refreshTable() {
  //   await categoryStore.fetchCategories()
}
</script>
<template>
  <div class="flex justify-between mb-4 mt-4">
    <!-- <button
          @click="refreshTable"
          title="Refresh table"
            class="hover:bg-slate-200 text-gray-900 font-bold py-1 px-2 cursor-pointer rounded flex items-center gap-2 "
          >
            <LoadingIcon v-if="fetchLoading"   />

            <RefreshIcon v-else  />
          </button> -->
  </div>

  <table class="bg-white rounded-md w-full shadow-sm border border-gray-300">
    <thead>
      <tr class="bg-gray-100 text-left">
        <td class="border border-gray-300 py-2 px-4">#</td>
        <td class="border border-gray-300 py-2 px-4">Course</td>
        <td class="border border-gray-300 py-2 px-4">User-ID</td>

        <td class="border border-gray-300 py-2 px-4">Amount</td>
        <td class="border border-gray-300 py-2 px-4">Status</td>

        <td class="border border-gray-300 py-2 px-4">Date</td>
      </tr>
    </thead>

    <tbody>
      <tr
        class="text-left"
        v-for="(payment, index) in payments"
        :key="payment.id"
      >
        <td class="border border-gray-300 py-2 px-4">
          {{ index + 1 }}
        </td>
        <td class="border border-gray-300 py-2 px-4">
          {{ payment?.course?.title }}
        </td>
        <td class="border border-gray-300 py-2 px-4">
          {{ payment?.userId }}
        </td>
        <td class="border border-gray-300 py-2 px-4">
          {{ formatAmount(parseFloat(payment?.amount)) }}
        </td>
        <td class="border border-gray-300 py-2 px-4">
          <span class="bg-green-300 rounded-md px-1 py-1">
            {{ payment?.status }}
          </span>
        </td>
        <td class="border border-gray-300 py-2 px-4">
          {{ payment?.createdAt }}
        </td>
      </tr>
    </tbody>
  </table>
  <div>
    <slot name="pagination"></slot>
  </div>
</template>
