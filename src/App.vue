<template>
  <v-app>
    <Navbar />
    <v-main>
      <SideMenu />
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/layout/Navbar.vue'
import SideMenu from '@/components/layout/SideMenu.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    SideMenu
  },
  data: () => ({})
})
</script>

