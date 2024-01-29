import { defineStore } from "pinia";
import type { Category } from "@/model/types";
import categoriesData from '@/data/categories.json'

//console.log(categoriesData)

export const useCategoriesStore = defineStore('categories', {
    state: () => ({
        // Variables de Estado
        categories: categoriesData as Category[]
    }),
    getters: {

    },
    actions: {

    },
    
})