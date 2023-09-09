<script setup lang="ts">
  const message = 'Hello world!'
  const list: string[] = ['list1', 'list2', 'list3']
  onMounted(() => {
    console.log("mounted")
  })

  useHead({
    title: 'にわとりの気持ち | Top'
  })
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <v-icon>mdi-twitter</v-icon>
    <v-parallax src="/images/photos/DSC08226.jpg">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="text-h4 font-weight-thin mb-4">
          Vuetify
        </h1>
        <h4 class="subheading">
          Build your application today!
        </h4>
      </div>
    </v-parallax>
    <v-parallax src="/images/photos/DSC08226.jpg">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <v-sheet class="mx-auto" elevation="3" max-width="1200">
          <v-slide-group class="pa-4" show-arrows>
            <v-slide-group-item v-for="n in list" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
              <v-card class="ma-5">
                <p>{{ n }}</p>
                <v-img
                  :width="300"
                  aspect-ratio="16/9"
                  cover
                  src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                ></v-img> 
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </v-parallax>
  </div>
</template>

<style lang="scss" scoped>
section {
  position: relative;
  min-height: 100vh;
}

.parallax {
  position: absolute;
  top: 0;
  display: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}

.first {
  background-image: url("/images/photos/DSC08226.jpg")
}

.second {
  background-image: url("/images/photos/DSC08226.jpg")
}

.parallax-text {
  position: absolute;
  font-size: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}

.active {
  position: fixed;
  top: 0;
}

.block {
  display: block;
}

</style>
