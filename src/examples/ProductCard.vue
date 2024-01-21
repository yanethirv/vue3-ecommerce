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
    <p>Nombre: {{ product.name }}</p>
    <p>Price: {{ product.price }}</p>
    <button @click="onAddButtonClick">Agregar al carrito</button>
    <hr />
</template>./Types