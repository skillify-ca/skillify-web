// https://react-redux.js.org/using-react-redux/usage-with-typescript 
import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./resumeSlice";
import settingsReducer from "./settingSlice";

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch