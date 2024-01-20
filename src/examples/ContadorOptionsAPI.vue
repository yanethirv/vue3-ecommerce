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
    <h1>Contador: {{ count }}</h1>
    <button @click="increase">Aumentar contador</button>
    <button @click="decrease">Disminuir contador</button>
</template>