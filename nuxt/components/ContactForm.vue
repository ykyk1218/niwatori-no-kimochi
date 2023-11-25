<script setup lang="ts">
  import { useDisplay } from 'vuetify'

  const name = ref<string>('')
  const message = ref<string>('')
  const loading = ref<boolean>(false)
  const thxDialog: Ref<boolean> = ref(false)

  const nameRules = [
    (v: string) => !!v || 'Name is required',
  ]
  const messgageRules = [
    (v: string) => !!v || 'Message is required',
  ]
  const { mobile } = useDisplay()

  const handleSubmit = async(event: Event) => {
    event.preventDefault();

    const myForm = event.target as HTMLFormElement;
    const formData:any = new FormData(myForm);
    const { data, pending, error, refresh } = await useFetch('/', {
      method: 'POST',
      body: new URLSearchParams(formData).toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      onRequestError: ({ request, options, error }) => {
        console.log(error)
      },
      onResponse({ request, response, options }) {
        thxDialog.value = true
        name.value = ''
        message.value = ''
      },
      onResponseError({ request, response, options }) {
        alert("エラーが発生しました。お手数ですが再度投稿をお願いいたします。")
      }
    })
  }

  onMounted(() => {
    document.querySelector("form")?.addEventListener("submit", handleSubmit);
  })

</script>

<template>
  <v-sheet class="mx-auto mt-8">
    <h2 class="text-center text-h4 text-lg-h2">Contact</h2>
    <v-form name="contact" class="mt-4" validate-on="submit lazy" @submit.prevent netlify>
      <input type="hidden" name="form-name" value="contact" />
      <v-text-field
        v-model="name"
        name="name"
        :rules="nameRules"
        label="名前"
        :class="mobile ? 'w-100' : 'w-50'"
        class="js-name-text-field"
      ></v-text-field>

      <v-textarea
        v-model="message"
        name="message"
        :rules="messgageRules"
        label="伝えたいこと"
        placeholder="なんでもお気軽にどうぞ！"
      ></v-textarea>
     
      <v-container class="ma-0 pa-0">
        <v-row align="center" justify="center">
          <v-col class="ma-0 pa-0" cols="auto">
            <v-btn
              :loading="loading"
              type="submit"
              size="x-large"
              class="mt-2"
              text="Submit"
            ></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <v-dialog v-model="thxDialog" width="350">
      <v-card title="Success">
        <v-card-text>
          <p>お問い合わせありがとうございます!</p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="閉じる"
            @click="thxDialog = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>
