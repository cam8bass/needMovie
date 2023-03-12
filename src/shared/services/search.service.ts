import { ref, type Ref } from "vue";
import type {
  CreditsInterface,
  MovieSimilarInterface,
  MovieSummaryInterface,
  SerieCreditsInterface,
  SerieSeasonInterface,
  SerieSimilarInterface,
  TrailerInterface,
  WallpapperInterface,
} from "../interfaces";
import type { SerieSummaryInterface } from "../interfaces/searchSerieInterfaces/serieSummary.interface";

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
    | SerieSummaryInterface
    | SerieCreditsInterface
    | SerieSimilarInterface
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
    | SerieSummaryInterface
    | SerieCreditsInterface
    | SerieSimilarInterface
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
