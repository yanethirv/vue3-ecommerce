<script lang="ts">
export default {
    // Definicion de estado (Eventos) del componente
    data() {
        return {
            count: 0
        }
    },
    // Metodos para el componente
    methods: {
        increase() {
            // Con this accedemos a la variable count
            this.count += 1;
        },
        decrease() {
            // Con this accedemos a la variable count
            this.count -= 1;
        }
    },
    // Hooks: son bloques de codigo que podemos ejecutar
    // a lo largo del ciclo de vida de un componente
    mounted() {
        console.log("El valor inicial es " + this.count)
    }
}
</script>

<template>
    <p>Objetivo: Tienes que llegar a 20 clicks </p>
    <h1>Contador: {{ count }}</h1>
    <button @click="increase">Aumentar contador</button>
    <button @click="decrease">Disminuir contador</button>

    <p v-if="count <= 10">Vamos, adelante!</p>
    <p v-else>Ya te falta poco ...</p>
</template>