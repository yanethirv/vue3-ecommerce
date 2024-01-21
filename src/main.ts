import { createApp } from 'vue'
// Componente App
import App from './App.vue'

// Vue Router
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

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
app.mount('#app')
