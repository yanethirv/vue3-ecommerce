<script lang="ts">

import ProductCard from './ProductCard.vue';
import type { Product } from '@/model/types';

export default {
    // Registro local de un componente
    components: { 
        ProductCard
    },
    // Definicion de variables de Estado
    data() {
        return {
            products: [
                { id: 1, name: 'Silla', price: 365, image: '/public/images/products/1.png', categoryId: 1 },
                { id: 1, name: 'Mesa de Madera', price: 265, image: '/public/images/products/2.png', categoryId: 1 },
                { id: 1, name: 'Sombrilla de Playa', price: 45, image: '/public/images/products/3.png', categoryId: 1 },
                { id: 1, name: 'Cojines', price: 15, image: '/public/images/products/4.png', categoryId: 1 },
                { id: 1, name: 'Flotador Flamingo', price: 35, image: '/public/images/products/5.png', categoryId: 2 },
                { id: 1, name: 'Tv 32" Philips', price: 350, image: '/public/images/products/6.png', categoryId: 4 },
                { id: 1, name: 'Laptop 17" HP', price: 705, image: '/public/images/products/7.png', categoryId: 4 },
                { id: 1, name: 'Zapatos de Piel', price: 65, image: '/public/images/products/8.png', categoryId: 3 },
                { id: 1, name: 'Vestido de Fiesta', price: 150, image: '/public/images/products/9.png', categoryId: 3 },
                { id: 1, name: 'Kits de Juguetes', price: 45, image: '/public/images/products/10.png', categoryId: 2 },
            ] as Product[],
        };
    },
    // Metodos
    methods: {
        
    }
}
</script>

<template>
    <v-row>
        <v-col v-for="p in products" :key="p.id" cols="4">
            <ProductCard :product="p" />
        </v-col>
    </v-row>
</template>