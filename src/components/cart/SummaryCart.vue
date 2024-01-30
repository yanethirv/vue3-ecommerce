<script lang="ts">

import { useCartStore } from '@/stores/cart';
import { mapState } from 'pinia';

export default {
    computed: {
        ...mapState(useCartStore, ['totalAmount', 'whatsAppLink'])
    }
}
</script>
<template>
    <v-card>
        <v-card-title>
            Resumen de la compra
        </v-card-title>

        <v-card-subtitle>
            <p>Total: ${{ totalAmount }}</p>
        </v-card-subtitle>

        <v-card-text>
            <v-btn :href="whatsAppLink" target="_blank" variant="tonal" color="orange-lighten-2">
                Realizar Pedido
            </v-btn>
        </v-card-text>
    </v-card>
</template>