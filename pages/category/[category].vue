<template>
  <div class="mt-20">
    <h1 class="px-3">Catégorie Saisson 1</h1>
    <div class="text-sm breadcrumbs px-3">
      <ul>
        <li><a>Home</a></li>
        <li><a>Documents</a></li>
        <li>{{ $route.params.category }}</li>
      </ul>
    </div>
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
    imageSrc: "https://api.lorem.space/image/fashion?w=245&h=306",
  },
  {
    title: "shoes Alepha Evaxio",
    price: 50,
    imageSrc: "https://api.lorem.space/image/shoes?w=245&h=306",
  },
  {
    title: "t-shert S1 Evaxio",
    price: 44,
    imageSrc: "https://api.lorem.space/image/fashion?w=245&h=306",
  },
  {
    title: "shoes S1 Evaxio",
    price: 54,
    imageSrc: "https://api.lorem.space/image/fashion?w=245&h=306",
  },
  {
    title: "shoes S1 Evaxio",
    price: 54,
    imageSrc: "https://api.lorem.space/image/shoes?w=245&h=306",
  },
  {
    title: "shoes S1 Evaxio",
    price: 54,
    imageSrc: "https://api.lorem.space/image/fashion?w=245&h=306",
  },
  {
    title: "shoes S1 Evaxio",
    price: 54,
    imageSrc: "https://api.lorem.space/image/shoes?w=245&h=306",
  },
  {
    title: "shoes S1 Evaxio",
    price: 54,
    imageSrc: "https://api.lorem.space/image/fashion?w=245&h=306",
  },
  {
    title: "shoes S1 Evaxio",
    price: 54,
    imageSrc: "https://api.lorem.space/image/fashion?w=245&h=306",
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
    imageSrc: "https://api.lorem.space/image/fashion?w=245&h=306",
  },
];
</script>
