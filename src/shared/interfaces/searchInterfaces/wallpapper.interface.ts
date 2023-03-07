export interface WallpapperBackdropsInterface {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: null | string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface WallpapperPostersInterface {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: string | null;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface WallpapperInterface {
  id: number;
  backdrops: [WallpapperBackdropsInterface];
  posters: [WallpapperPostersInterface];
}

export const DEFAULT_WALLPAPPER: WallpapperInterface = {
  id: 0,

  backdrops: [
    {
      aspect_ratio: 0,
      file_path: "",
      height: 0,
      iso_639_1: null,
      vote_average: 0,
      vote_count: 0,
      width: 0,
    },
  ],

  posters: [
    {
      aspect_ratio: 0,
      file_path: "",
      height: 0,
      iso_639_1: null,
      vote_average: 0,
      vote_count: 0,
      width: 0,
    },
  ],
};
