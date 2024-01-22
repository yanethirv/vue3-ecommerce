<script lang="ts">

import { useCartStore } from '@/stores/cart';

export default {
    // Propiedades a recibir del componente Padre
    computed: {
        cartStore() {
            return useCartStore();
        },
        details() {
            return this.cartStore.details;
        }
    },
    methods: {
        incrementQuantity(productId: number){  
            this.cartStore.increment(productId);
        },
        decrementQuantity(productId: number){
            this.cartStore.decrement(productId);
        },
        deleteProduct(productId: number){
            this.cartStore.deleteProduct(productId);
        }
    },
    
}
</script>

<template>
    <v-card class="mt-4">

        <v-card-title>
            Productos agregados al carrito:
        </v-card-title>

        <v-card-text>

            <v-list>
                <v-list-item v-for="detail in details" :value="detail.productId">
                    <v-list-item-title>
                        Product: {{ detail.productId }}
                        
                        <v-btn @click="decrementQuantity(detail.productId)">
                            -
                        </v-btn>

                        (Qty: {{ detail.quantity }})

                        <v-btn  @click="incrementQuantity(detail.productId)">
                            +
                        </v-btn>

                        <v-btn  @click="deleteProduct(detail.productId)">
                            Delete
                        </v-btn>

                    </v-list-item-title>
                </v-list-item>
            </v-list>

        </v-card-text>
    </v-card>
</template>