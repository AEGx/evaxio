<template>
  <div class="hero bg-base-200 min-h-max rounded-md">
    <div class="hero-content flex-col lg:flex-row">
      <ProductGallery-product />
      <div>
        <h1 class="text-5xl font-bold">Box Office News!</h1>
        <ProductShow-rating />
        <h1 class="text-3xl font-bold">34$</h1>
        <div class="flex-row space-y-8">
          <span class="font-semibold">Pointure: </span>
          <label for="my-modal-4" class="link-hover text-sm cursor-pointer">
            Correspond à la taille indiquée.</label
          >
          <ModalsInfo-size />
        </div>
        <p class="py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illum
          facilis accusamus quae laboriosam eaque praesentium esse molestias ut?
          Animi, accusamus? Eligendi esse unde saepe perferendis ipsa cumque
          quod ut ab odit expedita veritatis reiciendis laborum numquam nobis
          molestias optio molestiae, tenetur aliquam libero iste natus? Vitae
          iure vero, similique porro voluptas natus sint beatae.
        </p>
        <div class="space-x-5">
          <select class="select select-warning min-w-md select-sm">
            <option disabled selected>Taille</option>
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
          <button class="btn btn-primary btn-sm">Acheter maintenant</button>
        </div>
      </div>
    </div>
  </div>
</template>

