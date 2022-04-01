import { defineStore } from "pinia";
import myArticle from "./inventory.json";

export const usePanierStore = defineStore({
  id: "panier",
  state: () => ({
    articles: myArticle["articles"],
    inPanier: [],
  }),
  getters: {
    getInPanier: (state) => state.inPanier, //inPanier
    getArticles: (state) => state.articles, // list
//  calcul pour 
    getTotalPrix: (state) => {
      let total = 0;
      state.inPanier.map((item: { prix: number, quantity: number }) => {
        total += (item.prix * item.quantity)
      })
      return total
    },



    getPanierSize: (state) => state.inPanier.length
  },
  actions: {},
});
