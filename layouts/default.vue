<template>
  <the-navbar />
  <div class="flex h-full">
    <!-- START: SIDEBAR -->
    <the-sidebar />
    <!--  END : SIDEBAR -->

    <!-- START: PAGE -->
    <div class="w-full ml-64 top-40">
      <slot />
    </div>
    <!-- END: PAGE -->
  </div>

  <!-- START: FOOTER -->
  <div class="ml-64">
    <NuxtLayout name="info-secure-payement" />
    <the-footer />
  </div>
  <!-- END: FOOTER -->
</template>
