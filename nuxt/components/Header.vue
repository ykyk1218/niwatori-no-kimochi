<script setup lang="ts">
  import { ref } from "vue";
  const drawer = ref(false)
</script>

<template>
  <div>
    <header class="text-red-lighten-4 w-100">
      <img src="/images/logo.png" alt="logo" class="logo" width=50 />
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" class="float-right vertical-align-text-bottom text-grey-darken-1"></v-app-bar-nav-icon>
    </header>
    <v-navigation-drawer
      v-model="drawer"
      location="right"
      temporary
    >
      <div class="d-flex justify-space-between">
        <v-list>
          <v-list-item>
            <a href="https://twitter.com/ykyk1218_camera" class="text-decoration-none" target="_blank">
              <v-icon class="text-grey-darken-1" icon="mdi-twitter"></v-icon>
            </a>
          </v-list-item>
          <v-list-item>
            <a href="https://www.instagram.com/photo_yoshiki" class="text-decoration-none" target="_blank">
              <v-icon class="text-grey-darken-1" icon="mdi-instagram"></v-icon>
            </a>
          </v-list-item>
          <v-list-item prepend-icon="mdi-email-outline">
            <a class="text-grey-darken-1 text-decoration-none" href="#contact-section">Contact</a>
          </v-list-item>
        </v-list>
        <v-icon class="text-grey-darken-1 pt-8 pr-4" icon="mdi-close" @click="drawer = false"></v-icon>
      </div>
      
    </v-navigation-drawer>
  </div>
</template>

<style language="scss" scoped>
header {
  position: fixed;
  z-index: 1000;
}

.vertical-align-text-bottom {
  vertical-align: text-bottom;
}
</style>
