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
  <v-app>
    <v-app-bar color="primary" :elevation="14">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>My files</v-toolbar-title>
      <v-app-bar-title>
        <h1>にわとりの気持ち</h1>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-heart"></v-btn>
      <v-btn icon="mdi-magnify"></v-btn>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      location="left"
      temporary
    >
      <v-list :items="items">
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>
