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
    getActorCast(): ActorCreditsCastInterface[] {
      return this.credits!.cast.sort((a, b) => {
        if (a.release_date > b.release_date) {
          return 1;
        } else if (a.release_date < b.release_date) {
          return -1;
        } else return 0;
      }) as ActorCreditsCastInterface[];
    },

    getActorCrew(): ActorCreditCrewInterface[] {
      return this.credits!.crew.sort((a, b) => {
        if (a.release_date > b.release_date) {
          return 1;
        } else if (a.release_date < b.release_date) {
          return -1;
        } else {
          return 0;
        }
      }) as ActorCreditCrewInterface[];
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
