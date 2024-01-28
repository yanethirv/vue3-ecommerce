<script lang="ts">

import { mapActions, mapState } from 'pinia';
import { useProductsStore } from '@/stores/products';

export default {
    methods: {
        ...mapActions(useProductsStore, ['orderByName', 'orderByPrice'])
    },
    computed: {
        ...mapState(useProductsStore, ['orderBy'])
    }
}
</script>
<template>
    <v-list-subheader>Order</v-list-subheader>
    <v-list-item 
        link
        @click="orderByName" :active="orderBy === 'name'">
        <v-list-item-title>
            By name
        </v-list-item-title>
    </v-list-item>
    <v-list-item 
        link
        @click="orderByPrice" :active="orderBy === 'price'">
        <v-list-item-title>
            By price
        </v-list-item-title>
    </v-list-item>
</template>