<template>
    <div>
      <div v-for="emoji in emojis" :key="emoji.emoji" @click="selectEmoji(emoji)">
        {{ emoji.emoji }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        emojis: []
      }
    },
    mounted() {
      fetch('https://raw.githubusercontent.com/github/gemoji/master/db/emoji.json')
        .then(response => response.json())
        .then(data => {
          this.emojis = data.map(emoji => ({ emoji: emoji.emoji, description: emoji.description }))
        })
        .catch(error => console.error(error))
    },
    methods: {
      selectEmoji(emoji) {
        console.log(emoji)
      }
    }
  }
  </script>