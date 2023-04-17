import genresSlice from "@/features/genresSlice";
import languageSlice from "@/features/languageSlice";
import movieByIDSlice from "@/features/movieByIDSlice";
import popularMoviesSlice from "@/features/popularMoviesSlice";
import selectedByGenreMoviesSlice from "@/features/selectedByGenreMoviesSlice";
import topRatedMovieSlice from "@/features/topRatedMovieSlice";
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
    },
    preloadedState,
  });
  return store;
}
export const store = createStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
