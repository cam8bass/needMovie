export interface SerieSummaryCreateByInterface {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string | null;
}

export interface SerieSummaryLastEpisodeToAirInterface {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string | null;
  vote_average: number;
  vote_count: number;
}

export interface SerieSummaryNetworksInterface {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
}

export interface SerieSummarySeasonsInterface {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface SerieSummaryInterface {
  backdrop_path: string | null;
  created_by: [SerieSummaryCreateByInterface];
  episode_run_time: [number];
  first_air_date: string;
  genres: [{ id: number; name: string }];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: [string];
  last_air_date: string;
  last_episode_to_air: SerieSummaryLastEpisodeToAirInterface;
  name: string;
  next_episode_to_air: null;
  networks: [SerieSummaryNetworksInterface];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: [string];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: [
    {
      id: number;
      logo_path: null | string;
      name: string;
      origin_country: string;
    }
  ];
  production_countries: [
    {
      iso_3166_1: string;
      name: string;
    }
  ];
  seasons: [SerieSummarySeasonsInterface];
  spoken_languages: [
    {
      english_name: string;
      iso_639_1: string;
      name: string;
    }
  ];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export const DEFAULT_SERIE_SUMMARY: SerieSummaryInterface = {
  backdrop_path: null,
  created_by: [
    {
      id: 0,
      credit_id: "",
      name: "",
      gender: 0,
      profile_path: null,
    },
  ],
  genres: [{ id: 0, name: "" }],
  episode_run_time: [0],
  first_air_date: "",
  homepage: "",
  id: 0,
  in_production: false,
  languages: [""],
  last_air_date: "",
  last_episode_to_air: {
    air_date: "",
    episode_number: 0,
    id: 0,
    name: "",
    overview: "",
    production_code: "",
    season_number: 0,
    still_path: null,
    vote_average: 0,
    vote_count: 0,
  },
  name: "",
  next_episode_to_air: null,
  networks: [{ name: "", id: 0, logo_path: null, origin_country: "" }],
  number_of_episodes: 0,
  number_of_seasons: 0,
  origin_country: [""],
  original_language: "",
  original_name: "",
  overview: "",
  popularity: 0,
  poster_path: null,
  production_companies: [
    {
      id: 0,
      logo_path: null,
      name: "",
      origin_country: "",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "",
      name: "",
    },
  ],
  seasons: [
    {
      air_date: "",
      episode_count: 0,
      id: 0,
      name: "",
      overview: "",
      poster_path: "",
      season_number: 0,
    },
  ],
  spoken_languages: [
    {
      english_name: "",
      iso_639_1: "",
      name: "",
    },
  ],
  status: "",
  tagline: "",
  type: "",
  vote_average: 0,
  vote_count: 0,
};
