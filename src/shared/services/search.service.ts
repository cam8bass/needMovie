import { ref, type Ref } from "vue";
import type { yourSearchInterface } from "../interfaces";
import { ERROR_FETCH_MEDIA } from "../messages";
import { API_KEY, BASE_URL, LANG_FR } from "../variables";

export async function fetchSearchBar(
  query: string,
  page: number = 1
): Promise<{
  results: Ref<yourSearchInterface | []>;
  loading: Ref<boolean>;
  error: Ref<any>;
}> {
  const results = ref<yourSearchInterface | []>([]);
  const loading = ref<boolean>(true);
  const error = ref<any>(null);

  try {
    const ajax = await fetch(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}&language=${LANG_FR}&page=${page}`
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
