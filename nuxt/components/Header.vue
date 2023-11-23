<script setup lang="ts">
  import { ref } from "vue";

  const drawer = ref(false)
  const items = [
    {
      title: 'Foo',
      value: 'foo'
    },
    {
      title: 'Bar',
      value: 'bar'
    }
  ]
</script>

<template>
  <div>
    <header class="text-red-lighten-4">
      <img src="/images/logo.png" alt="logo" class="logo" width=50 />
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" class="vertical-align-text-bottom"></v-app-bar-nav-icon>
    </header>
    <v-navigation-drawer
      v-model="drawer"
      location="left"
      temporary
    >
      <v-list :items="items">
      </v-list>
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
