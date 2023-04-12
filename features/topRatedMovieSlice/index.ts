import { fetchTopRatedMovies } from "@/service/movie";
import { Movie } from "@/types/movie";
import { createSlice } from "@reduxjs/toolkit";

interface IMovie {
  topRatedMovies: Movie[] | null;
  popularMovies: Movie[] | null;
}

const initialState: IMovie = {
  topRatedMovies: null,
  popularMovies: null,
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
