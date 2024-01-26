<script lang="ts">

import type { Category } from '@/model/types';

export default {
    data() {
        return {
            categories: [
                {id: 1, name: 'Home', description: 'Accesorios para el Hogar'},
                {id: 2, name: 'Kids', description: 'Accesorios para Chicos'},
                {id: 3, name: 'Adults', description: 'Ropa y Calzado'},
                {id: 4, name: 'Electronics', description: 'Tv, Laptops'},
            ] as Category[]
        };
    },
    methods: {
        selectCategory(categoryId: number) {
            this.$router.push(
                {
                    name: "category", 
                    params: { categoryId }
                }
            );

        } 
    }
}

</script>

<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">
            <v-list-item
                v-for="category in categories"
                :key="category.id"
                link
                @click="selectCategory(category.id)"
            >
                <v-list-item-title>
                    {{ category.name }}
                </v-list-item-title>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item
                link
                color="grey-lighten-4"
                title="Order by price"
            ></v-list-item>

        </v-list>
    </v-sheet>
</template>