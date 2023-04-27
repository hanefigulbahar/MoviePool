import { fetchByID } from "@/service/movie";
import { TvDetail } from "@/types/tv";
import { createSlice } from "@reduxjs/toolkit";

interface ITvByID {
  selectedTvSeries: TvDetail | null;
}

const initialState: ITvByID = {
  selectedTvSeries: null,
};

const TvByIDSlice = createSlice({
  name: "tvByIDSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchByID.fulfilled, (state, action) => {
      state.selectedTvSeries = action.payload;
    });
  },
});

export default TvByIDSlice.reducer;
