export interface SingleCardItem {
  adult?: boolean;
  backdrop_path?: string;
  id: number;
  title: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  poster_path?: string;
  media_type?: string;
  genre_ids?: number[];
  popularity?: number;
  release_date: string;
  video?: boolean;
  vote_average: number;
  vote_count?: number;
}

export interface moviesType {
  page: number;
  results: SingleCardItem[];
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieDetailType {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number | undefined;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average?: number;
  vote_count: number;
}

interface CastCredit {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;

  cast_id: number;
  character: string;

  credit_id: string;
  order: number;
}
export interface CastCreditCrew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}

export interface MovieCredits {
  id: number;
  cast: CastCredit[];
  crew: CastCreditCrew[];
}

interface Keyword {
  id: number;
  name: string;
}
export interface MoviesKeywordsType {
  id: number;
  keywords: Keyword[];
}

export interface PersonDetails {
  id: number;
  name: string;
  popularity: number;
}

export interface TMDBAuthorDetails {
  name: string;
  username: string;
  avatar_path: string | null;
  rating: number;
}
export interface TMDBReview {
  author: string;
  author_details: TMDBAuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}
export interface ReviewDetailsType {
  id: number;
  page: number;
  results: TMDBReview[];
  total_pages: number;
  total_results: number;
}

interface ChangeResult {
  id: number;
  adult: boolean;
}
export interface ChangeType {
  results: ChangeResult[];
  page: number;
  total_pages: number;
  total_results: number;
}
export interface AlternateTitles {
  iso_3166_1: string;
  title: string;
  type: string;
}
export interface AlternateTitleType {
  id: number;
  titles: AlternateTitles[];
}

export interface CountryNameType {
  'iso_3166_1': string;
  'english_name': string;
  'native_name': string;
}
