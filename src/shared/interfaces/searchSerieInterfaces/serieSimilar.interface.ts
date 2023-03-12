export interface SerieSimilarResultsInterface {
  poster_path: string | null;
  popularity: number;
  id: number;
  backdrop_path: string | null;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: [string];
  genre_ids: [number];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}
export interface SerieSimilarInterface {
  page: number;
  results: [SerieSimilarResultsInterface];
  total_pages: number;
  total_results: number;
}
export const DEFAULT_SERIE_SIMILAR: SerieSimilarInterface = {
  page: 0,
  results: [
    {
      poster_path: null,
      popularity: 0,
      id: 0,
      backdrop_path: null,
      vote_average: 0,
      overview: "",
      first_air_date: "",
      origin_country: [""],
      genre_ids: [0],
      original_language: "",
      vote_count: 0,
      name: "",
      original_name: "",
    },
  ],
  total_pages: 0,
  total_results: 0,
};
