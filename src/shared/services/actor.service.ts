import { ref, type Ref } from "vue";
import type {
  ActorCreditsInterface,
  ActorDetailsInterface,
  ActorImagesInterface,
  ActorLatestInterface,
  ActorPopularInterface,
} from "../interfaces";
import { ERROR_FETCH_MEDIA } from "../messages";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "47accfeff32353d2ff47a97c0ed7c4ef";
const LANG_FR = "fr-FR";

export async function fetchActorInformation(
  id: string,
  search?: string
): Promise<{
  results: Ref<
    | ActorDetailsInterface
    | ActorCreditsInterface
    | ActorImagesInterface
    | ActorLatestInterface
    | ActorPopularInterface
    | []
  >;
  loading: Ref<boolean>;
  error: Ref<any>;
}> {
  const results = ref<
    | ActorDetailsInterface
    | ActorCreditsInterface
    | ActorImagesInterface
    | ActorLatestInterface
    | ActorPopularInterface
    | []
  >([]);
  const loading = ref<boolean>(true);
  const error = ref<any>(null);
  try {
    const ajax = await fetch(
      search
        ? `${BASE_URL}/person/${id}/${search}?api_key=${API_KEY}&language=${LANG_FR}`
        : `${BASE_URL}/person/${id}?api_key=${API_KEY}&language=${LANG_FR}`
    );

    if (!ajax.ok) {
      throw new Error(ERROR_FETCH_MEDIA);
    } else {
      const res = await ajax.json();
      results.value = res;
    }
  } catch (e) {
    error.value = e;
  } finally {
    loading.value = false;
  }

  return {
    results,
    loading,
    error,
  };
}
