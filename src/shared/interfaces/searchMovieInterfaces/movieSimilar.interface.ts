export interface MovieSimilarResultsInterface {
  poster_path: string | null;
  popularity: number;
  id: number;
  backdrop_path: string | null;
  vote_average: number;
  overview: string;
  genre_ids: [number];
  original_language: string;
  vote_count: number;
  adult: boolean;
  release_date: string;
  original_title: string;
  title: string;
  video: boolean;
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
