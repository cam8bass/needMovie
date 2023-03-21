import {
  DEFAULT_HOME_PAGES,
  DEFAULT_MEDIA,
  DEFAULT_YOURSEACH,
  type HomePagesInterface,
  type HomeResultsCinemaInterface,
  type MovieContentInterface,
  type MovieResultsInterface,
  type SerieContentInterface,
  type SerieResultsInterface,
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
  pages: HomePagesInterface;

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
    pages: { ...DEFAULT_HOME_PAGES },
    errors: null,
    loading: false,
    needRefresh: false,
  }),
  getters: {
    getCinema(): HomeResultsCinemaInterface[] {
      return this.cinema.results;
    },
    getMovie(): MovieResultsInterface[] {
      return this.movie.popular.results;
    },
    getSerie(): SerieResultsInterface[] {
      return this.serie.popular.results;
    },
  },
  actions: {
    async fetchAllMoviesCinema(page?: number) {
      this.loading = true;
      if (page) {
        const { results, loading, error } = await fetchMovieByCategorie(
          "now_playing",
          page
        );
        this.errors = error.value;
        this.loading = loading.value;
        this.cinema.results = [
          ...this.cinema.results,
          ...(results.value as MovieContentInterface).results,
        ];

        this.cinema.page++;
      } else {
        if (this.cinema.results.length === 0) {
          this.needRefresh = true;
        }

        if (this.needRefresh) {
          this.needRefresh = true;
        }
        if (this.needRefresh) {
          const { results, loading, error } = await fetchMovieByCategorie(
            "now_playing"
          );
          this.errors = error.value;
          this.loading = loading.value;
          this.cinema = results.value as MovieContentInterface;
          this.needRefresh = false;
        } else {
          this.loading = false;
        }
      }
    },
    async fetchPopularMovies(page?: number) {
      this.loading = true;
      if (page) {
        const { results, loading, error } = await fetchMovieByCategorie(
          "popular",
          page
        );
        this.errors = error.value;
        this.loading = loading.value;
        this.movie.popular.results = [
          ...this.movie.popular.results,
          ...(results.value as MovieContentInterface).results,
        ];

        this.movie.popular.page++;
      } else {
        if (this.movie.popular.results.length === 0) {
          this.needRefresh = true;
        }
        if (this.needRefresh) {
          const { results, loading, error } = await fetchMovieByCategorie(
            "popular"
          );
          this.errors = error.value;
          this.loading = loading.value;
          this.movie.popular = results.value as MovieContentInterface;
          this.needRefresh = false;
        } else {
          this.loading = false;
        }
      }
    },
    async fetchPopularSeries(page?: number) {
      this.loading = true;
      if (page) {
        const { results, loading, error } = await fetchSerieByCategorie(
          "popular",
          page
        );
        this.errors = error.value;
        this.loading = loading.value;
        this.serie.popular.results = [
          ...this.serie.popular.results,
          ...(results.value as SerieContentInterface).results,
        ];
        this.serie.popular.page++;
      } else {
        if (this.serie.popular.results.length === 0) {
          this.needRefresh = true;
        }

        if (this.needRefresh) {
          const { results, loading, error } = await fetchSerieByCategorie(
            "popular"
          );
          this.errors = error.value;
          this.loading = loading.value;
          this.serie.popular = results.value as SerieContentInterface;
        } else {
          this.loading = false;
        }
      }
    },
  },
});

export function initialFetchPageHome(): void {
  const homeStore = useHomeStore();
  const searchStore = useSearchStore();
  homeStore.needRefresh = true;

  if (homeStore.needRefresh) {
    //Permet d'appeler l'ensemble des films actuellement au cinéma
    homeStore.fetchAllMoviesCinema();
    // Permet d'appeler l'ensemble des films populaire
    homeStore.fetchPopularMovies();
    // Permet d'appeler l'ensemble des series populaire
    homeStore.fetchPopularSeries();
    // Permet de remettre à zero les recherches
    searchStore.yourSearch = { ...DEFAULT_YOURSEACH };
    homeStore.needRefresh = false;
  }
}
