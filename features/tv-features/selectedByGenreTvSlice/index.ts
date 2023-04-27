import { fetchByGenre } from "@/service/movie";
import { Tv } from "@/types/tv";
import { createSlice } from "@reduxjs/toolkit";

interface ISelectedByGenreTv {
  selectedTvGenre: Tv[] | null;
}

const initialState: ISelectedByGenreTv = {
  selectedTvGenre: null,
};

const selectedByGenreTvSlice = createSlice({
  name: "selectedByGenreTv",
  initialState,
  reducers: {
    resetSelectedTv: (state) => {
      state.selectedTvGenre = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchByGenre.fulfilled, (state, action) => {
      state.selectedTvGenre = action.payload;
    });
  },
});

export default selectedByGenreTvSlice.reducer;
export const { resetSelectedTv } = selectedByGenreTvSlice.actions;
