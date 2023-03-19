import {
  DEFAULT_MEDIA,
  DEFAULT_MOVIE_PAGES,
  type MovieContentInterface,
  type MoviePageInterface,
} from "@/shared/interfaces";
import { fetchMovieByCategorie } from "@/shared/services/Movie.service";
import { defineStore } from "pinia";

interface MovieStore {
  popular: MovieContentInterface;
  topRated: MovieContentInterface;
  UpComing: MovieContentInterface;
  loading: boolean;
  errors: any;
  needRefresh: boolean;
  pages: MoviePageInterface;
}

export const useMovieStore = defineStore("movieStore", {
  state: (): MovieStore => ({
    popular: { ...DEFAULT_MEDIA },
    topRated: { ...DEFAULT_MEDIA },
    UpComing: { ...DEFAULT_MEDIA },
    loading: true,
    errors: null,
    needRefresh: true,
    pages: { ...DEFAULT_MOVIE_PAGES },
  }),
  getters: {},
  actions: {
    async fetchPopularMovie(page?: number) {
      this.loading = true;
     
      if (page) {
        const { results, loading, error } = await fetchMovieByCategorie(
          "popular",
          page
        );
        this.loading = loading.value;
        this.errors = error.value;
        this.popular.results = [
          ...this.popular.results,
          ...(results.value as MovieContentInterface).results,
        ];
        this.popular.page++;
      } else {
        const { results, loading, error } = await fetchMovieByCategorie(
          "popular"
        );

        this.loading = loading.value;
        this.errors = error.value;
        this.popular = results.value as MovieContentInterface;
      }
    },
    async fetchTopRatedMovie(page?: number) {
      this.loading = true;
      if (page) {
        const { results, loading, error } = await fetchMovieByCategorie(
          "top_rated",
          page
        );
        this.loading = loading.value;
        this.errors = error.value;
        this.topRated.results = [
          ...this.topRated.results,
          ...(results.value as MovieContentInterface).results,
        ];
        this.topRated.page++;
      } else {
        if (this.topRated.results.length === 0) {
          this.needRefresh = true;
        }
        if (this.needRefresh) {
          const { results, loading, error } = await fetchMovieByCategorie(
            "top_rated"
          );
          this.loading = loading.value;
          this.topRated = results.value as MovieContentInterface;
          this.errors = error.value;
          this.needRefresh = false;
        } else {
          this.loading = false;
        }
      }
    },
    async fetchUpComingMovie(page?: number) {
      this.loading = true;
      if (page) {
        const { results, loading, error } = await fetchMovieByCategorie(
          "upcoming",
          page
        );
        this.loading = loading.value;
        this.errors = error.value;
        this.UpComing.results = [
          ...this.UpComing.results,
          ...(results.value as MovieContentInterface).results,
        ];
        this.UpComing.page++;
      } else {
        if (this.UpComing.results.length === 0) {
          this.needRefresh = true;
        }
        if (this.needRefresh) {
          const { results, loading, error } = await fetchMovieByCategorie(
            "upcoming"
          );
          this.loading = loading.value;
          this.errors = error.value;
          this.UpComing = results.value as MovieContentInterface;
          this.needRefresh = false;
        } else {
          this.loading = false;
        }
      }
    },
  },
});

export function inititalFetchPageMovie(): void {
  const movieStore = useMovieStore();
  movieStore.needRefresh = true;
  if (movieStore.needRefresh) {
    movieStore.fetchPopularMovie();
    movieStore.needRefresh = false;
  }
}
