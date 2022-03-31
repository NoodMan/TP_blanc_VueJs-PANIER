<script>
import { mapWritableState } from "pinia";
import { usePanierStore } from "@/stores/panier";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  computed: {
    ...mapWritableState(usePanierStore, {
      panier_articles: "getInPanier",
      total: "getTotalPrix",
    }),
  },
};
</script>

<template>
  <table class="table table-dark table-hover">
    <tr>
      <caption>
        Mon panier 
      </caption>
    </tr>
    <tr>
      <th>Id</th>
      <th>Title</th>
      <th>Quantity</th>
      <th>Prix</th>
    </tr>
    <tr v-for="b_a in panier_articles" :key="b_a.id">
      <td>{{ b_a.id }}</td>
      <td>{{ b_a.title }}</td>
      <td>
        <input
          class="text-light"
          type="number"
          v-model="b_a.quantity"
          name="quantity"
          id="quantity"
        />
      </td>
      <td>{{ b_a.prix }} {{ b_a.devise }}</td>
    </tr>
    <tr>
      <span> Total = {{ total }} € </span>
    </tr>
  </table>
</template>