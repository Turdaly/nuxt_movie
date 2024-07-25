import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", () => {
  const route = useRoute();
  const movieId = ref<string | null>(null);
  const myMovies = ref<Types.IDetailMovie[] | null>(null)
  const popularMovies = ref<Types.IMoviesList | null>(null);
  const upcomingMovies = ref<Types.IMoviesList | null>(null);
  const topMovies = ref<Types.IMoviesList | null>(null);
  const detailMovie = ref<Types.IDetailMovie | null>(null);
  const recommendedMovies = ref<Types.IMoviesList | null>(null);
  const videosMovie = ref<Types.IVideolist | null>(null);
  const reviews = ref<IReviews | null>(null);
  const query = ref<string>("");
  const searchMovies = ref<Types.IMoviesList | null>(null);
  const favoriteMovies = ref<Types.IMoviesList | null>(null);
  const trailerLink = ref<string>('')
  const { locale } = useI18n();
  const { t } = useI18n();
  const genresList = [
    t("ganres.Fantasy"),
    t("ganres.Adventures"),
    t("ganres.Cartoons"),
    t("ganres.Dramas"),
    t("ganres.Family"),
    t("ganres.Horror"),
    t("ganres.Fighters"),
  ];
  const setMovieId = () => {
    if (typeof route.params.id == "string") {
      movieId.value = route.params.id;
      console.log("movie-id:", movieId.value);
    }
  };

  const setQuery = (q: string) => {
    query.value = q;
  };

  const fetchMoviesList = async <T>(
    url: string,
    storeRef: Ref<T | null>,
    comment?: string
  ) => {
    try {
      const { $apiMovie } = useNuxtApp();
      const response = await $apiMovie.get<T>(url, {
        params: { language: locale.value, page: 1 },
      });
      storeRef.value = response.data;
      console.log(storeRef.value);
      if (comment) {
        console.log(comment, storeRef.value);
      }
    } catch (err) {
      console.log("Error fetching popular movies:", err);
    }
  };

  const fetchPopularMovies = async () =>
    await fetchMoviesList<Types.IMoviesList>(
      "/movie/popular",
      popularMovies,
      "popular-movies"
    );
  const fetchUpcomingMovies = async () =>
    await fetchMoviesList<Types.IMoviesList>(
      "/movie/upcoming",
      upcomingMovies,
      "upcoming-movies"
    );
  const fetchTopRatedMovies = async () =>
    await fetchMoviesList<Types.IMoviesList>(
      "/movie/top_rated",
      topMovies,
      "top-movies"
    );
  const fetchRecommendedMovies = async () =>
    await fetchMoviesList<Types.IMoviesList>(
      `movie/${movieId.value}/recommendations`,
      recommendedMovies,
      "recommended-movies"
    );
  const fetchReviewsMovie = async () =>
    await fetchMoviesList<IReviews>(
      `movie/${movieId.value}/reviews`,
      reviews,
      "reviews"
    );
  const fetchVideosMovie = async () => {
    await fetchMoviesList<Types.IVideolist>(`movie/${movieId.value}/videos`, videosMovie, "videos");
    const trailer = videosMovie.value?.results.find(video => video.type === "Trailer")
    trailerLink.value = trailer ? trailer.key : ''
   }

  const fetchSearchMovies = async () =>
    await fetchMoviesList<Types.IMoviesList>(
      `search/movie?query=${query.value}&include_adult=false`,
      searchMovies,
      "search-movies"
    );
  const fetchDetailMovie = async () => {
    setMovieId();
    await fetchMoviesList<Types.IDetailMovie>(
      `/movie/${movieId.value}`,
      detailMovie,
      "detail-movie"
    );
  };
  const fetchFavoriteMovies = async () =>
    await fetchMoviesList<Types.IMoviesList>(
      `/account/${movieId.value}/favorite/movies`,
      favoriteMovies,
      "favorite-movies"
    );

  const addFavoriteMovie = async (accountId: number, movieId: number) => {
    try {
      const { $apiMovie } = useNuxtApp();
      const response = await $apiMovie.post(`/account/${accountId}/favorite`, {
        media_type: "movie",
        media_id: movieId,
        favorite: true,
      });
      console.log("added movie to favorite", response);
    } catch (err) {
      console.log("Error adding movie to favorites:", err);
    }
  };

  const fetchMyMovies = async () => {
    try {
      const { $apiCustom } = useNuxtApp()
      const response = await $apiCustom.get<Types.IDetailMovie[]>('/myMovies')
      myMovies.value = response.data
    } catch(err) {
      console.log(err)
    }
  }
  const deleteMovie = async (movie: Types.IDetailMovie) => {
    try {
      const { $apiCustom } = useNuxtApp()
      await $apiCustom.delete(`/myMovies/${movie.id}`)
      await fetchMyMovies()
    } catch(err) {
      console.log(err)
    }
  }
  const patchMovie = async (movie: Types.IDetailMovie) => {
    try {
      const { $apiCustom } = useNuxtApp()
      await $apiCustom.patch(`/myMovies/${movie.id}`, movie)
      await fetchMyMovies()
    } catch(err) {
      console.log(err)
    }
  }

  return {
    movieId,
    myMovies,
    popularMovies,
    upcomingMovies,
    topMovies,
    detailMovie,
    recommendedMovies,
    videosMovie,
    reviews,
    query,
    searchMovies,
    favoriteMovies,
    trailerLink,
    genresList,
    setQuery,
    setMovieId,
    fetchMyMovies,
    fetchPopularMovies,
    fetchUpcomingMovies,
    fetchTopRatedMovies,
    fetchDetailMovie,
    fetchRecommendedMovies,
    fetchVideosMovie,
    fetchReviewsMovie,
    fetchSearchMovies,
    fetchFavoriteMovies,
    addFavoriteMovie,
    deleteMovie,
    patchMovie,
  };
});
