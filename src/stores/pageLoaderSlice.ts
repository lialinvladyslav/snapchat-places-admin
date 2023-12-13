import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface PageLoaderState {
  value: boolean;
}

const initialState: PageLoaderState = {
  value: false,
};

export const pageLoaderSlice = createSlice({
  name: "pageLoader",
  initialState,
  reducers: {
    setPageLoader: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setPageLoader } = pageLoaderSlice.actions;

export const selectPageLoader = (state: RootState) => {
  return state.pageLoader.value;
};

export default pageLoaderSlice.reducer;
