<script lang="ts">

import type { PropType } from 'vue';
import type { Product } from './Product';

export default {
    // Propiedad product - Viene del componente Padre
    props: {
        product: {
            type: Object as PropType<Product>, // Interface PRODUCT
            required: true
        } 
    }
}
</script>

<template>
    <p>Nombre: {{ product.name }}</p>
    <p>Price: {{ product.price }}</p>
    <hr />

</template>