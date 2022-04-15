<template>
  <div
    class="card bg-base-100 cursor-pointer rounded-[3px] w-[13rem] mb-5 ml-3"
    @mouseover="isHovering = true"
    @mouseout="isHovering = false"
  >
    <figure class="overflow-hidden">
      <img
        :class="isHovering && 'scale-110'"
        class="duration-700 transition-transform h-[16rem] w-[14.4rem]"
        :src="imageSrc"
        :alt="title"
      />
      <span
        :class="isHovering ? 'w-full' : 'w-0'"
        class="absolute bottom-[6.10rem] h-[2.5px] bg-white duration-500"
      />
    </figure>
    <div class="py-4 w-[13rem]">
      <p class="font-medium pb-4">
        <span class="left-0 font-bold font-sans">
          {{ title }}
        </span>
      </p>
      <div class="flex justify-between items-center content-center">
        <div>
          <h2 class="card-title">{{ price }}$</h2>
        </div>
        <div class="items-end content-end justify-self-end">
          <p class="t text-sm text-[orange]">4 En stock</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let isHovering = ref(false);

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
});
</script>

<style>
</style>
