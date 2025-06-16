
<script setup>

const props=defineProps(["errors"])

</script>
<template>
 
<div :class="{ error: errors.length }">
  <slot/>
  <div class="input-errors" v-for="error of errors" :key="error.$uid">
    <div class="text-red-900 font-semibold">{{ error.$message }}</div>
  </div>
</div>
</template>

