export interface SerieSeasonCrewInterface {
  department: string;
  job: string;
  credit_id: string;
  adult: boolean | null;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}

export interface SerieSeasonGuestStarsInterface {
  credit_id: string;
  order: number;
  character: string;
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}

export interface SerieSeasonEpisodesInterface {
  air_date: string;
  episode_number: number;
  crew: [SerieSeasonCrewInterface];
  guest_stars: [SerieSeasonGuestStarsInterface];
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface SerieSeasonInterface {
  _id: string;
  air_date: string;
  episodes: [SerieSeasonEpisodesInterface];
  name: string;
  overview: string;
  id: number;
  poster_path: string | null;
  season_number: number;
}

// export const DEFAULT_SEASON: SerieSeasonInterface = {
//   _id: "",
//   air_date: "",
//   episodes: [
//     {
//       air_date: "",
//       episode_number: 0,
//       crew: [
//         {
//           department: "",
//           job: "",
//           credit_id: "",
//           adult: null,
//           gender: 0,
//           id: 0,
//           known_for_department: "",
//           name: "",
//           original_name: "",
//           popularity: 0,
//           profile_path: null,
//         },
//       ],
//       guest_stars: [
//         {
//           credit_id: "",
//           order: 0,
//           character: "",
//           adult: false,
//           gender: null,
//           id: 0,
//           known_for_department: "",
//           name: "",
//           original_name: "",
//           popularity: 0,
//           profile_path: null,
//         },
//       ],
//       id: 0,
//       name: "",
//       overview: "",
//       production_code: "",
//       season_number: 0,
//       still_path: "",
//       vote_average: 0,
//       vote_count: 0,
//     },
//   ],
//   name: "",
//   overview: "",
//   id: 0,
//   poster_path: null,
//   season_number: 0,
// };
