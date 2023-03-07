import {
  DEFAULT_MEDIA,
  type MovieContentInterface,
  type SerieContentInterface,
} from "@/shared/interfaces";
import { fetchMedia } from "@/shared/services";
import { defineStore } from "pinia";

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
      const { results, loading, error } = await fetchMedia(
        "movie",
        "now_playing"
      );
      this.errors = error.value;
      this.loading = loading.value;
      this.cinema = results.value as MovieContentInterface;
    },
    async fetchPopularMovies() {
      const { results, loading, error } = await fetchMedia("movie", "popular");
      this.errors = error.value;
      this.loading = loading.value;
      this.movie.popular = results.value as MovieContentInterface;
    },
    async fetchPopularSeries() {
     
      const { results, loading, error } = await fetchMedia("tv", "popular");
      this.errors = error.value;
      this.loading = loading.value;
      this.serie.popular = results.value as SerieContentInterface;
    },
  },
});

export function initialFetchPageHome(): void {
  const homeStore = useHomeStore();

  //Permet d'appeler l'ensemble des films actuellement au cinéma
  homeStore.fetchAllMoviesCinema();
  // Permet d'appeler l'ensemble des films populaire
  homeStore.fetchPopularMovies();
  // Permet d'appeler l'ensemble des series populaire
  homeStore.fetchPopularSeries();
}
