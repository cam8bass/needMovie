import { ref, type Ref } from "vue";
import type {
  CreditsInterface,
  MovieSimilarInterface,
  MovieSummaryInterface,
  TrailerInterface,
  WallpapperInterface,
} from "../interfaces";

import { ERROR_FETCH_MEDIA } from "../messages";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "47accfeff32353d2ff47a97c0ed7c4ef";
const LANG_FR = "fr-FR";

export async function fetchDetails(
  type: string,
  id: string,
  search?: string
): Promise<{
  results: Ref<
    | MovieSummaryInterface
    | TrailerInterface
    | WallpapperInterface
    | MovieSimilarInterface
    | CreditsInterface
    | []
  >;
  loading: Ref<boolean>;
  error: Ref<any>;
}> {
  const results = ref<
    | MovieSummaryInterface
    | TrailerInterface
    | WallpapperInterface
    | MovieSimilarInterface
    | CreditsInterface
    | []
  >([]);
  const loading = ref<boolean>(true);
  const error = ref<any>(null);
  try {
    const ajax = await fetch(
      search
        ? `${BASE_URL}/${type}/${id}/${search}?api_key=${API_KEY}&language=${LANG_FR}&region=FR`
        : `${BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=${LANG_FR}&region=FR`
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

export async function fetchWallpaper(
  type: string,
  id: string
): Promise<{
  results: Ref<WallpapperInterface | []>;
  loading: Ref<boolean>;
  error: Ref<any>;
}> {
  const results = ref<WallpapperInterface | []>([]);
  const loading = ref<boolean>(true);
  const error = ref<any>(null);
  try {
    const ajax = await fetch(
      `${BASE_URL}/${type}/${id}/images?api_key=${API_KEY}`
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
