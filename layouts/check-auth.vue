<script setup>

 
 const { isSignedIn, user, isLoaded } = useUser();


 function checkUserRole(){
    const 
 }
 async function updateRole(){
    const userId=user.value?.id
       const { data } = await useFetch("/api/auth/update-role", {
            query: {
                userId: userId,
            }
        });
        console.log(data)
 }
</script>
<template>
    <div class="bg-slate-200 h-screen">

        <!-- slot -->
        <NuxtPage />
    </div>
  </template>