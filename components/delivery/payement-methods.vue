<template>
  <div class="p-10 bg-neutral rounded-md">
    <div class="overflow-x-auto">
      <table class="w-full">
        <tbody class="space-y-28">
          <!-- row 1 -->
          <tr class="place-content-end">
            <td class="flex-row">
              <img :src="`../assets/images/${imgName}`" class="h-6" />
              {{ method }}
            </td>
            <td class="content-center space-x-2 p-3 text-right">
              <button class="btn btn-active btn-sm btn-info">
                {{ btnLabel }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
const props: any = defineProps({
  method: {
    type: String,
    required: true,
  },
  btnLabel: {
    type: String,
    required: true,
  },
  imgName: {
    type: String,
    required: true,
  },
});
</script>
