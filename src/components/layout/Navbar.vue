<script lang="ts">
import { defineComponent } from 'vue'
import SideMenu from '@/components/layout/SideMenu.vue'

export default defineComponent({
  components: { SideMenu },
  methods: {
    redirectLogin() {
      this.$router.push('/login')
    }
  }
})
</script>
<template>
  <div>
    <v-app-bar class="default-toolbar" app color="indigo" fixed clipped-left>
      <v-toolbar-title>
        <v-icon class="mx-2">mdi-cog</v-icon> VueVitePinia
      </v-toolbar-title>
      <v-spacer />
      <v-card-title>Test</v-card-title>
      <v-avatar color="red lighten-1" size="44">
        <span class="white--text text-h5">W</span>
      </v-avatar>
      <v-icon style="text-decoration: none" type="button" class="pa-4 ml-2" @click="redirectLogin">mdi-logout</v-icon>
    </v-app-bar>

    <!-- side-menu -->
    <side-menu expand-on-hover rail class="side-menu" />
  </div>
</template>
