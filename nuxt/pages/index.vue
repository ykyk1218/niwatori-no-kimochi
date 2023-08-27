<template>
  <div>
    <v-container>
      <v-btn
        depressed
        color="primary"
      >
        Primary
      </v-btn>
      <v-btn
        depressed
        color="error"
      >
        Error
      </v-btn>
    </v-container>
    <h1>{{ message }}</h1>
  </div>
</template>

<script setup lang="ts">
  const message = 'Hello world!'
</script>
