<script lang="ts">

import ProductList from '@/components/ProductList.vue';
import LeftMenu from '@/components/left/LeftMenu.vue';
import { useProductsStore } from '@/stores/products';

// Funcion Externa
function updateCategoryFromRouteParams(categoryIdParam: string|string[]) {
  const productsStore = useProductsStore();
  const categoryId = Number(categoryIdParam);
  productsStore.selectCategory(categoryId);
}

export default {
  components: {
    ProductList,
    LeftMenu
  },
  // Navigation guard de vue router
  beforeRouteEnter(to) {
    //console.log('beforeRouteEnter', to.params);
    updateCategoryFromRouteParams(to.params.categoryId);
  },
  // Navigation guard de vue router
  beforeRouteUpdate(to) {
    //console.log('beforeRouteUpdate', to.params);
    updateCategoryFromRouteParams(to.params.categoryId);
  },
  mounted() {
      //console.log('mounted');

      /*setInterval(() => {
        const productsStore = useProductsStore();
        productsStore.fetchProducts();
      }, 4000)*/

      const productsStore = useProductsStore();
      productsStore.fetchProducts();
  },
}
</script>

<template>
  <main>
    <v-row>
      <!-- Menu lateral -->
      <v-col cols="12" sm="3" lg="2">
        <LeftMenu />
      </v-col>
      
      <!-- Contenido principal -->
      <v-col cols="12" sm="9" lg="10">
        <ProductList />
      </v-col>

    </v-row>
  </main>
</template>
