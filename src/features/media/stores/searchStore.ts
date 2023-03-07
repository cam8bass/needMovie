import {
  DEFAULT_MOVIE_SIMILAR,
  DEFAULT_SUMMARY,
  DEFAULT_TRAILER,
  DEFAULT_WALLPAPPER,
  DEFAULT_CREDIT,
  type FilterInterface,
  type MovieSimilarInterface,
  type MovieSummaryInterface,
  type TrailerInterface,
  type WallpapperInterface,
  type CreditsInterface,
  type CrewInterface,
  type CastInterface,
  type WallpapperPostersInterface,
  type WallpapperBackdropsInterface,
  type MoviePagesInterface,
  DEFAULT_MOVIE_PAGES,
} from "@/shared/interfaces";
import { fetchDetails, fetchWallpaper } from "@/shared/services";
import { defineStore } from "pinia";
import { ref } from "vue";

interface SearchStore {
  filter: FilterInterface;
  summary: MovieSummaryInterface;
  trailer: TrailerInterface;
  wallpapper: WallpapperInterface;
  similar: MovieSimilarInterface;
  credits: CreditsInterface;
  loading: boolean;
  errors: any;
  pages: MoviePagesInterface;
}

export const useSearchStore = defineStore("searchStore", {
  state: (): SearchStore => ({
    summary: { ...DEFAULT_SUMMARY },
    trailer: { ...DEFAULT_TRAILER },
    wallpapper: { ...DEFAULT_WALLPAPPER },
    similar: { ...DEFAULT_MOVIE_SIMILAR },
    credits: { ...DEFAULT_CREDIT },
    filter: {
      search: "",
    },
    loading: false,
    errors: null,
    pages: {
      castPage: 1,
      crewPage: 1,
      backdropPage: 1,
      posterPage: 1,
    },
  }),
  getters: {
    getCast:
      (state: SearchStore) =>
      (page: number): CastInterface[] => {
        const castPerPage: number = 20;
        const startIndex = ref<number>((page - 1) * castPerPage);
        const endIndex = ref<number>(startIndex.value + castPerPage);
        const slicedcast = ref<CastInterface[]>(
          state.credits.cast.slice(startIndex.value, endIndex.value)
        );
        if (page > 1) {
          return [...state.credits.cast.slice(0, endIndex.value)];
        } else {
          return slicedcast.value;
        }
      },

    getCrew:
      (state: SearchStore) =>
      (page: number): CrewInterface[] => {
        const crewPerPage: number = 20;
        const startIndex = ref<number>((page - 1) * crewPerPage);
        const endIndex = ref<number>(startIndex.value + crewPerPage);
        const slicedcrew = ref<CrewInterface[]>(
          state.credits.crew.slice(startIndex.value, endIndex.value)
        );
        if (page > 1) {
          return [...state.credits.crew.slice(0, endIndex.value)];
        } else {
          return slicedcrew.value;
        }
      },

    getWallpapperBackdrops:
      (state) =>
      (page: number): WallpapperBackdropsInterface[] => {
        const backDropsPerPage: number = 10;
        const startIndex = ref<number>((page - 1) * backDropsPerPage);
        const endIndex = ref<number>(startIndex.value + backDropsPerPage);
        const slicedBackdrop = ref<WallpapperBackdropsInterface[]>(
          state.wallpapper.backdrops.slice(startIndex.value, endIndex.value)
        );

        if (page > 1) {
          return [...state.wallpapper.backdrops.slice(0, endIndex.value)];
        } else {
          return slicedBackdrop.value;
        }
      },

    getWallpapperPosters:
      (state) =>
      (page: number): WallpapperPostersInterface[] => {
        const postersPerPage: number = 10;
        const startIndex = ref<number>((page - 1) * postersPerPage);
        const endIndex = ref<number>(startIndex.value + postersPerPage);
        const slicedPosters = ref<WallpapperPostersInterface[]>(
          state.wallpapper.posters.slice(startIndex.value, endIndex.value)
        );

        if (page > 1) {
          return [...state.wallpapper.posters.slice(0, endIndex.value)];
        } else {
          return slicedPosters.value;
        }
      },

    getDirector(): CrewInterface[] {
      return this.credits.crew.filter((el) => el.job === "Director");
    },
  },
  actions: {
    async fetchMovieSummary(id: string) {
      this.loading = true;
      const { results, loading, error } = await fetchDetails("movie", id);
      this.loading = loading.value;
      this.errors = error.value;
      this.summary = results.value as MovieSummaryInterface;
    },

    async fetchTrailer(id: string) {
      this.loading = true;

      const { results, loading, error } = await fetchDetails(
        "movie",
        id,
        "videos"
      );
      this.loading = loading.value;
      this.errors = error.value;
      this.trailer = results.value as TrailerInterface;
    },

    async fetchWallpaper(id: string) {
      this.loading = true;

      const { results, loading, error } = await fetchWallpaper("movie", id);

      this.loading = loading.value;
      this.errors = error.value;
      this.wallpapper = results.value as WallpapperInterface;
    },

    async fetchCredits(id: string) {
      this.loading = true;

      const { results, loading, error } = await fetchDetails(
        "movie",
        id,
        "credits"
      );
      this.loading = loading.value;
      this.errors = error.value;
      this.credits = results.value as CreditsInterface;
    },

    async fetchSimilar(id: string) {
      this.loading = true;

      const { results, loading, error } = await fetchDetails(
        "movie",
        id,
        "recommendations"
      );
      this.loading = loading.value;
      this.errors = error.value;
      this.similar = results.value as MovieSimilarInterface;
    },
  },
});

export function initialFetchMovieDetails(idMovie: string): void {
  const searchStore = useSearchStore();

  searchStore.fetchMovieSummary(idMovie);
  searchStore.fetchTrailer(idMovie);
  searchStore.fetchWallpaper(idMovie);
  searchStore.fetchSimilar(idMovie);
  searchStore.fetchCredits(idMovie);

  searchStore.pages = { ...DEFAULT_MOVIE_PAGES };
}
