<template>
  <div>
    <v-app-bar color="indigo" dark>
      <v-toolbar-title>
        <v-icon class="mb-1 mr-2">mdi-application-braces</v-icon> TS-GraphQL/Apollo Template
      </v-toolbar-title>
      <v-spacer />
      <v-card-title>Test</v-card-title>
      <v-avatar color="red lighten-1" size="44">
        <span class="white--text text-h5">W</span>
      </v-avatar>
      <v-icon style="text-decoration: none" class="pa-4">mdi-logout</v-icon>
    </v-app-bar>
    <v-navigation-drawer
      expand-on-hover
      rail
    >
      <v-layout class="primary-text" column fill-height>
        <v-list nav dense>
          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles" />
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared" />
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred" />
        </v-list>
      </v-layout>
    </v-navigation-drawer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    drawer: false,
    group: null,
    items: []
  }),
  watch: {
    group () {
      this.drawer = false
    }
  }
})
</script>