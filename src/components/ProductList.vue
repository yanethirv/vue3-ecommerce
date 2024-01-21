<script lang="ts">
import ProductCard from './ProductCard.vue';
import Cart from './Cart.vue';
import type { Product, CartDetail } from '../model/Types';

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
                { id: 1, name: 'Producto A', price: 10 },
                { id: 2, name: 'Producto B', price: 85 },
                { id: 3, name: 'Producto C', price: 210 },
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

    <Cart />
    
</template>