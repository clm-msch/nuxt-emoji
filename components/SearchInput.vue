<template>
  <div class="flex justify-center">
    <input class="bg-slate-800 w-96 focus:bg-slate-700 hover:bg-slate-700 p-4 rounded-full"     v-model="value"
    type="text"
    placeholder="Chercher..."
    @keyup="() => emit('update', value)" />
  </div>
</template>

<script setup lang="ts">
    const emit = defineEmits(["update"]);

    const value = ref();
</script>
