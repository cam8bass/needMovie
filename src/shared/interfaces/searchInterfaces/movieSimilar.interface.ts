export interface MovieSimilarResultsInterface {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: [number];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface MovieSimilarInterface {
  page: number;
  results: [MovieSimilarResultsInterface];
  total_pages: number;
  total_results: number;
}

export const DEFAULT_MOVIE_SIMILAR: MovieSimilarInterface = {
  page: 0,
  results: [
    {
      poster_path: null,
      adult: false,
      overview: "",
      release_date: "",
      genre_ids: [0],
      id: 0,
      original_title: "",
      original_language: "",
      title: "",
      backdrop_path: null,
      popularity: 0,
      vote_count: 0,
      video: false,
      vote_average: 0,
    },
  ],
  total_pages: 0,
  total_results: 0,
};
