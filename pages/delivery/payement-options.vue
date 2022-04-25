<template>
  <div class="px-6 mt-24 mb-5">
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-2 space-y-5">
        <DeliveryPayement-methods
          method="Paiement par le crédits disponible sur mon compte evaxio."
          btnLabel="Choisir"
        />
        <DeliveryPayement-methods
          method="J'en ai plus de crédit, je souhite recharger mon compte."
          btnLabel="Choisir"
        />
        <DeliveryPayement-methods
          method="J'en ai plus de crédit, je souhite recharger mon compte."
          btnLabel="Choisir"
        />
      </div>
      <div class="bg-neutral p-5 rounded-md">
        <div>
          <h1 class="text-lg">Récapitulatif</h1>
          <div class="overflow-x-auto">
            <table class="w-full">
              <tbody>
                <!-- row 1 -->
                <tr>
                  <td>Evaxio s1 toro s</td>
                  <td>234E</td>
                </tr>
                <tr>
                  <td class="font-bold text-lg">TOTALE</td>
                  <td class="font-bold text-lg">234E</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>