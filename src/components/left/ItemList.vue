<script lang="ts">

import { mapState } from 'pinia';
import { useCategoriesStore } from '@/stores/categories';

export default {
    computed: {
        ...mapState(useCategoriesStore, ['categories'])
    },
    methods: {
        goToCategory(categoryId: number) {
            this.$router.push({
                name: "category",
                params: { categoryId }
            });
        },
        clearCategory() {
            this.$router.push({
                name: "home"
            });
        },
    },
}
</script>
<template>
    <v-list-subheader>Categories</v-list-subheader>

    <v-list-item link @click="clearCategory()" :active="$route.name === 'home'">
        <v-list-title>
            Todas
        </v-list-title>
    </v-list-item>

    <v-list-item :active="$route.name === 'category' && Number($route.params.categoryId) === category.id"
        v-for="category in categories"
        :key="category.id"
        link
        @click="goToCategory(category.id)"
    >
        <v-list-item-title>
            {{ category.name }}
        </v-list-item-title>
    </v-list-item>
</template>