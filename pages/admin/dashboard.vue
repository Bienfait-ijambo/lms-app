

<script setup>

definePageMeta({
    layout:"admin"
})

 
 const { isSignedIn, user, isLoaded } = useUser();


</script>
<template>
    <div >
   {{ user?.firstName }}
   {{ user?.id }}
   {{ user?.publicMetadata }}
    <h1>Dashboard</h1>
     <UserButton />
    </div>
  </template>