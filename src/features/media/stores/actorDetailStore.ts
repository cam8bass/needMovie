import type {
  ActorCreditsInterface,
  ActorDetailsInterface,
  ActorImagesInterface,
  ActorLatestInterface,
  ActorPopularInterface,
} from "@/shared/interfaces";
import { fetchActorInformation } from "@/shared/services";
import { defineStore } from "pinia";

interface ActorDetailStore {
  details: ActorDetailsInterface | null;
  credits: ActorCreditsInterface | null;
  images: ActorImagesInterface | null;
  latest: ActorLatestInterface | null;
  popular: ActorPopularInterface | null;
  loading: boolean;
  errors: any;
}

export const useActorDetailStore = defineStore("actorDetailStore", {
  state: (): ActorDetailStore => ({
    details: null,
    credits: null,
    images: null,
    latest: null,
    popular: null,
    loading: false,
    errors: null,
  }),
  getters: {},
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
      const { results, loading, error } = await fetchActorInformation(idActor);
      this.loading = loading.value;
      this.errors = error.value;
      this.credits = results.value as ActorCreditsInterface;
    },
    async fetchActorImages(idActor: string) {
      this.loading = true;
      const { results, loading, error } = await fetchActorInformation(idActor);
      this.loading = loading.value;
      this.errors = error.value;
      this.images = results.value as ActorImagesInterface;
    },
    async fetchActorLatest(idActor: string) {
      this.loading = true;
      const { results, loading, error } = await fetchActorInformation(idActor);
      this.loading = loading.value;
      this.errors = error.value;
      this.latest = results.value as ActorLatestInterface;
    },
    async fetchActorPopular(idActor: string) {
      this.loading = true;
      const { results, loading, error } = await fetchActorInformation(idActor);
      this.loading = loading.value;
      this.errors = error.value;
      this.popular = results.value as ActorPopularInterface;
    },
  },
});

export function initialFetchPageActor(idActor: string): void {
  const actorDetailStore = useActorDetailStore();
  actorDetailStore.fetchActorCredits(idActor);
  actorDetailStore.fetchActorDetail(idActor);
  actorDetailStore.fetchActorImages(idActor);
  actorDetailStore.fetchActorLatest(idActor);
  actorDetailStore.fetchActorPopular(idActor);
}
