<script setup lang="ts">
const isCollapsed = ref(false);
const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};

const { isSignedIn, user, isLoaded } = useUser();
</script>
<template>
  <Protect>
    <template #fallback>
      <RedirectToLogin />
    </template>
     <NuxtLoadingIndicator />
    <div class="flex  h-screen bg-gray-100 ">
      <!-- Sidebar -->
      <aside
        :class="[
          'h-full bg-white shadow-md transition-all duration-300 ease-in-out',
          isCollapsed ? 'w-20' : 'w-64',
        ]"
      >
        <!-- Toggle Button -->
        <div class="flex justify-between p-4">logo</div>

        <!-- Menu Items -->
        <nav class="mt-4 space-y-2">
          <MenuItem
            icon="Categories"
            label="Categories"
            :collapsed="isCollapsed"
          />
          <MenuItem icon="Courses" label="Courses" :collapsed="isCollapsed" />

          <!-- <MenuItem icon="user" label="Profile" :collapsed="isCollapsed" />
        <MenuItem icon="logout" label="Logout" :collapsed="isCollapsed" /> -->
        </nav>
      </aside>

      <!-- Main content -->
      <div class="flex-1 flex flex-col">
        <header class="flex justify-between items-center p-2 bg-white shadow">
          <h1 class="text-xl font-semibold">
            <button @click="toggleSidebar" class="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>
          </h1>
          <!-- Avatar on top right outside sidebar -->
          <div class="flex items-center space-x-2 mr-6">
            <UserButton />
            <div class="flex">
              <p>{{ user?.firstName }}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="size-4 mt-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </header>
        <main class="flex-1 overflow-y-auto p-6">
          <slot />
        </main>
      </div>
    </div>
  </Protect>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.router-link-exact-active:hover {
  color: white;
}
.router-link-exact-active {
  --tw-bg-opacity: 1;
  background-color: var(--color-gray-200);
  font-weight: 600;
  padding-top: 0.5rem /* 8px */;
  padding-bottom: 0.5rem /* 8px */;
  padding-left: 0.5rem /* 8px */;
  padding-right: 0.5rem /* 8px */;
  /* border-radius: 0.375rem  */
  margin-left: 1em;
  margin-right: 1em;
  border-radius: 5px;
  --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)),
    0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow),
    var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);

  color: white;
  cursor: pointer;
}
</style>
