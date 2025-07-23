<script setup>
import { VueWriter } from 'vue-writer'
const props = defineProps(["show"]);


</script>

<template>
  <div
    v-show="true"
    className="fixed inset-0 z-[10000] ml-[20%] mr-[20%] shadow-md bg-gray-20 bg-opacity-75 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ease-out"
  >
    <div
      className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-4xl  md:w-3/3 transform transition-transform duration-300 ease-out scale-95 opacity-0 animate-modalFadeIn"
    >
      <div className="flex justify-between items-center">
        <div class="flex">
          <StarIcon></StarIcon>
          <h1 class="text-2xl mb-4 font-bold">Alex</h1>
        </div>

        <button
          class="flex gap-1 border border-blue-500 rounded-full p-1.5 bg-blue-50 text-blue-500 text-sm font-bold hover:text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4 text-blue-600 font-bold"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
          Share
        </button>
      </div>

      <!-- modal body -->
      <div class="py-4">
        <div class="_chatContainer_1gwyv_39">
          <div class="scroll-area" style="overflow: auto; max-height: 50vh">
            <div class="w-full">
              <div
                class="flex"
                style="background-color: rgba(238, 238, 238, 0.4)"
              >
                <div class="flex p-2">
                  <div class="mt-1 mr-2 ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M17 11.6667C17 12.1382 16.8127 12.5903 16.4793 12.9237C16.1459 13.2571 15.6937 13.4444 15.2222 13.4444H4.55556L1 17V2.77778C1 2.30628 1.1873 1.8541 1.5207 1.5207C1.8541 1.1873 2.30628 1 2.77778 1H15.2222C15.6937 1 16.1459 1.1873 16.4793 1.5207C16.8127 1.8541 17 2.30628 17 2.77778V11.6667Z"
                        stroke="#999"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        class="_noFill_1dwf8_9"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p
                      class="font-bold"
                      style="color: black; font-weight: bold"
                    >
                      You
                    </p>
                  </div>
                </div>
                <div class="flex py-8" style="color: rgb(34, 34, 34)">
                  what is rag
                </div>
              </div>
            </div>



            <div class="w-full">
              <div class="flex">
                <div class="flex p-2">
                  <div class="mt-1 mr-2 ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M17 11.6667C17 12.1382 16.8127 12.5903 16.4793 12.9237C16.1459 13.2571 15.6937 13.4444 15.2222 13.4444H4.55556L1 17V2.77778C1 2.30628 1.1873 1.8541 1.5207 1.5207C1.8541 1.1873 2.30628 1 2.77778 1H15.2222C15.6937 1 16.1459 1.1873 16.4793 1.5207C16.8127 1.8541 17 2.30628 17 2.77778V11.6667Z"
                        stroke="#155dfc"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        class="text-blue-600"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-bold" style="color: black;font-weight: bold;">Alex</p>
                  </div>
                </div>
                <div
                  class="flex py-8"
                  
                  style="
                    color: rgb(34, 34, 34);
                    display: block;
                    margin-block-start: 1em;
                    margin-block-end: 1em;
                    margin-inline-start: 0px;
                    margin-inline-end: 0px;
                    unicode-bidi: isolate;
                  "
                >
                
           <ClientOnly>
            <VueWriter  :iterations="1" :array="[`RAG (Retrieval-Augmented Generation) is a technique that
                  enables Large Language Models (LLMs) to answer questions using
                  external or private data by retrieving relevant information at
                  query time, rather than relying solely on the model's training
                  data. RAG works by indexing your data, retrieving only the
                  most relevant parts for a given query, and providing this
                  context to the LLM to generate accurate, grounded responses.
                  This approach improves factuality, reduces hallucinations, and
                  allows for up-to-date or domain-specific knowledge without
                  retraining the LLM. According to LlamaIndex documentation, RAG
                  is a core method for building data-backed LLM applications.
                 https://js.langchain.com/docs/integrations/tools/tavily_search/'  LangChain Tavily Search Docs

                  Would you like more detail or examples of how RAG is
                  implemented in LlamaIndex?`]"   :typeSpeed="5"/>
           </ClientOnly>

                  <div
                  class="pt-2"
                  style="display: flex; flex-direction: row; gap: 8px"
                >
                  <div class="border border-gray-300 rounded-full p-2 shadow-md">
                    <div class="_feedback-logo_zywyk_154" style="color: black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="20"
                        viewBox="0 0 19 20"
                        fill="none"
                      >
                        <path
                          d="M5.83366 18.3333H3.33366C2.89163 18.3333 2.46771 18.1577 2.15515 17.8451C1.84259 17.5326 1.66699 17.1087 1.66699 16.6666V10.8333C1.66699 10.3913 1.84259 9.96734 2.15515 9.65478C2.46771 9.34222 2.89163 9.16663 3.33366 9.16663H5.83366M11.667 7.49996V4.16663C11.667 3.50358 11.4036 2.8677 10.9348 2.39886C10.4659 1.93002 9.83003 1.66663 9.16699 1.66663L5.83366 9.16663V18.3333H15.2337C15.6356 18.3378 16.0256 18.197 16.3319 17.9366C16.6382 17.6763 16.8401 17.314 16.9003 16.9166L18.0503 9.41663C18.0866 9.17776 18.0705 8.93386 18.0031 8.70184C17.9357 8.46981 17.8187 8.2552 17.6602 8.07289C17.5017 7.89057 17.3054 7.7449 17.085 7.64597C16.8645 7.54705 16.6252 7.49722 16.3837 7.49996H11.667Z"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke="#999"
                          class="_feedback-logo-color_1dwf8_13"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div  class="border border-gray-300 rounded-full p-2 shadow-md">
                    <div class="_feedback-logo_zywyk_154" style="color: black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M14.1672 1.66668H16.3922C16.8638 1.65834 17.3221 1.82346 17.68 2.1307C18.038 2.43793 18.2706 2.8659 18.3338 3.33335V9.16668C18.2706 9.63413 18.038 10.0621 17.68 10.3693C17.3221 10.6766 16.8638 10.8417 16.3922 10.8333H14.1672M8.33385 12.5V15.8333C8.33385 16.4964 8.59724 17.1323 9.06608 17.6011C9.53492 18.07 10.1708 18.3333 10.8338 18.3333L14.1672 10.8333V1.66668H4.76718C4.36524 1.66214 3.9752 1.80301 3.66893 2.06334C3.36265 2.32368 3.16078 2.68593 3.10051 3.08335L1.95051 10.5833C1.91426 10.8222 1.93037 11.0661 1.99773 11.2981C2.06509 11.5302 2.1821 11.7448 2.34063 11.9271C2.49917 12.1094 2.69545 12.2551 2.91587 12.354C3.13629 12.4529 3.37559 12.5028 3.61718 12.5H8.33385Z"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke="#999"
                          class="_feedback-logo-color_1dwf8_13"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex items-center border border-blue-600 rounded-md px-3 py-2 w-full"
        >
          <!-- Attachment Icon -->
          <button class="text-blue-500 hover:text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
              />
            </svg>
          </button>

          <!-- Input Field -->
          <input
            type="text"
            placeholder="Ask a follow-up question..."
            class="flex-1 px-4 h-8 focus:outline-none text-sm text-gray-700 placeholder-gray-400"
          />

          <!-- Send Icon -->
          <button class="text-blue-500 hover:text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
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
