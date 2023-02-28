import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

export enum Theme {
  DEFAULT = "theme-default",
  DRACULA = "theme-dracula",
}

export type ThemeState = {
  currentTheme: Theme;
};

const initialState: ThemeState = {
  currentTheme: Theme.DRACULA,
};

export const themeSlice: Slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state: ThemeState, action: PayloadAction<Theme>) => {
      if (action.type == "theme/setTheme") {
        return {
          currentTheme: action.payload,
        };
      }
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;

export const themeSelector = (state: RootState) => state.themeState;
