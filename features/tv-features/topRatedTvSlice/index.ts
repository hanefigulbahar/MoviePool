import { fetchTopRated } from "@/service/movie";
import { Tv } from "@/types/tv";
import { createSlice } from "@reduxjs/toolkit";
interface ITopRateTv {
  topRatedTv: Tv[] | null;
}
const initialState: ITopRateTv = {
  topRatedTv: null,
};
const topRatedTvSlice = createSlice({
  name: "topRatedTvSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopRated.fulfilled, (state, action) => {
      state.topRatedTv = action.payload;
    });
  },
});

export default topRatedTvSlice.reducer;
