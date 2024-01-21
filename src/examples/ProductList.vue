<script lang="ts">
import type { Product } from './Product';
import ProductCard from './ProductCard.vue';

export default {
    // Registro local de un componente
    components: { 
        ProductCard 
    },
    // Definicion de variables
    data() {
        return {
            products: <Array<Product>> [
                { id: 1, name: 'Producto A', price: 10 },
                { id: 2, name: 'Producto B', price: 85 },
                { id: 3, name: 'Producto C', price: 210 },
            ]
        };
    },
    // Metodos
    methods: {
        onProductAdd(productId: number) {
            console.log("Agregar producto " + productId);
        }
    }
    
}
</script>

<template>
    <ProductCard 
        v-for="p in products" 
        :product="p"
        @addProduct="onProductAdd(p.id)"
    />
</template>