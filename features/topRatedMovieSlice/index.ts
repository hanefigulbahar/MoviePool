import { fetchTopRatedMovies } from "@/service/movie";
import { Movie } from "@/types/movie";
import { createSlice } from "@reduxjs/toolkit";

export interface IMovie {
  topRatedMovies: Movie[] | null;
}

const initialState: IMovie = {
  topRatedMovies: null,
};

const topRatedMovieSlice = createSlice({
  name: "topRatedMovie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
      state.topRatedMovies = action.payload;
    });
  },
});

export default topRatedMovieSlice.reducer;
