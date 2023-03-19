import { ref, type Ref } from "vue";
import type { TrailerInterface, WallpapperInterface } from "../interfaces";
import { ERROR_FETCH_MEDIA } from "../messages";
import type { fetchType } from "../types";

import { API_KEY, BASE_URL, LANG_FR } from "../variables";

export async function fetchWallpaper(
  id: string,
  type: fetchType
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

export async function fetchTrailer(
  id: string,
  type: fetchType
): Promise<{
  results: Ref<TrailerInterface | []>;
  loading: Ref<boolean>;
  error: Ref<any>;
}> {
  const results = ref<TrailerInterface | []>([]);
  const loading = ref<boolean>(true);
  const error = ref<any>(null);
  try {
    const ajax = await fetch(
      `${BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}&language=${LANG_FR}&region=FR`
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
