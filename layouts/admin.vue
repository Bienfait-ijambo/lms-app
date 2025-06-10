<script setup lang="ts">
// import { USER_ROLE } from "~/utils/types/user-role";

// const { isSignedIn, user, isLoaded } = useUser();

// async function checkRole(role: string) {
//   if (role !== USER_ROLE.ADMIN) {
//     window.location.href = "/auth/signin";
//   }
// }

// watchEffect(async () => {
//   if (isLoaded.value) {
//     const role = user.value?.publicMetadata?.role;
//     await checkRole(role);
//   }
// });


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
