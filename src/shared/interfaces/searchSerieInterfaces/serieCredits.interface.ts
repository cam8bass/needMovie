export interface SerieCastInterface {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  roles: [
    {
      credit_id: string;
      character: string;
      episode_count: number;
    }
  ];
  total_episode_count: number;
  order: number;
}

export interface SerieCrewInterface {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  jobs: [
    {
      credit_id: string;
      job: string;
      episode_count: number;
      department: string;
      total_episode_count: number;
    }
  ];
}

export interface SerieCreditsInterface {
  id: number;
  cast: [SerieCastInterface];
  crew: [SerieCrewInterface];
}

export const DEFAULT_CREDITS_SERIE: SerieCreditsInterface = {
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
      roles: [
        {
          credit_id: "",
          character: "",
          episode_count: 0,
        },
      ],
      total_episode_count: 0,
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
      jobs: [
        {
          credit_id: "",
          job: "",
          episode_count: 0,
          department: "",
          total_episode_count: 0,
        },
      ],
    },
  ],
};
