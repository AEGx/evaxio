<template>
  <div class="mt-5 p-10 bg-neutral rounded-md">
    <div class="overflow-x-auto">
      <table class="w-full">
        <tbody>
          <!-- row 1 -->
          <tr>
            <td class="font-bold">Votre adresse</td>
            <td>05 rue des vieux moulins 77400, Lagny sur marne</td>
            <td class="content-center space-x-2">
              <button class="btn btn-active btn-sm btn-ghost">
                Changer mon adresse
              </button>
              <div
                class="tooltip tooltip-left"
                data-tip="La livraison se fait grâce à notre partenaire DHL."
              >
                <button class="btn btn-active btn-sm btn-info">
                  Choisir cette option
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>