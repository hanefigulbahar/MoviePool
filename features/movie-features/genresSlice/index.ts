import { fetchGenres } from "@/service/movie";
import { Genre } from "@/types/movie";
import { createSlice } from "@reduxjs/toolkit";

interface IMovie {
  genres: Genre[] | null;
}

const initialState: IMovie = {
  genres: null,
};

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
    });
  },
});

export default genresSlice.reducer;
