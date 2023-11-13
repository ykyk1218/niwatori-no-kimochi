<script setup lang="ts">
  import { ref } from "vue";
  import snapPhotosForSlider from '~/plugins/slide_images.ts'

  const message: string = 'Hello world!'
  const dialog: boolean = ref(false)
  const photos = snapPhotosForSlider()
   
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
    <v-parallax src="/movies/fireflower.mp4">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="text-h4 font-weight-thin mb-4">にわとりの気持ち</h1>
        <h4 class="subheading">Yoshiki Kobayashi
        </h4>
      </div>
    </v-parallax>
    <v-parallax class="second pa-5" src="hoge">
      <div>
        <h2 class="text-center text-h2">My Photos</h2>
        <div class="mx-auto slide-parent" elevation="3">
          <div>
            <v-slide-group show-arrows>
              <v-slide-group-item v-for="photo in photos" :key="photo" v-slot="{ isSelected, toggle, selectedClass }">
                <v-card class="pb-2 ma-5 elevation-0">
                  <v-img
                    :width="500"
                    aspect-ratio="16/9"
                    cover
                    :src="photo['imageUrl']"
                    @click="dialog = true"
                    class="slide-images"
                  ></v-img> 
                  <p class="text-center pt-2">{{ photo['alt'] }}</p>
                </v-card>
              </v-slide-group-item>
            </v-slide-group>
          </div>
        </div>
      </div>
      <div class="mt-8">
        <h2 class="pb-2">ポートレート</h2>
        <v-sheet class="mx-auto slide-parent" elevation="3" >
          <div>
            <v-slide-group class="pa-4" show-arrows>
              <v-slide-group-item v-for="photo in photos" :key="photo" v-slot="{ isSelected, toggle, selectedClass }">
                <v-card class="ma-5">
                  <p>{{ photo['alt'] }}</p>
                  <v-img
                    :width="500"
                    aspect-ratio="16/9"
                    cover
                    :src="photo['imageUrl']"
                    @click="dialog = true"
                    class="slide-images"
                  ></v-img> 
                </v-card>
              </v-slide-group-item>
            </v-slide-group>
          </div>
        </v-sheet>
      </div>
      <div>
        <h2>Tablephotos</h2>
        <v-sheet class="mx-auto slide-parent" elevation="3" >
          <v-slide-group class="pa-4" show-arrows>
            <v-slide-group-item v-for="photo in photos" :key="photo" v-slot="{ isSelected, toggle, selectedClass }">
              <v-card class="ma-5">
                <p>{{ photo['alt'] }}</p>
                <v-img
                  :width="500"
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
      </div>
      <div>
        <h2>Flowers</h2>
        <v-sheet class="mx-auto slide-parent" elevation="3" >
          <v-slide-group class="pa-4" show-arrows>
            <v-slide-group-item v-for="photo in photos" :key="photo" v-slot="{ isSelected, toggle, selectedClass }">
              <v-card class="ma-5">
                <p>{{ photo['alt'] }}</p>
                <v-img
                  :width="500"
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
      </div>





      <div class="w-75 mx-auto">
        <h2>About me</h2>

        <v-container>
          <v-row>
            <v-col>
              <v-sheet min-width="400">
                <h3>Camera</h3>
                <v-list lines="one">
                  <v-list-item>
                    <v-list>
                      <v-list-item>Sony α7III</v-list-item>
                      <v-list-item>Sony FX3</v-list-item>
                    </v-list>
                  </v-list-item>
                </v-list>
                <v-list>
                  <v-list-item>lens</v-list-item>
                  <v-list-item>
                    <v-list>
                      <v-list-item>Sonnar T* FE 55mm F1.8 ZA</v-list-item>
                      <v-list-item>FE 70-300mm F4.5-5.6 G OSS</v-list-item>
                    </v-list>
                  </v-list-item>
                </v-list>
              </v-sheet>
            </v-col>

            <v-col>
              <v-sheet min-width="400">
                <h3>Camera History</h3>
                <v-timeline align="start">
                  <v-timeline-item>
                    <template v-slot:opposite>
                      <v-card>
                        <v-card-title>2023.04</v-card-title>
                        <v-card-text>
                          GOOPASS HUB に参加
                        </v-card-text>
                      </v-card>
                    </template>
                  </v-timeline-item>
                  <v-timeline-item>
                    <template v-slot:opposite>
                      <v-card>
                        <v-card-title>2022.11</v-card-title>
                        <v-card-text>
                          Sony FX3 購入
                        </v-card-text>
                      </v-card>
                    </template>
                  </v-timeline-item>
                  <v-timeline-item>
                    <template v-slot:opposite>
                      <v-card>
                        <v-card-title>2020.08</v-card-title>
                        <v-card-text>
                          動画撮影に目覚め始める
                        </v-card-text>
                      </v-card>
                    </template>
                  </v-timeline-item>
                  <v-timeline-item>
                    <template v-slot:opposite>
                      <v-card>
                        <v-card-title>2019.01</v-card-title>
                        <v-card-text>
                          Sony α7III 購入
                        </v-card-text>
                      </v-card>
                    </template>
                  </v-timeline-item>
                  <v-timeline-item>
                    <template v-slot:opposite>
                      <v-card>
                        <v-card-title>2018.02</v-card-title>
                        <v-card-text>
                          写真教室に通う
                        </v-card-text>
                      </v-card>
                    </template>
                  </v-timeline-item>
                  <v-timeline-item>
                    <template v-slot:opposite>
                      <v-card>
                        <v-card-title>2017.06</v-card-title>
                        <v-card-text>
                          Nikon d5500 購入
                          写真を撮り始める
                        </v-card-text>
                      </v-card>
                    </template>
                  </v-timeline-item>
                </v-timeline>
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
              v-for="(photo, i) in $snapPhotosForSlider"
              :key="i"
              :src="photo['imageUrl']"
            ></v-carousel-item>
          </v-carousel>
        </v-dialog>
      </div>
    </v-parallax>
  </div>
</template>

<style lang="scss" scoped>
section {
  position: relative;
  min-height: 100vh;
}

.slide-images {
  cursor: pointer;
}
</style>
