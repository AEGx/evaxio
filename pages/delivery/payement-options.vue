<template>
  <div class="px-6 mt-24 mb-24">
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-2 space-y-5">
        <DeliveryPayement-methods
          method="Paiement par le crédits disponible sur mon compte evaxio"
          btnLabel="Choisir"
          imgName="signe-euro.png"
        />
        <DeliveryPayement-methods
          method="Paiement par carte visa ou mastercard"
          btnLabel="Choisir"
          imgName="visa_mastercard.webp"
        />
        <DeliveryPayement-methods
          method="Paiement via le service Paypal"
          btnLabel="Choisir"
          imgName="paypal.webp"
        />
      </div>
      <div class="space-y-5">
        <div class="p-5 rounded-md bg-neutral space-y-5">
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
        <DeliveryDiscount-coupon />
      </div>
    </div>
  </div>
</template>