export interface TrailerResultsInterface {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface TrailerInterface {
  id: number;
  results: [TrailerResultsInterface];
}

export const DEFAULT_TRAILER: TrailerInterface = {
  id: 0,
  results: [
    {
      iso_639_1: "",
      iso_3166_1: "",
      name: "",
      key: "",
      site: "",
      size: 0,
      type: "",
      official: false,
      published_at: "",
      id: "",
    },
  ],
};
