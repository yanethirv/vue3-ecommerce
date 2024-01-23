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
                { id: 1, name: 'Camisa', price: 15 },
                { id: 2, name: 'Short', price: 15 },
                { id: 3, name: 'Legos', price: 25 },
                { id: 4, name: 'Carpa', price: 250 },
                { id: 5, name: 'Zapatos', price: 75 },
                { id: 6, name: 'Sombrilla', price: 120 },
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