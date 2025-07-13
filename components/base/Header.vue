
<script setup>
const {user}=useUser()
</script>
<template>
 
 <header class="flex justify-between items-center px-6 py-4 bg-white shadow">
      <NuxtLink to='/' class="text-xl font-bold text-blue-400">LMS Academy</NuxtLink>
      <div class="flex items-center space-x-4">
        <UserButton v-if="user"/>
         <NuxtLink v-else to='/auth/signin' class="text-sm font-bold text-blue-400 cursor-pointer">Sign in</NuxtLink>
      </div>
    </header>
</template>

