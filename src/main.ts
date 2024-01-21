import { createApp } from 'vue'
// Componente App
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Vue Router - Gestion de Rutas
import router from './router'

// Pinia - Gestion de Estados
import { createPinia } from 'pinia'

const vuetify = createVuetify({
    components,
    directives,
    theme: { // Objeto Theme
        defaultTheme: 'dark'
    }
})

const app = createApp(App)

app.use(vuetify) // Instancia de Vuetify
app.use(router) // Instancia de Vue-router
app.use(createPinia()) // Instancia de Pinia
app.mount('#app')
