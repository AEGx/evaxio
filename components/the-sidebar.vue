<script setup lang="ts">
const sideMenusItems: Object = [
  { path: "/", title: "home" },
  { path: "/category/log", title: "log" },
  { path: "/category/wear", title: "wear" },
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
        :key="sideMenusItem"
        v-for="sideMenusItem in sideMenusItems"
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