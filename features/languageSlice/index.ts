import { Language } from "@/utils/translate";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ILanguage {
  language: Language;
}
const initialState: ILanguage = {
  language: Language.en,
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
