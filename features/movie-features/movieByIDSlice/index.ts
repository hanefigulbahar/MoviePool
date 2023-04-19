import { fetchMoviesByID } from "@/service/movie";
import { MovieDetails } from "@/types/movie";
import { createSlice } from "@reduxjs/toolkit";

interface MovieByID {
  selectedMovie: MovieDetails | null;
}

const initialState: MovieByID = {
  selectedMovie: null,
};

const movieByIDSlice = createSlice({
  name: "selectedMovie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesByID.fulfilled, (state, action) => {
      state.selectedMovie = action.payload;
    });
  },
});

export default movieByIDSlice.reducer;
