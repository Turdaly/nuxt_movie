
declare global {
  namespace Types {
    // MoviesList
    interface IMovie {
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

    interface IMoviesList {
      page: number;
      results: IMovie[];
      total_pages: number;
      total_results: number;
    }

    // IMovieDetail

    interface ICollection {
      id: number;
      name: string;
      backdrop_path: string;
      poster_path: string;
    }

    interface IGenre {
      id: number;
      name: string;
    }

    interface ICompany {
      id: number;
      logo_path: string | null;
      name: string;
      origin_country: string;
    }

    interface ICountry {
      iso_3166_1: string;
      name: string;
    }

    interface ILanguage {
      english_name: string;
      iso_639_1: string;
      name: string;
    }

    interface IDetailMovie {
      adult: boolean;
      backdrop_path: string;
      belongs_to_collection: ICollection | null;
      budget: number;
      genres: IGenre[];
      homepage: string;
      id: number;
      imdb_id: string | null;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      production_companies: ICompany[];
      production_countries: ICountry[];
      release_date: string;
      revenue: number;
      runtime: number | null;
      spoken_languages: ILanguage[];
      status: string;
      tagline: string;
      title: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
    }

    interface IVideo {
      id: string;
      iso_639_1: string;
      key: string;
      site: string;
      name: string;
      type: string;
    }

    interface IVideolist {
      id: number;
      results: IVideo[];
    }
  }
  interface IAuthorDetails {
    name: string;
    username: string;
    avatar_path: string | null;
    rating: number | null;
  }

  interface IReview {
    author: string;
    author_details: IAuthorDetails;
    content: string;
    created_at: string;
    id: string;
    updated_at: string;
    url: string;
  }

  interface IReviews {
    id: number;
    page: number;
    results: IReview[];
    total_pages: number;
    total_results: number;
  }
}

export {};
