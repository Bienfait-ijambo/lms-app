

<script setup lang="ts">



</script>
<template>
  <Protect>
    <template #fallback>
      <RedirectToLogin />
    </template>
    <div class="bg-slate-200 h-screen">
      <slot />
    </div>
  </Protect>
</template>
