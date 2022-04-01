<template>
  <header>
    <div class="bg-dark fs-3 d-flex p-5 justify-content-center">
      <nav class="d-flex gap-5 justify-content-center">
        <RouterLink to="/" class="text-light text-decoration-none"
          ><span id="size" class="material-icons">
list_alt
</span></RouterLink
        >
        <RouterLink to="/panier" class="text-light text-decoration-none"
          ><span id="size" class="material-icons ">
shopping_basket
</span></RouterLink
        >
      </nav>
    </div>
  </header>

  <RouterView />
</template>


<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>


<style>
@import "@/assets/base.css";

#size {
  font-size: 60px;
}

</style>