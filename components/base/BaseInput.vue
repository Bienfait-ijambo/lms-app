<script setup>
const props = defineProps(["modelValue", "type", "placeholder"]);
const emit = defineEmits(["update:modelValue"]);

function updateInput(event) {
  const val = event.target.value;
  emit("update:modelValue", val);
}
</script>
<template>
  <input
    @input="updateInput"
    :value="modelValue"
    :type="typeof type !== 'undefined' ? type : 'text'"
    :placeholder="placeholder"
    class="peer w-full pl-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-200 transition-all"
  />
</template>
