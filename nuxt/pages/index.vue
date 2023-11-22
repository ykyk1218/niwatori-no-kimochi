<script setup lang="ts">
  import { useDisplay } from 'vuetify'
  import { ref } from "vue"
  import SlideImages from '~/components/SlideImages.vue'

  const { mobile } = useDisplay()

  onMounted(() => {
    // Note: https://developer.hatenastaff.com/entry/2020/12/12/121212
    const section = document.querySelector<HTMLElement>('#first-section')

    // 判定処理をtemplate側に書くとモバイル判定がうまくいかないのか、変になる
    if(section) {
      section.style.height = `${mobile.value ? '25vh' : '100vh'}`
    }
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
    <section id="first-section">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="z-index-10 text-h5 text-lg-h4 font-weight-thin mb-4">にわとりの気持ち</h1>
        <h4 class="z-index-10 subheading">Yoshiki Kobayashi
        </h4>
      </div>
      <v-sheet :min-height="mobile ? 'auto' : '100%'">
        <video playsinline autoplay muted loop class="top-movie">
          <source src="/movies/top.mp4" type="video/mp4">
          お使いのブラウザはビデオタグをサポートしていません。
        </video>
      </v-sheet>
    </section>
    <div>
      <v-parallax src="/images/photos/DSC09546.jpg">
        <SlideImages title="flowers" dir="photos/flowers" />
        <SlideImages title="fireflowers" dir="photos/fireflowers" />
        <SlideImages title="portrait" dir="photos/portrait" />
      </v-parallax>
    </div>
    <div>
      <div>
        <v-container class="mx-auto" :class="mobile ? 'w-100' : 'w-75'">
          <v-row>
            <v-col>
              <h2 class="pb-4">About me</h2>
              <v-card
                prepend-avatar="/images/profile/my-profile.jpg"
                title="Yoshiki.Kobayashi"
              >
                <v-card-text>
                  写真を撮るようになって、夕日の綺麗さと影の面白さに気付くようになりました。
                  近場で自分しか知らないスポットを探すのも好きですが、いわゆるSNS映えの絶景スポットも好きです。<br><br>
                  あんまりジャンルが決まっていないので、「なに撮っているんですか」と聞かれるたびに困っていましたが、季節物を撮っていることが多いですと答えます。<br>
                  四季っていいですよね。
                  <br>

                </v-card-text>
              </v-card>
              <v-card
                prepend-icon="mdi-camera"
                title="Camera"
                class="mt-8"
                >
                <v-card-text>
                  <p class="py-0">Sony α7III</p>
                  <p class="py-0">Sony FX3</p>
                  <div class="mt-4">
                    <p class="font-weight-bold">lens</p>
                    <p>Sonnar T* FE 55mm F1.8 ZA</p>
                    <p>FE 35mm F1.8</p>
                    <p>FE 90mm F2.8 Macro G OSS</p>
                    <p>FE 70-300mm F4.5-5.6 G OSS</p>
                    <p>TAMRON 17-28mm F/2.8 Di III RXD</p>
                    <p>TAMRON 28-200mm F/2.8-5.6 Di III RXD</p>
                    <p>Voigtlander NOKTON classic 35mm F1.4</p>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col>
              <v-sheet>
                <h2 class="pb-4">Camera History</h2>
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
                        <v-card-title>2018.04</v-card-title>
                        <v-card-text>
                          ちゃんと写真を撮り始める
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
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

section {
  position: relative;
}

.top-movie {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  object-fit: cover;
  width: 100%;
}

.z-index-10 {
  z-index: 10;
}

</style>
