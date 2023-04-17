import { fetchMoviesByGenre, fetchPopularMovies } from "@/service/movie";
import { Movie } from "@/types/movie";
import { createSlice } from "@reduxjs/toolkit";

interface SelectedByGenre {
  selectedByGenre: Movie[] | null;
}

const initialState: SelectedByGenre = {
  selectedByGenre: null,
};

const selectedByGenreMoviesSlice = createSlice({
  name: "selectedByGenre",
  initialState,
  reducers: {
    resetSelectedMovies: (state) => {
      state.selectedByGenre = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesByGenre.fulfilled, (state, action) => {
      state.selectedByGenre = action.payload;
    });
  },
});

export default selectedByGenreMoviesSlice.reducer;
export const { resetSelectedMovies } = selectedByGenreMoviesSlice.actions;
