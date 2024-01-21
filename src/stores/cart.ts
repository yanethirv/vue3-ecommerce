import { defineStore } from 'pinia'
import type { CartDetail } from '@/model/Types';

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
        }
    },
})