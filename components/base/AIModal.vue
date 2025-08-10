<script setup >
import { VueWriter } from 'vue-writer'
const props = defineProps(["show"]);



const aiStore = useAIAssistantStore()
const { messages, query, loading } = storeToRefs(aiStore)


function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
const menuOpen = ref(false)

const selectedFiles = ref([])
const fileInput = ref(null)

function triggerFilePicker() {
  fileInput.value?.click()
}
const loadingPdf=ref(false)

function handleFileSelect(event) {
  const target = event.target
  loadingPdf.value=true
  if (target.files && target.files.length > 0) {
    for (const file of Array.from(target.files)) {
      selectedFiles.value.push(file.name)
    }
  }

  setTimeout(()=>loadingPdf.value=false,3000)
}

</script>

<template>
  <div v-show="false"
    className="fixed inset-0 z-[10000] ml-[20%] mr-[20%] shadow-md bg-gray-20 bg-opacity-75 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ease-out">
    <div
      className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-4xl  md:w-3/3 transform transition-transform duration-300 ease-out scale-95 opacity-0 animate-modalFadeIn">
      <div className="flex justify-between items-center">
        <div class="flex">
          <StarIcon></StarIcon>
          <h1 class="text-2xl mb-4 font-bold">Alex</h1>
        </div>

        <button
          class="flex gap-1 border border-blue-500 rounded-full p-1.5 bg-blue-50 text-blue-500 text-sm font-bold hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-4 text-blue-600 font-bold">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
          </svg>
          Share
        </button>

      </div>

      <!-- modal body -->
      <div class="py-4">
        <div class="_chatContainer_1gwyv_39">
          <div class="scroll-area" style="overflow: auto; max-height: 50vh">

            <div class="w-full" v-for="message in messages" :key="message.id">
              <div class="flex"
                :style="{ backgroundColor: message.type === 'human' ? 'rgba(238, 238, 238, 0.4)' : '' }">
                <div class="flex p-2">
                  <div class="mt-1 mr-2 ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M17 11.6667C17 12.1382 16.8127 12.5903 16.4793 12.9237C16.1459 13.2571 15.6937 13.4444 15.2222 13.4444H4.55556L1 17V2.77778C1 2.30628 1.1873 1.8541 1.5207 1.5207C1.8541 1.1873 2.30628 1 2.77778 1H15.2222C15.6937 1 16.1459 1.1873 16.4793 1.5207C16.8127 1.8541 17 2.30628 17 2.77778V11.6667Z"
                        :stroke="message.type === 'ai' ? '#155dfc' : '#999'" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" fill="none" class="text-blue-600"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-bold" style="color: black; font-weight: bold">
                      {{ message.type === 'ai' ? 'Alex' : 'You' }}
                    </p>
                  </div>
                </div>
                <div class="flex py-8">



                  <ClientOnly>
                    <VueWriter v-if="message.type === 'ai'" :iterations="1" :array="[`${message?.message}`]"
                      :typeSpeed="5" />
                    <div v-else>
                      <p style="font-weight: bold;">
                        {{ message?.message }}
                      </p>
                    </div>
                  </ClientOnly>


                </div>
              </div>
            </div>



          </div>
        </div>


        <div v-if="loading" class="flex font-bold mb-2  text-gray-800">
          <LoadingIcon />
          <p style="font-weight: bold;">Processing your request...</p>
        </div>

      

    <div v-if="selectedFiles.length" class="mt-2 mb-2 text-sm text-gray-700">
  <p>Selected Files:</p>
  <ul class="list-inside list-none">
    <li v-for="file in selectedFiles" :key="file">
      <div class="flex items-center gap-2">
        <!-- Container for image + loading overlay -->
        <div class="relative w-10 h-10">
          <!-- PDF Icon -->
          <img src="/public/pdf.png" alt="File preview" class="w-full h-full object-cover rounded" />

          <!-- Loading overlay -->
          <div
          v-if="loadingPdf" 
            class="absolute inset-0 flex items-center justify-center bg-white/50 z-10 rounded"
          >
            <LoadingIcon />
          </div>
        </div>

        <!-- File name -->
        <span>{{ file }}</span>
      </div>
    </li>
  </ul>
</div>


<!-- 
        <div class="flex items-center border border-blue-600 rounded-md px-3 py-2 w-full">
       
          <button @click="triggerFilePicker" class="text-blue-500 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
            </svg>
          </button>


    <input
      ref="fileInput"
      type="file"
      class="hidden"
      @change="handleFileSelect"
    />

          <input type="text" v-model="query" placeholder="Ask a follow-up question..."
            class="flex-1 px-4 h-8 focus:outline-none text-sm text-gray-700 placeholder-gray-400" />

          <button @click="aiStore.sendMessage" class="text-blue-500 cursor-pointer hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
 -->

















        <div class="relative">
  <div class="flex items-center border border-blue-600 rounded-md px-3 py-2 w-full">
    <!-- Attachment Icon (Dropdown Trigger) -->
    <button @click="toggleMenu" class="text-blue-500 hover:text-blue-600 relative">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
        <path
          d="M7.25 13.25V7.5h1.5v5.75a.75.75 0 0 1-1.5 0ZM8.75 2.75V5h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75V2.75a.75.75 0 0 1 1.5 0ZM2.25 9.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H4.5V2.75a.75.75 0 0 0-1.5 0V9.5h-.75ZM10 10.25a.75.75 0 0 1 .75-.75h.75V2.75a.75.75 0 0 1 1.5 0V9.5h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM3 12v1.25a.75.75 0 0 0 1.5 0V12H3ZM11.5 13.25V12H13v1.25a.75.75 0 0 1-1.5 0Z" />
      </svg>
    </button>

    <!-- Hidden File Input -->
    <input ref="fileInput" type="file" class="hidden" @change="handleFileSelect" />

    <!-- Input Field -->
    <input type="text" v-model="query" placeholder="Ask a follow-up question..."
      class="flex-1 px-4 h-8 focus:outline-none text-sm text-gray-700 placeholder-gray-400" />

    <!-- Send Icon -->
    <button @click="aiStore.sendMessage" class="text-blue-500 cursor-pointer hover:text-blue-600">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
      </svg>
    </button>
  </div>

  <!-- Dropdown Menu -->
  <div v-if="menuOpen"
       class="absolute left-2 top-12 w-48 bg-white border border-gray-200 rounded shadow z-50">
    <ul class="text-sm text-gray-700 divide-y divide-gray-100">
      <li>
        <button @click="triggerFilePicker" class="w-full px-4 py-2 text-left hover:bg-gray-100">
          📎 Attachment
        </button>
      </li>
      <li>
        <button @click="addOtherLink" class="w-full px-4 py-2 text-left hover:bg-gray-100">
          🔗 Other link
        </button>
      </li>
    </ul>
  </div>
</div>


      </div>

      <div className="flex gap-2 justify-end mt-4">
        <BaseBtn :class="'secondary'" label="Close" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-modalFadeIn {
  animation: modalFadeIn 0.3s ease-out forwards;
}

._exchange-input-container_zywyk_21 {
  width: 100%;
  padding: 16px 24px;
  height: auto;
}

p {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  font-size: 16;
  color-scheme: light dark;
  color: var(--mantine-color-text);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  display: flex;
  place-items: center;
}


.is-typed {
  font-family: 'Monaco';
}

.is-typed span.typed {
  color: black;
}

.is-typed span.cursor {
  display: inline-block;
  width: 3px;
  background-color: black;
  animation: blink 1s infinite;
}

.is-typed span.underscore {
  display: inline-flex;
  width: 10px;
  height: 1px;
  align-items: flex-end;
  background-color: black;
  animation: blink 1s infinite;
}

.is-typed span.cursor.typing {
  animation: none;
}

@keyframes blink {
  49% {
    background-color: black;
  }

  50% {
    background-color: transparent;
  }

  99% {
    background-color: transparent;
  }
}
</style>
