<script lang="ts">
import type { PropType } from 'vue';
import type { CartDetail } from './Types'

export default {
    // Propiedades a recibir del componente Padre
    props: {
        details: {
            type: Object as PropType<Array<CartDetail>>,
            required: true
        }
    }
}
</script>

<template>
    <p>Productos agregados:</p>
    <ul>
        <li v-for="detail in details">
            Product: {{ detail.productId }} (Qty: {{ detail.quantity }})
        </li>
    </ul>
</template>