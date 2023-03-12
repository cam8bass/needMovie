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

export const DEFAULT_MOVIE_PAGES = {
  popularPage: 1,
  topRatedPage: 1,
  upcomingPage: 1,
};

export const DEFAULT_DETAILS_PAGES = {
  crewPage: 1,
  castPage: 1,
  backdropPage: 1,
  posterPage: 1,
};
