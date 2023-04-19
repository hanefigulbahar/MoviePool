import { fetchPopular } from "@/service/movie";
import { Movie } from "@/types/movie";
import { createSlice } from "@reduxjs/toolkit";

interface IMovie {
  popularMovies: Movie[] | null;
}

const initialState: IMovie = {
  popularMovies: null,
};

const popularMoviesSlice = createSlice({
  name: "topRatedMovie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopular.fulfilled, (state, action) => {
      state.popularMovies = action.payload;
    });
  },
});

export default popularMoviesSlice.reducer;
