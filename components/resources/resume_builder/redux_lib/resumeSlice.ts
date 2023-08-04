import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import type { Resume, ResumeEducation, ResumeProfile, ResumeProject, ResumeWorkExperience, } from "./types";

// Define initial states
export const initialProfile: ResumeProfile = {
    name: "",
    email: "",
    phone: "",
    url: "",
    location: "",
};

export const initialWorkExperience: ResumeWorkExperience = {
    company: "",
    jobTitle: "",
    date: "",
    descriptions1: "",
    descriptions2: "",
};

export const initialEducation: ResumeEducation = {
    school: "",
    degree: "",
    gpa: "",
    date: "",
};

export const initialProject: ResumeProject = {
    project: "",
    date: "",
    descriptions: "",
};

export const initialCustom = {
    descriptions: [],
};

export const initialResumeState: Resume = {
    profile: initialProfile,
    workExperiences: initialWorkExperience,
    educations: initialEducation,
    projects: initialProject,
};

export const resumeSlice = createSlice({
    name: "resume",
    // When the reducer is called for the first time
    initialState: initialResumeState,

    // reducers for updating state
    reducers: {
        changeProfile: (draft, action: PayloadAction<{ field: keyof ResumeProfile; value: string }>) => {
            const { field, value } = action.payload;
            draft.profile[field] = value;
        },
        changeWorkExperiences: (draft, action: PayloadAction<{field: keyof ResumeWorkExperience; value: string }>) => {
            const { field, value } = action.payload;
            draft.workExperiences[field] = value;
        },
        changeEducations: (draft, action: PayloadAction<{ field: keyof ResumeEducation; value: string }>) => {
            const { field, value } = action.payload;
            draft.educations[field] = value;
        },
        changeProjects: (draft, action: PayloadAction<{ field: keyof ResumeProject; value: string }>) => {
            const { field, value } = action.payload;
            draft.projects[field] = value;
        },

    }

});



export const { changeProfile, changeWorkExperiences, changeEducations, changeProjects,} = resumeSlice.actions;

export const selectResume = (state: RootState) => state.resume;
export const selectProfile = (state: RootState) => state.resume.profile;
export const selectWorkExperiences = (state: RootState) => state.resume.workExperiences;
export const selectEducations = (state: RootState) => state.resume.educations;
export const selectProjects = (state: RootState) => state.resume.projects;

export default resumeSlice.reducer;
