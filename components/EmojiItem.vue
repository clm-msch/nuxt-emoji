<template>
    <div class="text-6xl">
        {{ icon }}
    </div>
</template>

<script lang="ts" setup>
    defineProps<{
        icon: string,
        tags: string[];
    }>();
</script>