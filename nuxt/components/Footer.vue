<script setup lang="ts">
  import { ref } from "vue";

  const icons: [string[], string[]]= [
    ['mdi-twitter', 'https://twitter.com/ykyk1218_camera'],
    ['mdi-instagram', 'https://www.instagram.com/photo_yoshiki']
  ]

  function openSns(url: string) {
    window.open(url, '_blank')
  }
</script>

<template>
  <v-footer
    class="bg-indigo-lighten-1 text-center d-flex flex-column"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon[0]"
        class="mx-4"
        :icon="icon[0]"
        variant="text"
        @click="openSns(icon[1])"
      ></v-btn>
    </div>

    <v-divider></v-divider>
  </v-footer>
</template>
