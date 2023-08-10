import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import type { Resume } from "./types";

export const initialState: Resume = {
    userResumeURL: "https://laverne.edu/careers/wp-content/uploads/sites/15/2010/12/Undergraduate-Student-Resume-Examples.pdf",
    jobDescription: "",
};

export const selectResume = (state: RootState) => state.resume;

export default function resumeReducer(state = initialState, action: PayloadAction<string>) {
    switch (action.type) {
        case "uploadPDF": {
            return {
                ...state,
                userResumeURL: action.payload,
                jobDescription: state.jobDescription
            }
        }
        case "updateText": {
            return {
                ...state,
                userResumeURL: state.userResumeURL,
                jobDescription: action.payload
            }
        }
        // case "updateURL": {
        //     return {
        //         userResumeURL: state.userResumeURL,
        //         jobDescription: state.jobDescription
        //     }
        // }
        default:
            return state
    }
};