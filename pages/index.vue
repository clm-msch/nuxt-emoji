<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-4xl text-white text-center">Emoji Picker</h1>
    <CurrentEmoji icon="😂" />
    <SearchInput @update="(value) => (query = value)"  />
    <EmojiGrid :query="query" @select="(emoji) => (currentEmoji = emoji)" />
  </div>
</template>

<script lang="ts" setup>
const query = ref("");
</script>