import { DEFAULT_MEDIA, type MediaInterface } from "./Media.interface";

export interface MovieInterface {
  popular: MovieContentInterface;
  topRated: MovieContentInterface;
  upcoming: MovieContentInterface;
}

export interface MovieContentInterface extends MediaInterface {
  results: MovieResultsInterface[] | [];
}

export interface MovieResultsInterface {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: [number];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export const DEFAULT_MOVIE = {
  popular: { ...DEFAULT_MEDIA },
  topRated: { ...DEFAULT_MEDIA },
  upcoming: { ...DEFAULT_MEDIA },
};
