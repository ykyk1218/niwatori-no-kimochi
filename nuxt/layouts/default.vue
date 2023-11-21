<template>
  <v-layout class="flex-column">
    <Header />
    <v-main>
      <div id="app">
        <slot />
      </div>
    </v-main>
    <Footer />
  </v-layout>
</template>
