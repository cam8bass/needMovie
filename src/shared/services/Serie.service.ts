import { ref, type Ref } from "vue";
import type {
  SerieContentInterface,
  SerieCreditsInterface,
  SerieSeasonInterface,
  SerieSimilarInterface,
  SerieSummaryInterface,
} from "../interfaces";
import { ERROR_FETCH_MEDIA } from "../messages";
import type { fetchSerieCategoriesType } from "../types";
import { API_KEY, BASE_URL, LANG_FR } from "../variables";

export async function fetchSerieByCategorie(
  categorie: fetchSerieCategoriesType,
  page: number = 1
): Promise<{
  results: Ref<SerieContentInterface | []>;
  loading: Ref<boolean>;
  error: Ref<any>;
}> {
  const results = ref<SerieContentInterface | []>([]);
  const loading = ref<boolean>(true);
  const error = ref<any>(null);

  try {
    const ajax = await fetch(
      `${BASE_URL}/tv/${categorie}?api_key=${API_KEY}&language=${LANG_FR}&page=${page}`
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

export async function fetchSerieDetails(
  id: string,
  type?: string
): Promise<{
  results: Ref<
    SerieSummaryInterface | SerieSimilarInterface | SerieCreditsInterface | []
  >;
  loading: Ref<boolean>;
  error: Ref<any>;
}> {
  const results = ref<
    SerieSummaryInterface | SerieSimilarInterface | SerieCreditsInterface | []
  >([]);
  const loading = ref<boolean>(true);
  const error = ref<any>(null);
  try {
    const ajax = await fetch(
      type
        ? `${BASE_URL}/tv/${id}/${type}?api_key=${API_KEY}&language=${LANG_FR}&region=FR`
        : `${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=${LANG_FR}&region=FR`
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

export async function fetchSerieSeason(
  id: string,
  seasonNumber: number = 1,
  episodeNumber?: number
): Promise<{
  results: Ref<SerieSeasonInterface | []>;
  loading: Ref<boolean>;
  error: Ref<any>;
}> {
  const results = ref<SerieSeasonInterface | []>([]);
  const loading = ref<boolean>(true);
  const error = ref<any>(null);
  try {
    const ajax = await fetch(
      episodeNumber
        ? `${BASE_URL}/tv/${id}/season/${seasonNumber}/episode/${episodeNumber}?api_key=${API_KEY}&language=${LANG_FR}&region=FR`
        : `${BASE_URL}/tv/${id}/season/${seasonNumber}?api_key=${API_KEY}&language=${LANG_FR}&region=FR`
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
