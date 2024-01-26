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
        },
        subTotal() {
            return (this.detail.quantity * this.detail.product.price);
        }
    }
}
</script>
<template>
    <tr
        v-for="item in [{name:'test', calories:128}]"
        :key="item.name"
    >
        <td>
            <v-avatar size="40px">
                <v-img :src="productImageUrl" />
            </v-avatar>
            {{ detail.product.name }}
        </td>
        <td class="text-center">
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
        </td>
        <td>
            ${{ detail.product.price }}
        </td>
        <td>
            ${{ subTotal }}
        </td>
        <td class="text-center">
            <v-btn  
                class="ml-2"
                icon="mdi-delete" 
                size="x-small"
                @click="deleteProduct(detail.product.id)" />
        </td>
    </tr>
</template>