import { DEFAULT_MEDIA, type SerieContentInterface } from "@/shared/interfaces";
import {
  DEFAULT_SERIE_PAGES,
  type SeriePageInterface,
} from "@/shared/interfaces/searchSerieInterfaces/seriePages.interface";
import { fetchMedia } from "@/shared/services";
import { defineStore } from "pinia";

interface SerieStore {
  popular: SerieContentInterface;
  topRated: SerieContentInterface;
  currentlyAiring: SerieContentInterface;
  loading: boolean;
  errors: any;
  needRefresh: boolean;
  pages: SeriePageInterface;
}

export const useSerieStore = defineStore("serieStore", {
  state: (): SerieStore => ({
    popular: { ...DEFAULT_MEDIA },
    topRated: { ...DEFAULT_MEDIA },
    currentlyAiring: { ...DEFAULT_MEDIA },
    loading: false,
    errors: null,
    needRefresh: false,
    pages: { ...DEFAULT_SERIE_PAGES },
  }),
  getters: {},
  actions: {
    async fetchPopularSerie(page?: number) {
      this.loading = true;
      if (page) {
        const { results, loading, error } = await fetchMedia(
          "tv",
          "popular",
          "",
          page
        );
        this.loading = loading.value;
        this.errors = error.value;
        this.popular.results = [
          ...this.popular.results,
          ...(results.value as SerieContentInterface).results,
        ];
        this.popular.page++;
      } else {
        const { results, loading, error } = await fetchMedia("tv", "popular");
        this.loading = loading.value;
        this.errors = error.value;
        this.popular = results.value as SerieContentInterface;
      }
    },
    async fetchTopRatedSerie(page?: number) {
      this.loading = true;
      if (page) {
        const { results, loading, error } = await fetchMedia(
          "tv",
          "top_rated",
          "",
          page
        );
        this.loading = loading.value;
        this.errors = error.value;
        this.topRated.results = [
          ...this.topRated.results,
          ...(results.value as SerieContentInterface).results,
        ];
        this.topRated.page++;
      } else {
        if (this.topRated.results.length === 0) {
          this.needRefresh = true;
        }
        if (this.needRefresh) {
          const { results, loading, error } = await fetchMedia(
            "tv",
            "top_rated"
          );
          this.loading = loading.value;
          this.errors = error.value;
          this.topRated = results.value as SerieContentInterface;
          this.needRefresh = false;
        } else {
          this.loading = false;
        }
      }
    },
    async fetchCurrentlyAiringSerie(page?: number) {
      this.loading = true;
      if (page) {
        const { results, loading, error } = await fetchMedia(
          "tv",
          "on_the_air",
          "",
          page
        );
        this.loading = loading.value;
        this.errors = error.value;
        this.currentlyAiring.results = [
          ...this.currentlyAiring.results,
          ...(results.value as SerieContentInterface).results,
        ];
        this.currentlyAiring.page++;
      } else {
        if (this.currentlyAiring.results.length === 0) {
          this.needRefresh = true;
        }

        if (this.needRefresh) {
          const { results, loading, error } = await fetchMedia(
            "tv",
            "on_the_air"
          );
          this.loading = loading.value;
          this.errors = error.value;
          this.currentlyAiring = results.value as SerieContentInterface;
          this.needRefresh = false;
        } else {
          this.loading = false;
        }
      }
    },
  },
});

export function initialFetchPageSerie() {
  const serieStore = useSerieStore();
  serieStore.needRefresh = true;
  if (serieStore.needRefresh) {
    serieStore.fetchPopularSerie();
    serieStore.needRefresh = false;
  }
}
