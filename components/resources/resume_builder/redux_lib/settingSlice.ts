import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store"

export interface Settings {
  themeColor: string;
  fontFamily: string;
  fontSize: string;
  documentSize: string;
  formToShow: {
    workExperiences: boolean;
    educations: boolean;
    projects: boolean;
  };
  formsOrder: ShowForm[];
  showBulletPoints: {
    educations: boolean;
    projects: boolean;
  };
}

export type ShowForm = keyof Settings["formToShow"];
export type GeneralSetting = Exclude<
  keyof Settings,
  "formToShow" | "formToHeading" | "formsOrder" | "showBulletPoints"
>;

export const DEFAULT_THEME_COLOR = "#38bdf8"; // sky-400
export const DEFAULT_FONT_FAMILY = "Roboto";
export const DEFAULT_FONT_SIZE = "12";
export const DEFAULT_FONT_COLOR = "#171717"; // text-neutral-800

export const initialSettings: Settings = {
  themeColor: DEFAULT_THEME_COLOR,
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: DEFAULT_FONT_SIZE,
  documentSize: "Letter",
  formToShow: {
    workExperiences: true,
    educations: true,
    projects: true,
  },
  formsOrder: ["workExperiences", "educations", "projects"],
  showBulletPoints: {
    educations: true,
    projects: true,
  },
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState: initialSettings,
  reducers: {

  },
});

export const selectSettings = (state: RootState) => state.settings;

export default settingsSlice.reducer;