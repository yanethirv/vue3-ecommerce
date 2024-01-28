<script lang="ts">

import { mapActions, mapState } from 'pinia';
import { useProductsStore } from '@/stores/products';

export default {
    methods: {
        ...mapActions(useProductsStore, [
            'orderByName', 'orderByNameDesc', 
            'orderByPrice', 'orderByPriceDesc'
        ]),  
    },
    computed: {
        ...mapState(useProductsStore, ['orderBy'])
    }
}
</script>
<template>
    <v-list-subheader>Order por</v-list-subheader>
    <v-list-item 
        link
        @click="orderByName" :active="orderBy === 'name'">
        <v-list-item-title>
            Name (A-Z)
        </v-list-item-title>
    </v-list-item>
    <v-list-item 
        link
        @click="orderByNameDesc" :active="orderBy === 'nameDesc'">
        <v-list-item-title>
            Name (Z-A)
        </v-list-item-title>
    </v-list-item>
    <v-list-item 
        link
        @click="orderByPrice" :active="orderBy === 'price'">
        <v-list-item-title>
            Price (menor a mayor)
        </v-list-item-title>
    </v-list-item>
    <v-list-item 
        link
        @click="orderByPriceDesc" :active="orderBy === 'priceDesc'">
        <v-list-item-title>
            Price (mayor a menor)
        </v-list-item-title>
    </v-list-item>

</template>