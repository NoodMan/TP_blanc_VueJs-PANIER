<template>
  <div v-for="item in list" :key="item">
    <!-- au clic la function s'execute -->
    <Article
      :article="item"
      @add-to-panier="addToPanier"
      @remove-to-panier="removeToPanier"
    />
  </div>
</template>

<script>
import { mapWritableState } from "pinia";
import { usePanierStore } from "../../stores/panier";
import Article from "./TheArticle.vue";
export default {
  // pour modifier en ecriture 
  computed: {
    ...mapWritableState(usePanierStore, {
      list: "getArticles",
      inPanier: "inPanier",
    }),
  },
  components: {
    Article, // pour recuperer la liste des croquettes
  },
  methods: {
    addToPanier(selectedArticleItemId) {
      let itemAlreadyInPanier = this.inPanier.find(
        (e) => String(e.id) === String(selectedArticleItemId)
      );

      if (itemAlreadyInPanier) {
        return;
      }
      //Selectionne larticle dans la liste grace a find
      let item_to_add = this.list.find(
        (e) => String(e.id) === String(selectedArticleItemId)
      );
      // création de la clé quantity
      item_to_add.quantity = 1;
      //l 'ajoute dans le tableau panier du store
      this.inPanier.push(item_to_add);
    },
    removeToPanier(selectedArticleItemId) {
      //Selectionne larticle dans la liste
      let filteredPanier = this.inPanier.filter(
        (e) => String(e.id) !== String(selectedArticleItemId)
      );
      this.inPanier = filteredPanier instanceof Array ? filteredPanier : [];
    },
  },
};
</script>


<style scoped></style>