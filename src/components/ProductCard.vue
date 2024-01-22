<script lang="ts">

import type { PropType } from 'vue';
import type { Product } from '@/model/types';
import { useCartStore } from '@/stores/cart';

export default {
    // Propiedad product - Viene del componente Padre ProductList
    // Propiedades que puede recibir
    props: {
        product: {
            type: Object as PropType<Product>, // Interface PRODUCT
            required: true
        } 
    },
    computed: {
        cartStore() {
            return useCartStore();
        },
    },
    // Metodo
    methods: {
        onAddButtonClick() {
            this.cartStore.addProduct(this.product.id);
        } 
    }
}
</script>

<template>
    <v-card>

        <v-img
            class="align-end text-white"
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover
        />

        <v-card-title>{{ product.name }}</v-card-title>

        <v-card-text>
            <p class="mb-4">Descripcion de ejemplo</p>
            <v-chip>
                $ {{ product.price }}
            </v-chip> 
        </v-card-text>

        <v-card-actions>
            <v-btn color="orange-lighten-2" @click="onAddButtonClick">
                Agregar al carrito
            </v-btn>
        </v-card-actions>

    </v-card>
</template>