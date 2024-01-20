<script setup lang="ts">

    import { onMounted, ref } from 'vue';

    // Estados
    const count = ref(0);

    // Funciones
    function increase() {
        count.value++;
    }

    // Hooks
    onMounted(() => {
        console.log("El valor inicial es " + count.value)
    })
</script>

<template>
    <h1>Hola</h1>
    <p>Contador: {{count}}</p>
    <button @click="increase">
        Incrementar contador
    </button>
</template>