<script lang="ts">

import OrderOptions from './OrderOptions.vue';
import CategoryOptions from './CategoryOptions.vue';
import { useCategoriesStore } from '@/stores/categories';

export default {
    components: { 
        OrderOptions, 
        CategoryOptions 
    },
    mounted() {
      //console.log('mounted')
      const categoriesStore = useCategoriesStore();
      categoriesStore.fetchCategories();
  },
}

</script>

<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">

            <CategoryOptions />

            <v-divider class="my-2"></v-divider>

            <OrderOptions />
            
        </v-list>
    </v-sheet>
</template>