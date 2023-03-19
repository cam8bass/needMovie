import { ref, type Ref } from "vue";
import type {
  ActorCreditsInterface,
  ActorDetailsInterface,
  ActorImagesInterface,
} from "../interfaces";
import { ERROR_FETCH_MEDIA } from "../messages";
import type { fetchActorDetailsType } from "../types";
import { API_KEY, BASE_URL, LANG_FR } from "../variables";

export async function fetchActorInformation(
  id: string,
  type?: fetchActorDetailsType
): Promise<{
  results: Ref<
    ActorDetailsInterface | ActorCreditsInterface | ActorImagesInterface | []
  >;
  loading: Ref<boolean>;
  error: Ref<any>;
}> {
  const results = ref<
    ActorDetailsInterface | ActorCreditsInterface | ActorImagesInterface | []
  >([]);
  const loading = ref<boolean>(true);
  const error = ref<any>(null);
  try {
    const ajax = await fetch(
      type
        ? `${BASE_URL}/person/${id}/${type}?api_key=${API_KEY}&language=${LANG_FR}`
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
