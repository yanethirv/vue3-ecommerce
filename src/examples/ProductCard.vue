<script lang="ts">

import type { PropType } from 'vue';
import type { Product } from './Types';

export default {
    // Propiedad product - Viene del componente Padre
    // Propiedades que puede recibir
    props: {
        product: {
            type: Object as PropType<Product>, // Interface PRODUCT
            required: true
        } 
    },
    // Eventos que puede emitir
    emits: ['add-product'],

    // Metodo
    methods: {
        onAddButtonClick() {
            // El metodo Emite el evento addProduct
            this.$emit('add-product');
            //console.log('Agregando producto ' + this.product.id);
        } 
    }
}
</script>

<template>
    <v-card 
    :title="product.name">
        <p>Price: {{ product.price }}</p>

        <v-card-actions>
            <v-btn @click="onAddButtonClick">
                Agregar al carrito
            </v-btn>
        </v-card-actions>
    </v-card>
</template>./Types