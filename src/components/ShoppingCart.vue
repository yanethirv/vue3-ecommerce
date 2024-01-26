<script lang="ts">

import { useCartStore } from '@/stores/cart';
import { mapActions, mapState } from 'pinia';
import ShoppingCartItem from './ShoppingCartItem.vue';

export default {
    computed: {
        // Mapeamos computed properties con alguna variable de estado del store
        ...mapState(useCartStore, ['details', 'statusCart'])
    },
    components: { ShoppingCartItem }
}
</script>

<template>
    <v-card class="mt-4">

        <v-card-title>
            Productos agregados al carrito:
        </v-card-title>

        <v-card-text>

            <v-table v-if="statusCart">
                <thead>
                <tr>
                    <th class="text-left">
                        Nombre
                    </th>
                    <th class="text-center">
                        Cantidad
                    </th>
                    <th class="text-left">
                        Precio
                    </th>
                    <th class="text-left">
                        Subtotal
                    </th>
                    <th class="text-center">
                        Actions
                    </th>
                </tr>
                </thead>
                <tbody>
                    <ShoppingCartItem 
                        v-for="detail in details"
                        :key="detail.product.id"
                        :detail="detail"/>
                </tbody>
            </v-table>

            <p v-else>No se han agregado productos al carrito. Ver <RouterLink to="/">Productos</RouterLink></p>
        </v-card-text>
    </v-card>
</template>