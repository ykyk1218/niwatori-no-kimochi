<script setup lang="ts">
  import { ref } from "vue";
  import { useDisplay } from 'vuetify'
  import { getStorage, ref as firebaseRef, listAll, getDownloadURL } from "firebase/storage";

  const { mobile } = useDisplay()

  interface Props {
    title: string,
    dir: string
  }
  const props = defineProps<Props>()
  const photos: Ref<{ imageUrl: string, name: string }[]> = ref([])
  const dialog: Ref<boolean> = ref(false)
  const selectedPhotoImageUrl: Ref<string> = ref("")

  onMounted(() => {
    setSlideImage()
  })

  function setSlideImage() {
    // get image url from firebase
    const { $storage } = useNuxtApp()
    const storage = $storage
    const listRef = firebaseRef(storage, props.dir);
    listAll(listRef).then((res) => {
      res.prefixes.forEach((folderRef) => {
        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
        console.log(folderRef);
      });
      res.items.forEach((itemRef) => {
        // All the items under listRef.
        const name: string = itemRef.name
        getDownloadURL(itemRef).then((url) => {
          photos.value.push( {imageUrl: url, name: name})
          photos.value.sort((a,b)=>{
            // firestorage api ではソートの指定ができないので、取得後ファイル名でソートしている
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
          })
        })
      });
    }).catch((error) => {
      // Uh-oh, an error occurred!
      console.log(error);
    });
  }


</script>

<template>
  <div class="mt-8">
    <h2 class="text-center text-h4 text-lg-h2">{{ title }}</h2>
    <div class="mx-auto slide-parent" elevation="3">
      <div>
        <v-slide-group show-arrows>
          <v-slide-group-item v-for="photo in photos" :key="photo['imageUrl']" v-slot="{ isSelected, toggle, selectedClass }">
            <v-card class="ma-5 elevation-0">
              <v-img
                :width="mobile ? '100vw' : 500"
                :height="mobile ? '200' : 300"
                aspect-ratio="16/9"
                cover
                :src="photo['imageUrl']"
                layzy-src="https://picsum.photos/10/6"
                @click="dialog = true; selectedPhotoImageUrl = photo['imageUrl']"
                class="slide-images"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey-darken-3"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img> 
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </div>
    </div>

    <v-theme-provider theme="dark">
      <v-dialog v-model="dialog" min-height=80vh max-width=1200>
        <v-img :src="selectedPhotoImageUrl"></v-img>
      </v-dialog>
    </v-theme-provider>
  </div>
</template>

<style lang="scss" scoped>
.slide-images {
  cursor: pointer;
}
</style>
