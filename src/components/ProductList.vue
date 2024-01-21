<script lang="ts">
import ProductCard from './ProductCard.vue';
import Cart from './Cart.vue';
import type { Product, CartDetail } from '@/model/types';

export default {
    // Registro local de un componente
    components: { 
        ProductCard,
        Cart
    },
    // Definicion de variables de Estado
    data() {
        return {
            products: <Array<Product>> [
                { id: 1, name: 'Camisa', price: 15 },
                { id: 2, name: 'Short', price: 15 },
                { id: 3, name: 'Legos', price: 25 },
                { id: 4, name: 'Carpa', price: 250 },
                { id: 5, name: 'Zapatos', price: 75 },
                { id: 6, name: 'Sombrilla', price: 120 },
            ],
        };
    },
    // Metodos
    methods: {
        onProductAdd(productId: number) {
            
        }
    }
}
</script>

<template>
    <v-row>
        <v-col v-for="p in products" cols="4">
            <ProductCard
                :product="p"
                @add-product="onProductAdd(p.id)"
            />
        </v-col>
    </v-row>
</template>