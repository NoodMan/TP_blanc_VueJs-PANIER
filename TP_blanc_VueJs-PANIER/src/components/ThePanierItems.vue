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
    <tr v-for="p_a in panier_articles" :key="p_a.id">
      <td>{{ p_a.id }}</td>
      <td>{{ p_a.title }}</td>
      <td>
        <input
          class="text-light"
          type="number"
          v-model="p_a.quantity"
          name="quantity"
          id="quantity"
          min="0"
        />
      </td>
      <td>{{ p_a.prix }} {{ p_a.devise }}</td>
    </tr>
    <tr>
      <span> Total = {{ total }} € </span>
    </tr>
  </table>
</template>

<script>
import { mapWritableState } from "pinia";
import { usePanierStore } from "@/stores/panier";

export default {
  computed: {
    ...mapWritableState(usePanierStore, {
      panier_articles: "getInPanier",
      total: "getTotalPrix",
    }),
  },
};
</script>

