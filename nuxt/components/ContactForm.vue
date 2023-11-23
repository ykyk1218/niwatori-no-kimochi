<script setup lang="ts">
  import { useDisplay } from 'vuetify'

  const name = ref<string>('')
  const message = ref<string>('')
  const loading = ref<boolean>(false)

  const nameRules = [
    (v: string) => !!v || 'Name is required',
  ]
  const messgageRules = [
    (v: string) => !!v || 'Message is required',
  ]
  const { mobile } = useDisplay()

</script>

<template>
  <v-sheet class="mx-auto mt-8">
    <h2 class="text-center text-h4 text-lg-h2">Contact</h2>
    <v-form class="mt-4" validate-on="submit lazy" netlify>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="User name"
        :class="mobile ? 'w-100' : 'w-50'"
        class="js-name-text-field"
      ></v-text-field>

      <v-textarea
        v-model="message"
        :rules="messgageRules"
        label="Message"
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
  </v-sheet>
</template>
