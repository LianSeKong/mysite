import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 自定义指令
import loading from './directives/loading'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.directive('loading', loading)
app.use(createPinia())
app.use(router)

app.mount('#app')
