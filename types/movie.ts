// MoviesList
export interface IMovie {
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

export interface IMoviesList {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

// IMovieDetail

export interface ICollection {
  id: number
  name: string
  backdrop_path: string
  poster_path: string
}

export interface IGenre {
  id: number
  name: string
}

export interface ICompany {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

export interface ICountry {
  iso_3166_1: string
  name: string
}

export interface ILanguage {
  english_name: string
  iso_639_1: string
  name: string
}

export interface IDetailMovie {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: ICollection | null
  budget: number
  genres: IGenre[]
  homepage: string
  id: number
  imdb_id: string | null
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ICompany[]
  production_countries: ICountry[]
  release_date: string
  revenue: number
  runtime: number | null
  spoken_languages: ILanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}