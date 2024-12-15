<script setup lang="ts">
const isActive = ref(true);
const hasError = ref(false);
const classObject = reactive({
  active: true,
  "text-danger": false,
});
</script>

<template>
  <div
    class="static"
    :class="{ active: isActive, 'text-danger': hasError }"
  >Footer</div>
  <div :class="classObject"></div>
</template>
