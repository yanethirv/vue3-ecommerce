<script lang="ts">
import type { Product } from './Types';
import ProductCard from './ProductCard.vue';
import Cart from './Cart.vue';
import { CartDetail } from './Types';

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
            details: <Array<CartDetail>>[]
        };
    },
    // Metodos
    methods: {
        onProductAdd(productId: number) {
            //console.log("Agregar producto " + productId);
            this.details.push({
                productId,
                quantity: 1
            });
        }
    }
    
}
</script>

<template>
    <ProductCard 
        v-for="p in products" 
        :product="p"
        @add-product="onProductAdd(p.id)"
    />

    <Cart :details="details" />
</template>