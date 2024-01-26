<script lang="ts">

import ProductList from '@/components/ProductList.vue';
import CategoryList from '@/components/CategoryList.vue';
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
    CategoryList
  },
  // Navigation guard de vue router
  beforeRouteEnter(to, from) {
    //console.log('beforeRouteEnter', to.params);
    updateCategoryFromRouteParams(to.params.categoryId);
  },
  // Navigation guard de vue router
  beforeRouteUpdate(to, from) {
    //console.log('beforeRouteUpdate', to.params);
    updateCategoryFromRouteParams(to.params.categoryId);
  }
}
</script>

<template>
  <main>
    <v-row>
      <v-col cols="2">
        <CategoryList />
      </v-col>
      
      <v-col cols="10">
        <ProductList />
      </v-col>
    </v-row>
  </main>
</template>
