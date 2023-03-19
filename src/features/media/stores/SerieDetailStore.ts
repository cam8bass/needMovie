import {
  DEFAULT_CREDITS_SERIE,
  DEFAULT_DETAILS_PAGES,
  DEFAULT_SERIE_SUMMARY,
  DEFAULT_TRAILER,
  DEFAULT_WALLPAPPER,
  DEFAULT_SERIE_SIMILAR,
  type SerieCastInterface,
  type SerieCrewInterface,
  type DetailsPagesInterface,
  type SerieCreditsInterface,
  type SerieSummaryInterface,
  type TrailerInterface,
  type WallpapperInterface,
  type WallpapperBackdropsInterface,
  type WallpapperPostersInterface,
  type SerieSimilarInterface,
  type SerieSeasonInterface,
} from "@/shared/interfaces";

import {
  fetchSerieDetails,
  fetchSerieSeason,
  fetchTrailer,
  fetchWallpaper,
} from "@/shared/services";
import { defineStore } from "pinia";
import { ref } from "vue";

interface SerieDetailStore {
  summary: SerieSummaryInterface;
  seasons: SerieSeasonInterface[] | [];
  credits: SerieCreditsInterface;
  trailer: TrailerInterface;
  wallpapper: WallpapperInterface;
  similar: SerieSimilarInterface;
  loading: boolean;
  errors: any;
  pages: DetailsPagesInterface;
  needRefresh: boolean;
}
export const useSerieDetailStore = defineStore("serieDetailStore", {
  state: (): SerieDetailStore => ({
    summary: { ...DEFAULT_SERIE_SUMMARY },
    seasons: [],
    credits: { ...DEFAULT_CREDITS_SERIE },
    pages: { ...DEFAULT_DETAILS_PAGES },
    trailer: { ...DEFAULT_TRAILER },
    wallpapper: { ...DEFAULT_WALLPAPPER },
    similar: { ...DEFAULT_SERIE_SIMILAR },
    loading: false,
    errors: null,
    needRefresh: false,
  }),
  getters: {
    getDirector(): SerieCrewInterface[] {
      return this.credits.crew.filter(
        (crew) => crew.jobs[0].job === "Executive Producer"
      );
    },
    getCast:
      (state: SerieDetailStore) =>
      (page: number): SerieCastInterface[] => {
        const castPerPage: number = 20;
        const startIndex = ref<number>((page - 1) * castPerPage);
        const endIndex = ref<number>(startIndex.value + castPerPage);
        const slicedcast = ref<SerieCastInterface[]>(
          state.credits.cast.slice(startIndex.value, endIndex.value)
        );
        if (page > 1) {
          return [...state.credits.cast.slice(0, endIndex.value)];
        } else {
          return slicedcast.value;
        }
      },

    getCrew:
      (state: SerieDetailStore) =>
      (page: number): SerieCrewInterface[] => {
        const crewPerPage: number = 20;
        const startIndex = ref<number>((page - 1) * crewPerPage);
        const endIndex = ref<number>(startIndex.value + crewPerPage);
        const slicedcrew = ref<SerieCrewInterface[]>(
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

    getLastSeason() {
      const lastSeason = this.seasons.find(
        (el) => el.season_number === this.summary.number_of_seasons
      ) as SerieSeasonInterface;

      return lastSeason;
    },
  },
  actions: {
    async fetchSerieSummary(id: string) {
      this.loading = true;
      const { results, loading, error } = await fetchSerieDetails(id);
      this.loading = loading.value;
      this.errors = error.value;
      this.summary = results.value as SerieSummaryInterface;
    },

    async fetchLastSerieSeason(id: string, seasonNumber?: number) {
      if (!this.seasons.find((el) => el.season_number == seasonNumber)) {
        this.needRefresh = true;
      }

      if (this.needRefresh) {
        const { results, loading, error } = await fetchSerieSeason(
          id,
          seasonNumber
        );
        this.loading = loading.value;
        this.errors = error.value;

        if (Array.isArray(this.seasons)) {
          const oldSeason = this.seasons.filter(
            (el) => el.id !== (results.value as SerieSeasonInterface).id
          );

          this.seasons = [
            ...oldSeason,
            results.value,
          ] as SerieSeasonInterface[];
          this.needRefresh = false;
        } else {
          this.seasons = [results.value] as SerieSeasonInterface[];
          this.needRefresh = false;
        }
      }
    },

    async fetchSerieSeason(id: string, seasonNumber?: number) {
      if (!this.seasons.find((el) => el.season_number == seasonNumber)) {
        this.needRefresh = true;
      }
      if (this.needRefresh) {
        const { results, loading, error } = await fetchSerieSeason(
          id,
          seasonNumber
        );
        this.loading = loading.value;
        this.errors = error.value;

        if (Array.isArray(this.seasons)) {
          const oldSeason = this.seasons.filter(
            (el) => el.id !== (results.value as SerieSeasonInterface).id
          );

          this.seasons = [
            ...oldSeason,
            results.value,
          ] as SerieSeasonInterface[];
          this.needRefresh = false;
        } else {
          this.seasons = [results.value] as SerieSeasonInterface[];
          this.needRefresh = false;
        }
      }
    },

    async fetchSerieCredits(id: string) {
      this.loading = true;
      const { results, loading, error } = await fetchSerieDetails(
        id,
        "aggregate_credits"
      );
      this.loading = loading.value;
      this.errors = error.value;
      this.credits = results.value as SerieCreditsInterface;
    },

    async fetchSerieTrailer(id: string) {
      this.loading = true;

      const { results, loading, error } = await fetchTrailer(id, "tv");
      this.loading = loading.value;
      this.errors = error.value;
      this.trailer = results.value as TrailerInterface;
    },

    async fetchSerieWallpaper(id: string) {
      this.loading = true;

      const { results, loading, error } = await fetchWallpaper(id, "tv");

      this.loading = loading.value;
      this.errors = error.value;
      this.wallpapper = results.value as WallpapperInterface;
    },

    async fetchSerieSimilar(id: string) {
      this.loading = true;

      const { results, loading, error } = await fetchSerieDetails(
        id,
        "recommendations"
      );
      this.loading = loading.value;
      this.errors = error.value;
      this.similar = results.value as SerieSimilarInterface;
    },
  },
});

export function initialFetchSerieDetails(idSerie: string): void {
  const serieDetailStore = useSerieDetailStore();
  serieDetailStore.fetchSerieSummary(idSerie);
  serieDetailStore.fetchSerieCredits(idSerie);
  serieDetailStore.fetchSerieTrailer(idSerie);
  serieDetailStore.fetchSerieWallpaper(idSerie);
  serieDetailStore.fetchSerieSimilar(idSerie);

  serieDetailStore.pages = { ...DEFAULT_DETAILS_PAGES };
  serieDetailStore.seasons = [];
}
