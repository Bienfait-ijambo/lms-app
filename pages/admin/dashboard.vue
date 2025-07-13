<script setup>
import { Chart, registerables } from "chart.js";

// registerables is array in chart.js that contains all the components and  elements
//  needed to make various chart types (like Bar, Line, Pie, etc.)
Chart.register(...registerables);

definePageMeta({ layout: "admin" });

const dashboardStore = useDashboardStore();
const { dashboardData } = storeToRefs(dashboardStore);

await dashboardStore.fetchDataboardData();

const chartRef = ref(null);
const chartInstance = ref(null);

const label = dashboardData.value?.totalAmoutByDate.map(
  (item) => new Date(item.createdAt).toISOString().split("T")[0]
);
const amount = dashboardData.value?.totalAmoutByDate.map(
  (item) => item?._sum?.amount
);

const chartData = {
  labels: label,

  datasets: [
    {
      label: "Payments ($)",
      data: amount,
      fill: false,
      borderColor: "#3b82f6",
      backgroundColor: "#cfe2ff",
      tension: 0.3,
      pointBackgroundColor: "#3b82f6",
    },
  ],
};

function drawChart() {
  const ctx = chartRef.value.getContext("2d");

  // Destroy existing chart if it exists
  if (chartInstance.value) {
    chartInstance.value.destroy();
  }

  // Create new chart and store it
  chartInstance.value = new Chart(ctx, {
    type: "bar",
    data: chartData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Earnings Over Time",
        },
      },
    },
  });
}

onMounted(() => {
  drawChart();
});
</script>

<template>
  <div class="h-screen">
    <h1 class="text-2xl mb-4">Dashboard</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mb-6">
      <div class="bg-white p-4 rounded-2xl shadow-md">
        <h2 class="text-xl font-semibold mb-3">Total Earnings</h2>
        <p class="text-gray-600 text-xl">
          {{
            formatAmount(parseFloat(dashboardData?.totalAmount?._sum?.amount))
          }}
        </p>
      </div>

      <div class="bg-white p-4 rounded-2xl shadow-md">
        <h2 class="text-xl font-semibold mb-3">Total Payments</h2>
        <p class="text-gray-600 text-xl">{{ dashboardData?.totalPayment }}</p>
      </div>
    </div>

    <div class="bg-white p-6 rounded-2xl shadow-md">
      <!-- chart here  -->
      <canvas ref="chartRef" height="120"></canvas>
    </div>
  </div>
</template>
