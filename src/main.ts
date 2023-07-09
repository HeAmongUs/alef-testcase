import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import registerFilters from '@/shared/filters'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

registerFilters(app)

app.use(pinia).use(router).mount('#app')
