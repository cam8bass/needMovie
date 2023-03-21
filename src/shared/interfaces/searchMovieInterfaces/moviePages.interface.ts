export interface DetailsPagesInterface {
  crewPage: number;
  castPage: number;
  backdropPage: number;
  posterPage: number;
}

export interface MoviePageInterface {
  popularPage: number;
  topRatedPage: number;
  upcomingPage: number;
}

export const DEFAULT_MOVIE_PAGES: MoviePageInterface = {
  popularPage: 2,
  topRatedPage: 2,
  upcomingPage: 2,
};

export const DEFAULT_DETAILS_PAGES: DetailsPagesInterface = {
  crewPage: 1,
  castPage: 1,
  backdropPage: 1,
  posterPage: 1,
};
