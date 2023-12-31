import './assets/main.css'

import { createApp } from 'vue'
import  store  from './stores'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import mitt from 'mitt'
const Emitter = mitt()

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)

// app.use(createPinia())
app.use(store)
app.use(router)
app.use(vuetify)
app.provide('Emitter',Emitter)
app.mount('#app')
