import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import { apolloProvider } from '@/apollo'
import '@/styles/global.scss'

const app = createApp(App)

const store = createPinia()

app.use(router)
app.use(store)
app.use(apolloProvider)

app.mount('#app')
