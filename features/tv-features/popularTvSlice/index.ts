import { fetchPopular } from "@/service/movie";
import { Tv } from "@/types/tv";
import { createSlice } from "@reduxjs/toolkit";

interface IPopularTv {
  popularTv: Tv[] | null;
}

const initialState: IPopularTv = {
  popularTv: null,
};

const popularTvSlice = createSlice({
  name: "popularTv",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopular.fulfilled, (state, action) => {
      state.popularTv = action.payload;
    });
  },
});

export default popularTvSlice.reducer;
