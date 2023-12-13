import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const colorSchemes = [
  "default",
  "theme-1",
  "theme-2",
  "theme-3",
  "theme-4",
  "theme-5",
  "theme-6",
  "theme-7",
  "theme-8",
  "theme-9",
  "theme-10",
  "theme-11",
  "theme-12",
  "theme-13",
  "theme-14",
  "theme-15",
  "theme-16",
  "theme-17",
] as const;

export type ColorSchemes = (typeof colorSchemes)[number];

interface ColorSchemeState {
  value: ColorSchemes;
}

const getColorScheme = () => {
  const colorScheme = localStorage.getItem("colorScheme");
  return colorSchemes.filter((item, key) => {
    return item === colorScheme;
  })[0];
};

const initialState: ColorSchemeState = {
  value:
    localStorage.getItem("colorScheme") === null ? "default" : getColorScheme(),
};

export const colorSchemeSlice = createSlice({
  name: "colorScheme",
  initialState,
  reducers: {
    setColorScheme: (state, action: PayloadAction<ColorSchemes>) => {
      state.value = action.payload;
    },
  },
});

export const { setColorScheme } = colorSchemeSlice.actions;

export const selectColorScheme = (state: RootState) => {
  if (localStorage.getItem("colorScheme") === null) {
    localStorage.setItem("colorScheme", "default");
  }

  return state.colorScheme.value;
};

export default colorSchemeSlice.reducer;
