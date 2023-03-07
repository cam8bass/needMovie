import { initialFetchPageHome } from "@/features/media/stores/homeStore";
import { inititalFetchPageMovie } from "@/features/media/stores/movieStore";
import { initialFetchMovieDetails } from "@/features/media/stores/searchStore";
import { callWithAsyncErrorHandling } from "vue";

import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      redirect: "/home",
    },
    {
      path: "/home",
      component: () => import("@/features/media/components/home/TheHome.vue"),
      beforeEnter: [initialFetchPageHome],
    },

    {
      path: "/movie",
      component: () => import("@/features/media/components/movie/TheMovie.vue"),
      beforeEnter: [inititalFetchPageMovie],
    },
    {
      path: "/movie/:id",
      component: () =>
        import("@/features/media/components/movie/MovieDetails.vue"),

      beforeEnter: (to) => {
        const id = to.params.id as string;
        initialFetchMovieDetails(id);
      },
    },

    {
      path: "/serie",
      component: () => import("@/features/media/components/serie/TheSerie.vue"),
    },
    {
      path: "/serie/:id",
      component: () =>
        import("@/features/media/components/serie/SeriesDetails.vue"),
    },

    {
      path: "/actor",
      component: () =>
        import("@/features/media/components/actors/TheActors.vue"),
    },
    {
      path: "/login",
      component: () => import("@/features/account/TheLogin.vue"),
    },
    {
      path: "/:notFound(.*)*",
      component: () => import("@/views/NotFound.vue"),
    },
  ],
  scrollBehavior: () => {
    return {
      top: 0,
      
    };
  },
});
