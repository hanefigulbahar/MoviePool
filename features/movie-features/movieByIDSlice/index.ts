import { fetchByID } from "@/service/movie";
import { MovieDetails } from "@/types/movie";
import { createSlice } from "@reduxjs/toolkit";

interface IMovieByID {
  selectedMovie: MovieDetails | null;
}

const initialState: IMovieByID = {
  selectedMovie: null,
};

const movieByIDSlice = createSlice({
  name: "selectedMovie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchByID.fulfilled, (state, action) => {
      state.selectedMovie = action.payload;
    });
  },
});

export default movieByIDSlice.reducer;
