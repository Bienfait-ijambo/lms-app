

<script setup lang="ts">

import { USER_ROLE } from "~/utils/types/user-role";

 const { isSignedIn, user, isLoaded } = useUser();

 async function updateRole(){
    const userId=user.value?.id as any
       const { data } = await useFetch("/api/auth/update-role", {
            query: {
                userId: userId,
            } 
        } as any);
        console.log(data)
 }


async function checkRole(role:string){


    if(typeof role==='undefined'){
        await updateRole()
        window.location.href="/learner/home"
    }else if(role===USER_ROLE.LEANER){
        window.location.href="/learner/home"
    }else if(role===USER_ROLE.ADMIN){
        window.location.href="/admin/dashboard"
    }
}

watchEffect(async ()=>{
    if(isLoaded.value){
         const role=user.value?.publicMetadata?.role
   await checkRole(role)
    }
})



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
