<template>
  <ckeditor :editor="editor" :modelValue="value" @update:modelValue="emitInput" />

</template>

<script setup>
defineProps(['value'])
const emit = defineEmits(['input'])

const emitInput = (event) => {
  emit("input", event)
}
const { $ckeditor } = useNuxtApp()
const editor = $ckeditor.classicEditor;

</script>