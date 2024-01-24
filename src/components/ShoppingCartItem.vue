<script lang="ts">

import type { CartDetail } from '@/model/types';
import { useCartStore } from '@/stores/cart';
import { mapActions } from 'pinia';
import type { PropType } from 'vue';

export default {
    props: {
        detail: {
            type: Object as PropType<CartDetail>,
            required: true
        },
    },
    methods: {
        // Mapeamos metodos con acciones
        ...mapActions(useCartStore, {
            incrementQuantity: 'increment',
            decrementQuantity: 'decrement',
            deleteProduct: 'deleteProduct'
        }),
    },
    computed: {
        productImageUrl() {
            return this.detail.product.image
                ?? 'https://cdn.vuetifijs/images/cards/sunshine.jpg';
        }
    }
}
</script>
<template>
    <v-list-item>
        <v-avatar size="40px">
            <v-img :src="productImageUrl" />
        </v-avatar>
        <v-list-item-title>
            {{ detail.product.name }}
            <v-btn 
                class="ml-2"
                icon="mdi-minus" 
                size="x-small" 
                @click="decrementQuantity(detail.product.id)" />

            Cantidad: {{ detail.quantity }}

            <v-btn  
                icon="mdi-plus" 
                size="x-small"
                @click="incrementQuantity(detail.product.id)" />

            <v-btn  
                class="ml-2"
                icon="mdi-delete" 
                size="x-small"
                @click="deleteProduct(detail.product.id)" />

        </v-list-item-title>
    </v-list-item>
</template>