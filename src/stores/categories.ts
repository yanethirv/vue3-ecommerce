import { defineStore } from "pinia";
import type { Category } from "@/model/types";

export const useCategoriesStore = defineStore('categories', {
    state: () => ({
        // Variables de Estado
        categories: [
            { id: 1, name: 'Home', description: 'Accesorios para el Hogar' },
            { id: 2, name: 'Kids', description: 'Accesorios para Chicos' },
            { id: 3, name: 'Adults', description: 'Ropa y Calzado' },
            { id: 4, name: 'Electronics', description: 'Tv, Laptops' },
        ] as Category[]
    }),
    getters: {

    },
    actions: {

    },
    
})