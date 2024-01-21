import { createApp } from 'vue'
// Componente CONTADOR
import ProductList from './examples/ProductList.vue'

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

const app = createApp(ProductList)

app.use(vuetify) // Instancia de Vuetify
app.mount('#app')
