import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from '@/router'
// import '@/styles/global.scss'

loadFonts()

const app = createApp(App)
const store = createPinia()

app.use(vuetify)
app.use(router)
app.use(store)

app.mount('#app')
