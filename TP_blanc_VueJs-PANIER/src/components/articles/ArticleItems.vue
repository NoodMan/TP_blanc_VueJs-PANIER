<template>
  <div v-for="item in list" :key="item">
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
    addToPanier(selectedItemId) {
      let itemAlreadyInPanier = this.inPanier.find(
        (e) => String(e.id) === String(selectedItemId)
      );

      if (itemAlreadyInPanier) {
        return;
      }
      //Selectionne larticle dans la liste
      let item_to_add = this.list.find(
        (e) => String(e.id) === String(selectedItemId)
      );
      // lui ajoute une clé quantity
      item_to_add.quantity = 1;
      //l 'ajoute dans le tableau panier du store
      this.inPanier.push(item_to_add);
    },
    removeToPanier(selectedItemId) {
      //Selectionne larticle dans la liste
      let filteredPanier = this.inPanier.filter(
        (e) => String(e.id) !== String(selectedItemId)
      );
      this.inPanier = filteredPanier instanceof Array ? filteredPanier : [];
    },
  },
};
</script>


<style scoped></style>