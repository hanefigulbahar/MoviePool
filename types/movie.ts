export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  videos: Videos;
  success: boolean;
  status_code: number;
  status_message: string;
}
export interface MovieNotFound {
  success: boolean;
  status_code: number;
  status_message: string;
}
export interface Genre {
  id: number;
  name: string;
}

export enum OriginalLanguage {
  En = "en",
}

export interface ProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: OriginalLanguage;
  name: string;
}

export interface Videos {
  results: VideoResult[];
}

export interface VideoResult {
  iso_639_1: OriginalLanguage;
  iso_3166_1: ISO3166_1;
  name: string;
  key: string;
  published_at: Date;
  site: Site;
  size: number;
  type: Type;
  official: boolean;
  id: string;
}

export enum ISO3166_1 {
  Us = "US",
}

export enum Site {
  YouTube = "YouTube",
}

export enum Type {
  Featurette = "Featurette",
  Teaser = "Teaser",
  Trailer = "Trailer",
}
