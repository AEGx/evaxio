<template>
  <div 
    class="card w-64 bg-base-100 cursor-pointer"
    @mouseover="isHovering = true"
    @mouseout="isHovering = false"
  >
  <figure class="overflow-hidden">
    <img :class="isHovering && 'scale-110'" class="duration-500 transition-transform" :src="imageSrc" alt="Shoes" />
  </figure>
  <div class="card-body">
    <p class="font-medium">
      <span class="relative">
        {{ title }}
      <span :class="isHovering ? 'w-full' : 'w-0'" class="absolute bottom-0 left-0 h-[1.5px] bg-primary duration-500"></span>
      </span>
      </p>
    <h2 class="card-title">
      {{ price }}$
    </h2>
  </div>
</div>
</template>

<script setup lang="ts">
  let isHovering = ref(false)

  const props = defineProps({
    title: {
      type: String,
      required: true

    },
    price: {
      type: Number,
      required: true

    },
    imageSrc: {
      type: String,
      required: true

    },
  })
</script>

<style>

</style>