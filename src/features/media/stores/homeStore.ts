import {
  DEFAULT_MEDIA,
  DEFAULT_YOURSEACH,
  type MovieContentInterface,
  type SerieContentInterface,
} from "@/shared/interfaces";
import {
  fetchMovieByCategorie,
  fetchSerieByCategorie,
} from "@/shared/services";
import { defineStore } from "pinia";
import { useSearchStore } from "./searchStore";

interface HomeState {
  cinema: MovieContentInterface;
  movie: {
    popular: MovieContentInterface;
  };
  serie: {
    popular: SerieContentInterface;
  };

  loading: boolean;
  errors: any;
  needRefresh: boolean;
}

export const useHomeStore = defineStore("homeStore", {
  state: (): HomeState => ({
    cinema: { ...DEFAULT_MEDIA },
    movie: {
      popular: { ...DEFAULT_MEDIA },
    },
    serie: {
      popular: { ...DEFAULT_MEDIA },
    },

    errors: null,
    loading: false,
    needRefresh: false,
  }),
  getters: {},
  actions: {
    async fetchAllMoviesCinema() {
      const { results, loading, error } = await fetchMovieByCategorie(
        "now_playing"
      );
      this.errors = error.value;
      this.loading = loading.value;
      this.cinema = results.value as MovieContentInterface;
    },
    async fetchPopularMovies() {
      const { results, loading, error } = await fetchMovieByCategorie(
        "popular"
      );
      this.errors = error.value;
      this.loading = loading.value;
      this.movie.popular = results.value as MovieContentInterface;
    },
    async fetchPopularSeries() {
      const { results, loading, error } = await fetchSerieByCategorie(
        "popular"
      );
      this.errors = error.value;
      this.loading = loading.value;
      this.serie.popular = results.value as SerieContentInterface;
    },
  },
});

export function initialFetchPageHome(): void {
  const homeStore = useHomeStore();
  const searchStore = useSearchStore();
  //Permet d'appeler l'ensemble des films actuellement au cinéma
  homeStore.fetchAllMoviesCinema();
  // Permet d'appeler l'ensemble des films populaire
  homeStore.fetchPopularMovies();
  // Permet d'appeler l'ensemble des series populaire
  homeStore.fetchPopularSeries();
  // Permet de remettre à zero les recherches
  searchStore.yourSearch = { ...DEFAULT_YOURSEACH };
}
