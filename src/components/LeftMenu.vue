<script lang="ts">

import OrderOptions from './left/OrderOptions.vue';
import ItemsList from './left/ItemsList.vue';

export default {
    components: { 
        OrderOptions, 
        ItemsList 
    }
}

</script>

<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">

            <ItemsList />

            <v-divider class="my-2"></v-divider>

            <OrderOptions />
            
        </v-list>
    </v-sheet>
</template>