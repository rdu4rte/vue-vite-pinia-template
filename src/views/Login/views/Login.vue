<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    email: '',
    password: ''
  })
})
</script>
<template>
  <v-layout class="align-center justify-center" style="margin-top: 260px; width: auto;" full-height>
    <v-card class="ma-4" width="600px" elevation="6">
      <v-card-text class="text-center">
        <v-card-title class="px-2">Login</v-card-title>
        <v-text-field v-model="email" outlined label="Email" />
        <v-text-field v-model="password" outlined label="Password" />
      </v-card-text>
      <v-btn class="mx-4 mb-4" color="primary" width="260" to="/">Log in</v-btn>
    </v-card>
  </v-layout>
</template>