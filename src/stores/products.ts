import { defineStore } from "pinia";
import type { Product } from "@/model/types";

export const useProductsStore = defineStore('products', {
    state: () => ({
        // Variables de Estado
        categoryId: null as number|null,
        orderBy: '' as string,
        _products: [
            { id: 1, name: 'Silla', price: 365, image: '/public/images/products/1.png', categoryId: 1 },
            { id: 2, name: 'Mesa de Madera', price: 265, image: '/public/images/products/2.png', categoryId: 1 },
            { id: 3, name: 'Sombrilla de Playa', price: 45, image: '/public/images/products/3.png', categoryId: 1 },
            { id: 4, name: 'Cojines', price: 15, image: '/public/images/products/4.png', categoryId: 1 },
            { id: 5, name: 'Flotador Flamingo', price: 35, image: '/public/images/products/5.png', categoryId: 2 },
            { id: 6, name: 'Tv 32" Philips', price: 350, image: '/public/images/products/6.png', categoryId: 4 },
            { id: 7, name: 'Laptop 17" HP', price: 705, image: '/public/images/products/7.png', categoryId: 4 },
            { id: 8, name: 'Zapatos de Piel', price: 65, image: '/public/images/products/8.png', categoryId: 3 },
            { id: 9, name: 'Vestido de Fiesta', price: 150, image: '/public/images/products/9.png', categoryId: 3 },
            { id: 10, name: 'Kits de Juguetes', price: 45, image: '/public/images/products/10.png', categoryId: 2 },
        ] as Product[]
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

            if (state.orderBy === 'price'){
                return products.sort((a, b) => a.price - b.price);
            }

        }
    },
    actions: {
        // Se encarga de actualizar el estado
        selectCategory(categoryId: number) {
            this.categoryId = categoryId
        },
        orderByName() {
            this.orderBy = 'name'
        },
        orderByPrice() {
            this.orderBy = 'price'
        }
    },
    
})