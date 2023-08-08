import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import type { Resume } from "./types";

export const initialState: Resume = {
    userResume: null,
    jobDescription: "",
};

export const selectResume = (state: RootState) => state.resume;


export default function resumeReducer(state = initialState, action: PayloadAction<{ value: any }>) {
    switch (action.type) {
        case "uploadPDF": {
            return {
                userResume: action.payload,
                jobDescription: state.jobDescription
            }
        }
        case "updateText": {
            return {
                userResume: state.userResume,
                jobDescription: action.payload
            }
        }
        default:
            return state
    }
};


// export const { changeResume, changeJobDescription } = resumeSlice.actions;
// export const selectJobDescription = (state: RootState) => state.resume.jobDescription;
// export const selectUserResume = (state: RootState) => state.resume.userResume;
// export default resumeSlice.reducer;