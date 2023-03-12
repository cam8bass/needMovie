import { initialFetchPageActor } from "@/features/media/stores/actorDetailStore";
import { initialFetchPageHome } from "@/features/media/stores/homeStore";
import { inititalFetchPageMovie } from "@/features/media/stores/movieStore";
import { initialFetchMovieDetails } from "@/features/media/stores/movieDetailStore";

import { createRouter, createWebHistory } from "vue-router";
import { initialFetchPageSerie } from "@/features/media/stores/serieStore";
import { initialFetchSerieDetails } from "@/features/media/stores/SerieDetailStore";

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
      path: "/actor/:id",
      component: () =>
        import("@/features/media/components/actors/TheActors.vue"),
      beforeEnter: (to) => {
        const idActor = to.params.id as string;
        initialFetchPageActor(idActor);
      },
    },

    {
      path: "/movie",
      component: () => import("@/features/media/components/movie/TheMovie.vue"),
      beforeEnter: [inititalFetchPageMovie],
    },
    {
      path: "/movie/:id",
      component: () =>
        import(
          "@/features/media/components/movie/components/movieDetails/MovieDetails.vue"
        ),

      beforeEnter: (to) => {
        const id = to.params.id as string;
        initialFetchMovieDetails(id);
      },
    },

    {
      path: "/serie",
      component: () => import("@/features/media/components/serie/TheSerie.vue"),
      beforeEnter: [initialFetchPageSerie],
    },
    {
      path: "/serie/:id",
      component: () =>
        import(
          "@/features/media/components/serie/components/serieDetails/SeriesDetails.vue"
        ),
      beforeEnter: (to) => {
        const id = to.params.id as string;
        initialFetchSerieDetails(id);
      },
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
  // scrollBehavior: () => {
  //   return {
  //     top: 0,
  //   };
  // },
});
