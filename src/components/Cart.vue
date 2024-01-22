<script lang="ts">

import { useCartStore } from '@/stores/cart';
import { RouterLink } from 'vue-router'

export default {
    // Propiedades a recibir del componente Padre
    computed: {
        cartStore() {
            return useCartStore();
        },
        details() {
            return this.cartStore.details;
        },
        statusCart() {
            return this.cartStore.statusCart; //Accedemos a getter
        },
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

            <v-list v-if="statusCart">
                <v-list-item v-for="detail in details" :value="detail.productId">
                    <v-list-item-title>
                        Product: {{ detail.productId }}
                        
                        <v-btn 
                            class="ml-2"
                            icon="mdi-minus" 
                            size="x-small" 
                            @click="decrementQuantity(detail.productId)" />

                        Cantidad: {{ detail.quantity }}

                        <v-btn  
                            icon="mdi-plus" 
                            size="x-small"
                            @click="incrementQuantity(detail.productId)" />

                        <v-btn  
                            class="ml-2"
                            icon="mdi-delete" 
                            size="x-small"
                            @click="deleteProduct(detail.productId)" />

                    </v-list-item-title>
                </v-list-item>
            </v-list>

            <p v-else>No se han agregado productos al carrito. Ver <RouterLink to="/">Productos</RouterLink></p>
        </v-card-text>
    </v-card>
</template>