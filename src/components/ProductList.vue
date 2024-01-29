<script lang="ts">

import ProductCard from './ProductCard.vue';
import { useProductsStore } from '@/stores/products';
import { mapState } from 'pinia';

export default {
    // Registro local de un componente
    components: { 
        ProductCard
    },
    computed: {
        // Mapeamos computed properties con alguna variable de estado del store
        ...mapState(useProductsStore, ['products', 'loading'])
    }
}
</script>

<template>
    <div v-if="loading" class="d-flex justify-center align-center h-100">
        <v-progress-circular 
            indeterminate 
            :size="128"
            :width="7"
        />
    </div>
    
        <v-row v-else>
                <v-col v-for="p in products" :key="p.id" cols="4">
                    <ProductCard :product="p" />
                </v-col>
        </v-row>

</template>