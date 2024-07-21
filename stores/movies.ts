import { defineStore } from "pinia";
import type { IMoviesList, IDetailMovie } from "~/types/movie";

export const useMoviesStore = defineStore("movies", () => {
  const route = useRoute();
  const movieId = ref<string | null>(null);
  const popularMovies = ref<IMoviesList | null>(null);
  const upcomingMovies = ref<IMoviesList | null>(null);
  const topMovies = ref<IMoviesList | null>(null);
  const detailMovie = ref<IDetailMovie | null>(null);
  const recommendedMovies = ref<IMoviesList | null>(null);
  const videoMovie = ref(null);
  const reviews = ref<IReviews | null>(null);
  const query = ref<string>("");
  const searchMovies = ref<IMoviesList | null>(null);
  const favoriteMovies = ref<IMoviesList | null>(null)
  const { locale } = useI18n();

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
      console.log(storeRef.value)
      if (comment) {
        console.log(comment, storeRef.value);
      }
    } catch (err) {
      console.log("Error fetching popular movies:", err);
    }
  };

  const fetchPopularMovies = async () =>
    await fetchMoviesList<IMoviesList>(
      "/movie/popular",
      popularMovies,
      "popular-movies"
    );
  const fetchUpcomingMovies = async () =>
    await fetchMoviesList<IMoviesList>(
      "/movie/upcoming",
      upcomingMovies,
      "upcoming-movies"
    );
  const fetchTopRatedMovies = async () =>
    await fetchMoviesList<IMoviesList>("/movie/top_rated", topMovies, "top-movies");
  const fetchRecommendedMovies = async () =>
    await fetchMoviesList<IMoviesList>(
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
  const fetchVideoMovie = async ()  =>
    await fetchMoviesList(`movie/${movieId.value}/videos`, videoMovie, "video");
  const fetchSearchMovies = async () =>
    await fetchMoviesList<IMoviesList>(
      `search/movie?query=${query.value}&include_adult=false`,
      searchMovies,
      "search-movies"
    );
  const fetchDetailMovie = async () => {
    setMovieId();
    await fetchMoviesList<IDetailMovie>(
      `/movie/${movieId.value}`,
      detailMovie,
      "detail-movie"
    );
  };
  const fetchFavoriteMovies = async () => await fetchMoviesList<IMoviesList>(`/account/${movieId.value}/favorite/movies`, favoriteMovies, 'favorite-movies')

  const addFavoriteMovie = async (accountId: number, movieId: number) => {
    try{
      const { $apiMovie } = useNuxtApp()
      const response = await $apiMovie.post(`/account/${accountId}/favorite`, {
        media_type: 'movie',
        media_id: movieId,
        favorite: true
      })
      console.log('added movie to favorite', movieId)
    } catch(err) {
      console.log('Error adding movie to favorites:', err)
    }
  }

  return {
    movieId,
    popularMovies,
    upcomingMovies,
    topMovies,
    detailMovie,
    recommendedMovies,
    videoMovie,
    reviews,
    query,
    searchMovies,
    favoriteMovies,
    setQuery,
    setMovieId,
    fetchPopularMovies,
    fetchUpcomingMovies,
    fetchTopRatedMovies,
    fetchDetailMovie,
    fetchRecommendedMovies,
    fetchVideoMovie,
    fetchReviewsMovie,
    fetchSearchMovies,
    fetchFavoriteMovies,
    addFavoriteMovie,
  };
});
