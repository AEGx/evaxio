<template>
  <div class="mt-5 p-10 bg-neutral rounded-md">
    <div class="overflow-x-auto">
      <table class="table-zebra w-full">
        <tbody>
          <!-- row 1 -->
          <tr>
            <td class="font-bold">Adresse du magasin</td>
            <td>05 rue des vieux moulins 77400, Lagny sur marne</td>
            <td class="space-x-2 text-right">
              <NuxtLink
                to="/delivery/payement-options"
                class="btn btn-active btn-info btn-sm"
              >
                Choisir cette option
              </NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>