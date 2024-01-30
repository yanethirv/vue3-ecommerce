<script lang="ts">

import { useCartStore } from '@/stores/cart';

export default {
    computed: {
        cartStore() {
            return useCartStore();
        },
        itemsCount() {
            return this.cartStore.cartItemsCount; //Accedemos a getter
        },
        showBadge() {
            return this.itemsCount > 0;
        }
    },
    data() {
        return {
            
        }
    }
}
</script>

<template>
<v-app-bar flat>
    <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar
            class="me-10 ms-4"
            size="32">
            <v-img src="/images/logo.jpg" />
        </v-avatar>

        <RouterLink to="/" custom v-slot="{navigate}">
            <v-btn :active="$route.name === 'home' || $route.name === 'category'" variant="text" @click="navigate">
                <v-icon class="mr-0 mr-sm-2" icon="mdi-home-variant" />
                <span class="d-none d-sm-flex">Home</span>
            </v-btn>
        </RouterLink>

        <RouterLink to="/cart" custom v-slot="{navigate}">
            <v-badge 
                :content="itemsCount" 
                :model-value="showBadge"
                color="orange-lighten-2"
            >
                <v-btn :active="$route.name === 'cart'" variant="text" @click="navigate">
                    <v-icon class="mr-0 mr-sm-2" icon="mdi-cart" />
                    <span class="d-none d-sm-flex">Cart</span>
                </v-btn>
            </v-badge>
        </RouterLink>

        <RouterLink to="/about" custom v-slot="{navigate}">
            <v-btn :active="$route.name === 'about'" variant="text" @click="navigate">
                <v-icon class="mr-0 mr-sm-2" icon="mdi-information" />
                <span class="d-none d-sm-flex">About</span>
            </v-btn>
        </RouterLink>

        <v-spacer></v-spacer>

        <v-responsive max-width="160">
            <v-text-field
                density="compact"
                flat
                hide-details
                label="Search"
                rounded="lg"
                single-line
                variant="solo-filled"
            ></v-text-field>
        </v-responsive>
    </v-container>
</v-app-bar>
</template>