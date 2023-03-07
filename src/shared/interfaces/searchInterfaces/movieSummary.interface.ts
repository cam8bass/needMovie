import type { movieStatus } from "@/shared/types";

export interface MovieSummaryInterface {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | object;
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: [
    {
      name: string;
      id: number;
      logo_path: string | null;
      origin_country: string;
    }
  ];
  production_countries: [
    {
      iso_3166_1: string;
      name: string;
    }
  ];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: [{ iso_639_1: string; name: string }];
  status: movieStatus | null;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const DEFAULT_SUMMARY: MovieSummaryInterface = {
  adult: false,
  backdrop_path: null,
  belongs_to_collection: null,
  budget: 0,
  genres: [
    {
      id: 0,
      name: "",
    },
  ],
  homepage: null,
  id: 0,
  imdb_id: null,
  original_language: "",
  original_title: "",
  overview: null,
  popularity: 0,
  poster_path: null,
  production_companies: [
    {
      name: "",
      id: 0,
      logo_path: null,
      origin_country: "",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "",
      name: "",
    },
  ],
  release_date: "",
  revenue: 0,
  runtime: null,
  spoken_languages: [{ iso_639_1: "", name: "" }],
  status: null,
  tagline: null,
  title: "",
  video: false,
  vote_average: 0,
  vote_count: 0,
};
