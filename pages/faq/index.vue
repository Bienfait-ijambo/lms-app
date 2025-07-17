<script setup>
definePageMeta({
  layout: "learner",
});



</script>
<template>
  <div>
     <Header />
    

    <div
        class="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
        <div class="mx-auto px-5">
            <div class="flex flex-col items-center">
                <h2 class="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
                    FAQ
                </h2>
                <p class="mt-3 text-lg text-neutral-500 md:text-xl">
                    Frequently asked questions
                </p>
            </div>

            <div class="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
                <!-- FAQ Item -->
                <div class="py-5" v-for=" faq in faqs" :key="faq">
                    <details class="group">
                        <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                            <span>{{faq.question}}</span>
                            <span class="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                           {{faq.answer}}
                        </p>
                    </details>
                </div>

                <!-- Repeat this block for more FAQ items -->
                <!-- You already included 5 more blocks in your input; no need to repeat unless needed -->
            </div>
        </div>
    </div>
    </div>


</template>
