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
      //console.log('mounted')
      const productsStore = useProductsStore();
      productsStore.fetchProducts();
  },
}
</script>

<template>
  <main>
    <v-row>
      <v-col cols="2">
        <LeftMenu />
      </v-col>
      
      <v-col cols="10">
        <ProductList />
      </v-col>
    </v-row>
  </main>
</template>
