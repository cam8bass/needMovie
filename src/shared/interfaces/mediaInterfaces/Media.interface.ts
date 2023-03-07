

export interface MediaInterface {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  total_pages: number;
  total_results: number;
}

export const DEFAULT_MEDIA = {
  dates: {
    maximum: "",
    minimum: "",
  },
  page: 1,
  total_pages: 0,
  results: [],
  total_results: 0,
};
