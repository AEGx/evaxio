<template>
  <CartTable-cart-container>
    <!-- head -->
    <thead>
      <tr>
        <th>produit</th>
        <th>Qantité</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img
                  src="https://api.lorem.space/image/face?w=150&h=150"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div class="font-bold">Sweat Evaxio bêta b1</div>
              <div class="text-sm opacity-50">
                <span class="text-[#3ced7d]"> En stock</span>
                <span class="text-[#3ced7d]"> | </span>
                <span class="text-[#ffffff]"> Vendu Par </span>
                <span class="text-info font-bold cursor-pointer"> Evaxio</span>
              </div>
            </div>
          </div>
        </td>
        <td>
          3 Pièces
          <br />
          <span class="badge badge-ghost badge-sm">30% d'économie</span>
        </td>
        <td>159 $</td>
        <th>
          <button
            class="btn btn-ghost hover:bg-[#da3c3c] hover:text-[#ffffff] btn-xs"
          >
            Delete
          </button>
        </th>
      </tr>
    </tbody>

    <tfoot>
      <tr>
        <td colspan="2" class="text-lg">TOTALE</td>
        <th class="text-lg">159 $</th>
        <th>
          <button class="btn btn-info btn-xs">Choisir ma livraison</button>
        </th>
      </tr>
    </tfoot>
  </CartTable-cart-container>
</template>