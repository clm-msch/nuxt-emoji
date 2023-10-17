<template>
  <div class="flex justify-center">
      <p class="text-8xl">{{ icon }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  icon: string;
}>();
</script>
