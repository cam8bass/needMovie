import type { MediaInterface } from "./Media.interface";

export interface SerieContentInterface extends MediaInterface {
  results: SerieResultsInterface[] | [];
}

export interface SerieResultsInterface {
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
