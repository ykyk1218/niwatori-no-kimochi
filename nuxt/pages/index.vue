<script setup lang="ts">
  import { ref } from "vue";

  const message: string = 'Hello world!'
  const dialog: boolean = ref(false)
  const photosForSlider: string[] = [
    {
      imageUrl: '/images/photos/DSC09546.jpg',
      alt: 'firework1',
    },
    {
      imageUrl: '/images/photos/DSC09546.jpg',
      alt: 'firework1',
    },
    {
      imageUrl: '/images/photos/DSC09546.jpg',
      alt: 'firework1',
    },
    {
      imageUrl: '/images/photos/DSC09546.jpg',
      alt: 'firework1',
    },
  ]
  onMounted(() => {
    console.log("mounted")
  })

  useHead({
    title: 'にわとりの気持ち | Top'
  })

  function openModal() {
    console.log("open modal")
  }
</script>

<template>
  <div>
    <v-parallax src="/images/photos/DSC08226.jpg">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="text-h4 font-weight-thin mb-4">にわとりの気持ち</h1>
        <h4 class="subheading">My portfolio
        </h4>
      </div>
    </v-parallax>
    <v-parallax class="second" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <h2>My Photos</h2>
      <v-sheet class="mx-auto slide-parent" elevation="3" >
        <v-slide-group class="pa-4" show-arrows>
          <v-slide-group-item v-for="photo in photosForSlider" :key="photo" v-slot="{ isSelected, toggle, selectedClass }">
            <v-card class="ma-5">
              <p>{{ photo['alt'] }}</p>
              <v-img
                :width="300"
                aspect-ratio="16/9"
                cover
                :src="photo['imageUrl']"
                @click="dialog = true"
                class="slide-images"
              ></v-img> 
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
      <v-container>
        <v-row>
          <v-col>
            <v-sheet min-width="400">
              <h3>Work</h3>
              <v-list>
                <v-list-item>プログラマー</v-list-item>
                <v-list-item>
                  <v-list>
                    <v-list-item>Ruby</v-list-item>
                  </v-list>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet min-width="400">
              <h3>Photo</h3>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
      <v-dialog
        v-model="dialog"
        max-width="1200px"
      >
        <v-carousel>
          <v-carousel-item
            v-for="(photo, i) in photosForSlider"
            :key="i"
            :src="photo['imageUrl']"
          ></v-carousel-item>
        </v-carousel>
      </v-dialog>
    </v-parallax>
  </div>
</template>

<style lang="scss" scoped>
section {
  position: relative;
  min-height: 100vh;
}

.second {
  margin: auto;
  padding: 5px;
}

.slide-parent {
  max-width: 1000px;
}

.slide-images {
  cursor: pointer;
}
</style>
