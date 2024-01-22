import { defineStore } from 'pinia'
import type { CartDetail } from '@/model/types';

export const useCartStore = defineStore('cart', {
    state: () => ({
        /* Para realizar pruebas
        details: <Array<CartDetail>>[{
            productId: 100,
            quantity: 2
        }]*/
        details: <Array<CartDetail>>[]
    }),
    getters: {
        cartItemsCount: (state) => {
            let count= 0;
            state.details.forEach(detail => {
                count += detail.quantity;
            });
            return count;
        },
    },
    actions: {
        addProduct(productId: number) {
            const detailFound = this.details.find(d => d.productId === productId);

            if (detailFound) {
                detailFound.quantity++;
            } else {
                // Solo hace PUSH ante un producto distinto
                this.details.push({
                    productId,
                    quantity: 1
                });
            }
        },
        increment(productId: number) {
            const detailFound = this.details.find(d => d.productId === productId);
            
            if (detailFound) {
                detailFound.quantity++;
            }
        },
        decrement(productId: number) {
            const detailFound = this.details.find(d => d.productId === productId);
            
            if (detailFound) {
                detailFound.quantity--;

                if(detailFound.quantity === 0) {
                    this.deleteProduct(productId);
                }
            }
        },
        deleteProduct(productId: number) {
            // Devuelve el indice del producto a eliminar del arreglo
            const index = this.details.findIndex(d => d.productId === productId);
            this.details.splice(index, 1); // Acepta una posicion y la cantidad
        },
    },
})