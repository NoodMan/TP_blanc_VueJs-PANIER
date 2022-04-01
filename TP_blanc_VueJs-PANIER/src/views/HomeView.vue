<template>
  <main>
    <div class="d-flex flex">
      <button type="button" class="btn btn-primary position-relative">
        <span id="size" class="material-icons">
shopping_basket
</span>
<!-- pour le 0 red du compteur du panier  -->
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
<!-- pour recupérer la liste des croquettes -->
    <ArticleItems /> 
  </main>
</template>

<script>
import ArticleItems from "../components/articles/ArticleItems.vue";
import { usePanierStore } from "../stores/panier";
import { mapState } from "pinia";
export default {
  components: {
    ArticleItems, // méthode addToPanier & removeToPanier
  },
  computed: {
    ...mapState(usePanierStore, ["getPanierSize"]),
  },
};
</script>



<style scoped>
#size {
    font-size: 50px;
 
}
</style>