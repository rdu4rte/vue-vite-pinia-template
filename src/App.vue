<template>
  <v-app>
    <Navbar v-if="!$route.meta.hideNavbar" />
    <v-main>
      <v-container fluid class="pa-4">
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

