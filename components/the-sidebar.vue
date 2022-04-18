<script setup lang="ts">
const sideMenusItems: Object = [
  { id: 1, path: "/", title: "home" },
  { id: 2, path: "/category/sweat", title: "Sweat" },
  { id: 3, path: "/category/tshert", title: "T-shert" },
  { id: 4, path: "/jobs", title: "Jobs" },
];
</script>
<template>
  <div
    class="
      fixed
      top-0
      bottom-0
      left-0
      w-64
      py-5
      bg-primary
      text-primary-content
      z-50
    "
  >
    <h1 class="flex items-center justify-between px-4 text-2xl font-bold">
      Evaxio Shop
    </h1>

    <ul class="menu w-full mt-10 px-0">
      <li
        v-for="sideMenusItem in sideMenusItems"
        :key="sideMenusItem.id"
        :class="
          sideMenusItem.path === $route.path ? 'bordered' : 'hover-bordered'
        "
      >
        <NuxtLink :to="sideMenusItem.path">
          {{ sideMenusItem.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.menu li.hover-bordered a:hover,
.menu li.bordered a {
  @apply border-primary-content;
}
</style>