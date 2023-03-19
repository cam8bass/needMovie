export interface MovieCrewInterface {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
}

export interface MovieCastInterface {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface MovieCreditsInterface {
  id: number;
  cast: [MovieCastInterface];
  crew: [MovieCrewInterface];
}

export const DEFAULT_CREDIT: MovieCreditsInterface = {
  id: 0,
  cast: [
    {
      adult: false,
      gender: null,
      id: 0,
      known_for_department: "",
      name: "",
      original_name: "",
      popularity: 0,
      profile_path: null,
      cast_id: 0,
      character: "",
      credit_id: "",
      order: 0,
    },
  ],
  crew: [
    {
      adult: false,
      gender: null,
      id: 0,
      known_for_department: "",
      name: "",
      original_name: "",
      popularity: 0,
      profile_path: null,
      credit_id: "",
      department: "",
      job: "",
    },
  ],
};
