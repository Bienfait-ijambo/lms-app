<script setup>
definePageMeta({
    layout:"check-auth",
    middleware:['check-role']
})


</script>
<template>
  <div>
    <h1>check role page</h1>
  </div>
</template>
