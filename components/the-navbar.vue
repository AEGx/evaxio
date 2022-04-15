<template>
  <div class="navbar bg-base-100 fixed z-40">
    <div class="flex-1 ml-64">
      <ul class="menu menu-horizontal p-0">
        <li>
          <label class="btn btn-ghost"> T-shert </label>
        </li>
        <li>
          <label class="btn btn-ghost">
            Best seller
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </label>
          <ul
            class="
              bg-base-100
              left-0
              top-[3.6rem]
              fixed
              ml-64
              rounded-none
              z-50
            "
          >
            <!-- <mega-menu /> -->
            <div class="card-body">
              <h3 class="card-title">Card title!</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                ex, ducimus repellat excepturi perspiciatis facilis repudiandae
                asperiores tempore odio? Vitae nulla facere, vol velit de saepe
                ipsa cupiditate culpa hic non a ducimus voluptatibus, ipsum
                temporibus accusantium laudantium beatae eos? ffbvw edfwyujmnb
                fvcderfv fghju76yht
              </p>
            </div>
          </ul>
        </li>
        <li>
          <label class="btn btn-ghost"> Sweat</label>
        </li>
      </ul>
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <label class="btn btn-ghost">
          <div class="indicator justify-center items-center content-center">
            <img src="~/assets/images/signe-euro.png" class="h-[1.5rem]" />
            <span> &ensp; 234 €</span>
          </div>
        </label>
        <label tabindex="0" class="btn btn-ghost btn-circle mx-3">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="badge badge-sm indicator-item">8</span>
          </div>
        </label>
        <div
          tabindex="0"
          class="
            mt-3
            card card-compact
            dropdown-content
            w-52
            bg-base-100
            shadow
          "
        >
          <div class="card-body">
            <span class="font-bold text-lg">8 Items</span>
            <span class="text-info">Subtotal: $999</span>
            <div class="card-actions">
              <button class="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791" />
          </div>
        </label>
        <ul
          tabindex="0"
          class="
            menu menu-compact
            dropdown-content
            mt-3
            p-2
            shadow
            bg-base-100
            rounded-box
            w-52
          "
        >
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>