import type { mediaType } from "@/shared/types";

export interface yourSeachResultMovieInterface {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  original_title: string;
  genre_ids: [number];
  id: number;
  media_type: mediaType;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface yourSeachResultSerieInterface {
  poster_path: string | null;
  popularity: number;
  id: number;
  overview: string;
  backdrop_path: string | null;
  vote_average: number;
  media_type: mediaType;
  first_air_date: string;
  origin_country: [string];
  genre_ids: [number];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}

export interface yourSeachResultActorKnowForMovieInterface {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  original_title: string;
  genre_ids: [number];
  id: number;
  media_type: mediaType;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface yourSeachResultActorKnowForTVInterface {
  poster_path: string | null;
  popularity: number;
  id: number;
  overview: string;
  backdrop_path: string | null;
  vote_average: number;
  media_type: mediaType;
  first_air_date: string;
  origin_country: [string];
  genre_ids: [number];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}

export interface yourSeachResultActorInterface {
  profile_path: string | null;
  adult: boolean;
  id: number;
  media_type: mediaType;
  known_for:
    | yourSeachResultActorKnowForMovieInterface
    | yourSeachResultActorKnowForTVInterface;
  name: string;
  popularity: number;
}

export interface yourSearchInterface {
  page: number;
  results:
    | yourSeachResultActorInterface
    | yourSeachResultMovieInterface
    | yourSeachResultSerieInterface
    | [];
  total_results: number;
  total_pages: number;
}

export interface FilterInterface {
  search: string;
}

export const DEFAULT_YOURSEACH: yourSearchInterface = {
  page: 1,
  results: [],
  total_results: 1,
  total_pages: 1,
};
