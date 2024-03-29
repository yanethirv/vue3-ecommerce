import { defineStore } from "pinia";
import type { Product } from "@/model/types";

export const useProductsStore = defineStore('products', {
    state: () => ({
        // Variables de Estado
        categoryId: null as number|null,
        orderBy: 'price' as string,
        _products: [] as Product[],
        loading: true
    }),
    getters: {
        products(state) {
            let products = null;

            // Filter
            if (state.categoryId){
                // Realiza el filtrado
                products = state._products
                    .filter(p => p.categoryId === state.categoryId);
            }else {
                // Devuelve el arreglo original de productos
                products = state._products;
            }

            // Order
            if (state.orderBy === ''){
                return products;
            }

            if (state.orderBy === 'name'){
                return products.sort((a, b) => a.name.localeCompare(b.name));
            }

            if (state.orderBy === 'nameDesc'){
                return products.sort((a, b) => b.name.localeCompare(a.name));
            }

            if (state.orderBy === 'price'){
                return products.sort((a, b) => a.price - b.price);
            }

            if (state.orderBy === 'priceDesc'){
                return products.sort((a, b) => b.price - a.price);
            }

        }
    },
    actions: {
        // Se encarga de actualizar el estado
        fetchProducts() {
            fetch('/data/products.json')
                .then(response => response.json())
                .then((data) => {
                    //console.log(data);
                    this._products = data;
                    this.loading = false;
                })
        },
        selectCategory(categoryId: number) {
            this.categoryId = categoryId
        },
        orderByName() {
            this.orderBy = 'name'
        },
        orderByNameDesc() {
            this.orderBy = 'nameDesc'
        },
        orderByPrice() {
            this.orderBy = 'price'
        },
        orderByPriceDesc() {
            this.orderBy = 'priceDesc'
        },
    },
    
})