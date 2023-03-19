export type movieStatus =
  | "Rumored"
  | "Planned"
  | "In Production"
  | "Post Production"
  | "Released"
  | "Canceled";

export type navCredits = "crew" | "cast";

export type navWallpaper = "backdrops" | "posters";

export type navSeason = "lastSeason" | "allSeason";

export type mediaType = "movie" | "tv" | "person";

export type fetchType = "movie" | "tv";

export type fetchMovieCategoriesType =
  | "credits"
  | "recommendations"
  | "popular"
  | "top_rated"
  | "upcoming"
  | "now_playing";

export type fetchMovieDetailsType = "credits" | "recommendations";

export type fetchSerieCategoriesType = "popular" | "top_rated" | "on_the_air";

export type fetchSerieDetailsType = "aggregate_credits" | "recommendations";

export type fetchActorDetailsType = "movie_credits" | "images";
