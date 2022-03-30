<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // data: () => ({
  //   drawer: false,
  //   group: null
  // }),
  // watch: {
  //   group () {
  //     this.drawer = false
  //   }
  // }
})
</script>
<template>
  <v-navigation-drawer expand-on-hover rail class="side-menu">
    <v-layout class="primary-text" column fill-height>
      <v-list nav>
        <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles" />
        <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared" />
        <v-list-item prepend-icon="mdi-star" title="Starred" value="starred" />
      </v-list>
    </v-layout>
  </v-navigation-drawer>
</template>