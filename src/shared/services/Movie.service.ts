import { ref } from "vue";
import type { Ref } from "vue";

import type {
  MovieCreditsInterface,
  MovieContentInterface,
  MovieSimilarInterface,
  MovieSummaryInterface,

} from "../interfaces";
import { ERROR_FETCH_MEDIA } from "../messages";
import { API_KEY, BASE_URL, LANG_FR } from "../variables";
import type { fetchMovieCategoriesType, fetchMovieDetailsType } from "../types";

export async function fetchMovieByCategorie(
  categorie: fetchMovieCategoriesType,
  page: number = 1
): Promise<{
  results: Ref<MovieContentInterface | []>;
  loading: Ref<boolean>;
  error: Ref<any>;
}> {
  const results = ref<MovieContentInterface | []>([]);
  const loading = ref<boolean>(true);
  const error = ref<any>(null);

  try {
    const ajax = await fetch(
      `${BASE_URL}/movie/${categorie}?api_key=${API_KEY}&language=${LANG_FR}&region=FR&page=${page}`
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

export async function fetchMovieDetails(
  id: string,
  type?: fetchMovieDetailsType
): Promise<{
  results: Ref<
    MovieSummaryInterface | MovieSimilarInterface | MovieCreditsInterface | []
  >;
  loading: Ref<boolean>;
  error: Ref<any>;
}> {
  const results = ref<
    MovieSummaryInterface | MovieSimilarInterface | MovieCreditsInterface | []
  >([]);
  const loading = ref<boolean>(true);
  const error = ref<any>(null);
  try {
    const ajax = await fetch(
      type
        ? `${BASE_URL}/movie/${id}/${type}?api_key=${API_KEY}&language=${LANG_FR}&region=FR`
        : `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${LANG_FR}&region=FR`
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
