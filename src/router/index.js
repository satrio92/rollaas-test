import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product",
    name: "Product",
  
    component: () =>
      import("../views/Product.vue"),
  },
  {
    path: "/product/:id",
    name: "detailProduct",
  
    component: () =>
      import("../views/DetailProduct.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/seatReservation",
    name: "SeatReservation",
  
    component: () =>
      import("../views/SeatReservation.vue"),
  },
  {
    path: "/keranjang",
    name: "Keranjang",
  
    component: () =>
      import("../views/Keranjang.vue"),
  },
  {
    path: "/login",
    name: "Login",
  
    component: () =>
      import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Registration",
  
    component: () =>
      import("../views/Registration.vue"),
  },
  {
    path: "/dashboard/karyawan",
    name: "Karyawan",
  
    component: () =>
      import("../views/Karyawan.vue"),
  },
  {
    path: "/dashboard/tambahKaryawan",
    name: "tambahKaryawan",
  
    component: () =>
      import("../views/TambahKaryawan.vue"),
  },
  {
    path: "/dashboard/karyawan/:id",
    name: "editKaryawan",
  
    component: () =>
      import("../views/EditKaryawan.vue"),
  },
  {
    path: "/dashboard/tambahProduct",
    name: "tambahProduct",
  
    component: () =>
      import("../views/TambahProduct.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
