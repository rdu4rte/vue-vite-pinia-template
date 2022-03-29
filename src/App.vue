<template>
  <v-app>
    <v-main>
      <Navbar />
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/layout/Navbar.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({})
})
</script>

