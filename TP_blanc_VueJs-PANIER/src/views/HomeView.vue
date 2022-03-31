<script>
import ArticleItems from "../components/articles/ArticleItems.vue";
import { usePanierStore } from "../stores/panier";
import { mapState } from "pinia";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  components: {
    ArticleItems, // méthode addToPanier & removeToPanier
  },
  computed: {
    ...mapState(usePanierStore, ["getPanierSize"]),
  },
};
</script>

<template>
  <main>
    <div class="d-flex flex-end">
      <button type="button" class="btn btn-primary position-relative">
        <span id="size" class="material-icons">
shopping_basket
</span>
        <span
          class="
            position-absolute
            top-0
            start-100
            translate-middle
            badge
            rounded-pill
            bg-danger
          "
        >
          {{ getPanierSize }}
        </span>
      </button>
    </div>

    <ArticleItems />
  </main>
</template>

<style scoped>
#size {
    font-size: 50px;
 
}
</style>