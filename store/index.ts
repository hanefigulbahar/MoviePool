import genresSlice from "@/features/movie-features/genresSlice";
import languageSlice from "@/features/languageSlice";
import movieByIDSlice from "@/features/movie-features/movieByIDSlice";
import popularMoviesSlice from "@/features/movie-features/popularMoviesSlice";
import selectedByGenreMoviesSlice from "@/features/movie-features/selectedByGenreMoviesSlice";
import topRatedMovieSlice from "@/features/movie-features/topRatedMovieSlice";
import popularTvSlice from "@/features/tv-features/popularTvSlice";
import topRatedTvSlice from "@/features/tv-features/topRatedTvSlice";
import tvGenresSlice from "@/features/tv-features/tvGenresSlice";
import { configureStore } from "@reduxjs/toolkit";

export function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      language: languageSlice,
      topRatedMovie: topRatedMovieSlice,
      popularMovie: popularMoviesSlice,
      genres: genresSlice,
      selectedByGender: selectedByGenreMoviesSlice,
      selectedByID: movieByIDSlice,
      resetSelectedMovies: selectedByGenreMoviesSlice,
      topRatedTv: topRatedTvSlice,
      popularTv: popularTvSlice,
      genresTv: tvGenresSlice,
    },
    preloadedState,
  });
  return store;
}
export const store = createStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
