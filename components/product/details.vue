<template>
  <div class="hero bg-base-200 min-h-max rounded-md">
    <div class="hero-content flex-col lg:flex-row">
      <ProductGallery-product />
      <div class="space-y-2">
        <h1 class="text-4xl font-bold">Box Office News!</h1>
        <ProductShow-rating />
        <h1 class="text-3xl font-bold">34$</h1>
        <div class="flex-row">
          <span class="font-semibold mt-10">Pointure: </span>
          <label for="my-modal-5" class="link-hover text-sm cursor-pointer">
            Correspond à la taille indiquée.</label
          >
          <ModalsInfo-size />
        </div>
        <div class="flex-row">
          <span class="font-semibold mt-10">Livraison: </span>
          <label for="my-modal-4" class="link-hover text-sm cursor-pointer">
            Info sur la livraison.</label
          >
          <ModalsInfo-delivery />
        </div>
        <p class="py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illum
          facilis accusamus quae laboriosam eaque praesentium esse molestias ut?
          Animi, accusamus? Eligendi esse unde saepe perferendis ipsa cumque
          quod ut ab odit expedita veritatis reiciendis laborum numquam nobis
          molestias optio molestiae, tenetur aliquam libero iste natus? Vitae
          iure vero, similique porro voluptas natus sint beatae.
        </p>
        <div class="space-x-8">
          <select class="select select-warning min-w-md select-sm">
            <option disabled selected>Tailles</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
          <select class="select select-warning min-w-md select-sm">
            <option disabled selected>Couleurs</option>
            <option>red</option>
            <option>green</option>
            <option>white</option>
            <option>black</option>
            <option>orange</option>
          </select>
          <select class="select select-warning min-w-md select-sm">
            <option disabled selected>Quantité</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <br />
        <div class="space-x-2">
          <button class="btn btn-warning btn-sm">Ajouter au panier</button>
          <button class="btn btn-outline btn-sm">Acheter maintenant</button>
        </div>
      </div>
    </div>
  </div>
</template>

