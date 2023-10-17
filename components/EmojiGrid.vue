<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-4 gap-2 h-[50vh] overflow-y-scroll">
      <EmojiItem
        v-for="(emoji, index) in filteredEmojis"
        :key="index"
        :icon="emoji.emoji"
        :tags="emoji.tags"
        @click="$emit('select'"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  query: string;
}>();

const { data: emojis } = await useFetch("/api/emojis");

// const filteredEmojis = computed(() =>
//   emojis.value.filter((emoji) => emoji.tags.includes(props.query))
// );

const filteredEmojis = computed(() =>
  emojis.value.filter((emoji) =>
    emoji.tags.some((tag) => tag.includes(props.query))
  )
);
</script>

