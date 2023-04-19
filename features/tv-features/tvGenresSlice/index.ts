import { fetchGenres } from "@/service/movie";
import { Genre } from "@/types/movie";
import { createSlice } from "@reduxjs/toolkit";

interface ITvGenres {
  tvGenres: Genre[] | null;
}

const initialState: ITvGenres = {
  tvGenres: null,
};

const tvGenresSlice = createSlice({
  name: "tvGenres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.tvGenres = action.payload;
    });
  },
});

export default tvGenresSlice.reducer;
