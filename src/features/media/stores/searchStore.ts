import type {
  FilterInterface,
  yourSeachResultActorInterface,
  yourSeachResultMovieInterface,
  yourSeachResultSerieInterface,
  yourSearchInterface,
} from "@/shared/interfaces";
import { DEFAULT_YOURSEACH } from "@/shared/interfaces";
import { fetchSearchBar } from "@/shared/services";
import { defineStore } from "pinia";

interface SearchStore {
  filter: FilterInterface;
  yourSearch: yourSearchInterface;
  loading: boolean;
  errors: any;
}

export const useSearchStore = defineStore("searchStore", {
  state: (): SearchStore => ({
    filter: { search: "" },
    yourSearch: { ...DEFAULT_YOURSEACH },
    loading: false,
    errors: null,
  }),

  getters: {
    getMovieResults(): yourSeachResultMovieInterface[] {
      return (
        this.yourSearch.results as yourSeachResultMovieInterface[]
      ).filter((movie) => movie.media_type === "movie");
    },

    getSerieResult(): yourSeachResultSerieInterface[] {
      return (
        this.yourSearch.results as yourSeachResultSerieInterface[]
      ).filter((movie) => movie.media_type === "tv");
    },

    getActorResult(): yourSeachResultActorInterface[] {
      return (
        this.yourSearch.results as yourSeachResultActorInterface[]
      ).filter((movie) => movie.media_type === "person");
    },
  },
  actions: {
    async fetchSearch() {
      if (this.filter.search) {
        const { results, loading, error } = await fetchSearchBar(
          this.filter.search.toLowerCase()
        );
        this.loading = loading.value;
        this.errors = error.value;
        this.yourSearch = results.value as yourSearchInterface;
      } else {
        this.yourSearch = { ...DEFAULT_YOURSEACH };
      }
    },
  },
});
