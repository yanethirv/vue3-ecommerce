<script lang="ts">
import type { Product, CartDetail } from './Types';
import ProductCard from './ProductCard.vue';
import Cart from './Cart.vue';

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
            const detailFound = this.details.find(d => d.productId === productId);

            if (detailFound) {
                detailFound.quantity++;
                //console.log(detailFound);
            } else {
                // Solo hace PUSH ante un producto distinto
                //console.log(detailFound);
                this.details.push({
                    productId,
                    quantity: 1
                });
            }
            
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
    
    <Cart :details="details" />
</template>