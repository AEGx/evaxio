<template>
  <div
    class="hero min-h-[35rem]"
    style="
      background-image: url(https://api.lorem.space/image/fashion?w=1000&h=800);
    "
  >
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <slot />
      </div>
    </div>
  </div>
</template>