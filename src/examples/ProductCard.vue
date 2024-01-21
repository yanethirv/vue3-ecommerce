<script lang="ts">
export default {
    // Propiedad product - Viene del componente Padre
    props: ['product'],
}
</script>

<template>
    <p>Nombre: {{ product.name }}</p>
    <p>Price: {{ product.price }}</p>
    <hr />

</template>