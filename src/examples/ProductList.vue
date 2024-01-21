<script lang="ts">
import ProductCard from './ProductCard.vue';

export default {
    // Registro local de un componente
    components: { 
        ProductCard 
    },
    // Definicion de variables
    data() {
        return {
            products: [
                { id: 1, name: 'Producto A', price: 10 },
                { id: 1, name: 'Producto B', price: 85 },
                { id: 1, name: 'Producto C', price: 210 },
            ]
        };
    },
    // Metodos
    methods: {}
    
}
</script>

<template>
    <ul>
        <li v-for="product in products">{{ product.name }} ($ {{ product.price }})</li>
    </ul>

    <ProductCard 
        v-for="p in products" 
        :product="p"
    />
</template>