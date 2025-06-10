

<script setup>

definePageMeta({
    layout:"learner"
})

 
 const { isSignedIn, user, isLoaded } = useUser();
 

</script>
<template>
    <div >
    <h1 >Home page of leaner</h1>
     <UserButton />
    </div>
  </template>