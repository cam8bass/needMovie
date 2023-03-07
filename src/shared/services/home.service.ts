import { ref, type Ref } from "vue";
import type {
  MovieContentInterface,
  SerieContentInterface,
} from "@/shared/interfaces/index";
import { ERROR_FETCH_MEDIA } from "../messages";

const BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = "47accfeff32353d2ff47a97c0ed7c4ef";
const LANG_FR = "fr-FR";
export async function fetchMedia(
  media: string,
  search: string | number,
  type: string = "",
  page: number = 1
): Promise<{
  results: Ref<MovieContentInterface | SerieContentInterface | []>;
  loading: Ref<boolean>;
  error: Ref<any>;
}> {
  const results = ref<MovieContentInterface | SerieContentInterface | []>([]);
  const loading = ref<boolean>(true);
  const error = ref<any>(null);

  try {
    const ajax = await fetch(
      type
        ? `${BASE_URL}/${type}/${media}/${search}?api_key=${API_KEY}&language=${LANG_FR}&region=FR&page=${page}`
        : `${BASE_URL}/${media}/${search}?api_key=${API_KEY}&language=${LANG_FR}&region=FR&page=${page}`
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

// export async function fetchTrailer(
//   media: string,
//   id: number
// ): Promise<{
//   loading: Ref<boolean>;
//   error: Ref<any>;
//   results: Ref<TrailerInterface | []>;
// }> {
//   const loading = ref<boolean>(true);
//   const error = ref<any>(null);
//   const results = ref<TrailerInterface | []>([]);
//   try {
//     const ajax = await fetch(
//       `https://api.themoviedb.org/3/${media}/${id}/videos?api_key=${API_KEY}&language=${LANG_FR}`
//     );

//     if (!ajax.ok) {
//       throw new Error(ERROR_FETCH_MEDIA);
//     } else {
//       const res = await ajax.json();
//       results.value = res;
//     }
//   } catch (e) {
//     error.value = e;
//   } finally {
//     loading.value = false;
//   }
//   return {
//     loading,
//     error,
//     results,
//   };
// }

// https://api.themoviedb.org/3/${genre/search/discover}/${film/serie}/${id/type}?api_key=${key}&language=${lang}
