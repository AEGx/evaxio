<template>
  <div>
    <h1>La Catégorie {{ $route.params.category }}</h1>
    <cards-container>
      <product-card
        :key="product.title"
        v-for="product in products"
        :title="product.title"
        :price="product.price"
        :imageSrc="product.imageSrc"
      />
    </cards-container>
  </div>
</template>

<script setup lang="ts">
const products: Array<Object> = [
  {
    title: "Hoodie Bêta Evaxio",
    price: 23,
    imageSrc: "https://api.lorem.space/image/shoes?w=245&h=306",
  },
  {
    title: "shoes Alepha Evaxio",
    price: 50,
    imageSrc: "https://api.lorem.space/image/shoes?w=245&h=306",
  },
  {
    title: "t-shert S1 Evaxio",
    price: 44,
    imageSrc: "https://api.lorem.space/image/shoes?w=245&h=306",
  },
  {
    title: "shoes S1 Evaxio",
    price: 54,
    imageSrc: "https://api.lorem.space/image/shoes?w=245&h=306",
  },
  {
    title: "shoes S1 Evaxio",
    price: 54,
    imageSrc: "https://api.lorem.space/image/shoes?w=245&h=306",
  },
  {
    title: "shoes S1 Evaxio",
    price: 54,
    imageSrc: "https://api.lorem.space/image/shoes?w=245&h=306",
  },
  {
    title: "shoes S1 Evaxio",
    price: 54,
    imageSrc: "https://api.lorem.space/image/shoes?w=245&h=306",
  },
  {
    title: "shoes S1 Evaxio",
    price: 54,
    imageSrc: "https://api.lorem.space/image/shoes?w=245&h=306",
  },
  {
    title: "shoes S1 Evaxio",
    price: 54,
    imageSrc: "https://api.lorem.space/image/shoes?w=245&h=306",
  },
  {
    title: "shoes S1 Evaxio",
    price: 54,
    imageSrc: "https://api.lorem.space/image/shoes?w=245&h=306",
  },
  {
    title: "shoes S1 Evaxio",
    price: 54,
    imageSrc: "https://api.lorem.space/image/shoes?w=245&h=306",
  },
  {
    title: "shoes S1 Evaxio",
    price: 54,
    imageSrc: "https://api.lorem.space/image/shoes?w=245&h=306",
  },
  {
    title: "shoes S1 Evaxio",
    price: 54,
    imageSrc: "https://api.lorem.space/image/shoes?w=245&h=306",
  },
];
</script>
