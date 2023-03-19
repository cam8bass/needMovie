import {
  DEFAULT_ACTOR_PAGES,
  type ActorCreditCrewInterface,
  type ActorCreditsCastInterface,
  type ActorCreditsInterface,
  type ActorDetailsInterface,
  type ActorImagesInterface,
  type ActorPagesInterface,
} from "@/shared/interfaces";
import { fetchActorInformation } from "@/shared/services";
import { defineStore } from "pinia";
import { ref } from "vue";

interface ActorDetailStore {
  details: ActorDetailsInterface | null;
  credits: ActorCreditsInterface | null;
  images: ActorImagesInterface | null;
  pages: ActorPagesInterface;
  loading: boolean;
  errors: any;
}

export const useActorDetailStore = defineStore("actorDetailStore", {
  state: (): ActorDetailStore => ({
    details: null,
    credits: null,
    images: null,
    pages: { ...DEFAULT_ACTOR_PAGES },
    loading: false,
    errors: null,
  }),
  getters: {
    getActorCast:
      (state: ActorDetailStore) =>
      (page: number): ActorCreditsCastInterface[] => {
        const castPerPage: number = 10;
        const startIndex = ref<number>((page - 1) * castPerPage);
        const endIndex = ref<number>(startIndex.value + castPerPage);
        const slicedcast = ref<ActorCreditsCastInterface[]>(
          state.credits!.cast.slice(startIndex.value, endIndex.value)
        );
        if (page > 1) {
          return [...state.credits!.cast.slice(0, endIndex.value)];
        } else {
          return slicedcast.value;
        }
      },

    getActorCrew:
      (state: ActorDetailStore) =>
      (page: number): ActorCreditCrewInterface[] => {
        const crewPerPage: number = 10;
        const startIndex = ref<number>((page - 1) * crewPerPage);
        const endIndex = ref<number>(startIndex.value + crewPerPage);
        const slicedcrew = ref<ActorCreditCrewInterface[]>(
          state.credits!.crew.slice(startIndex.value, endIndex.value)
        );
        if (page > 1) {
          return [...state.credits!.crew.slice(0, endIndex.value)];
        } else {
          return slicedcrew.value;
        }
      },
  },
  actions: {
    async fetchActorDetail(idActor: string) {
      this.loading = true;
      const { results, loading, error } = await fetchActorInformation(idActor);
      this.loading = loading.value;
      this.errors = error.value;
      this.details = results.value as ActorDetailsInterface;
    },
    async fetchActorCredits(idActor: string) {
      this.loading = true;
      const { results, loading, error } = await fetchActorInformation(
        idActor,
        "movie_credits"
      );
      this.loading = loading.value;
      this.errors = error.value;
      this.credits = results.value as ActorCreditsInterface;
    },
    async fetchActorImages(idActor: string) {
      this.loading = true;
      const { results, loading, error } = await fetchActorInformation(
        idActor,
        "images"
      );
      this.loading = loading.value;
      this.errors = error.value;
      this.images = results.value as ActorImagesInterface;
    },
  },
});

export function initialFetchPageActor(idActor: string): void {
  const actorDetailStore = useActorDetailStore();
  actorDetailStore.fetchActorCredits(idActor);
  actorDetailStore.fetchActorDetail(idActor);
  actorDetailStore.fetchActorImages(idActor);
}
