<template>
  <!-- liste des croquettes -->
  <div>
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <span class="btn btn-primary"
      >{{ article.prix }} {{ article.devise }}
    </span>
<!-- @ pour écouter l'evenement  -->
    <span @click="$emit('add-to-panier', article.id)">
      <button class="btn btn-secondary">
        <span class="material-icons"> add_shopping_cart </span>
      </button>
    </span>
    <span @click="$emit('remove-to-panier', article.id)">
      <button class="btn btn-danger">
        <span class="material-icons"> delete </span>
      </button>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    article: Object,
  },
};
</script>

<style scoped>
</style>
