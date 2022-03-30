import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import router from '@/router'
import { apolloProvider } from '@/apollo'
import { loadFonts } from './plugins/webfontloader'
// import '@/styles/global.scss'

loadFonts()

const app = createApp(App)

const store = createPinia()

app.use(vuetify)
app.use(router)
app.use(store)
app.use(apolloProvider)

app.mount('#app')
