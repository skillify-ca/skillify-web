import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import type { Resume, ResumeProfile, ResumeWorkExperience, ResumeEducation, ResumeRaw, } from "./types";

export const initialProfile: ResumeProfile = {
    name: "",
    email: "",
    phone: "",
    websites: [],
    skills: "",
};

export const initialWorkExperience: ResumeWorkExperience = {
    company: "",
    location: "",
    jobTitle: "",
    date: "",
    descriptions: "",
};

export const initialEducation: ResumeEducation = {
    school: "",
    degree: "",
    date: "",
    grade: "",
};

export const initialRaw: ResumeRaw = {
    sectionsRaw: [],
    rawText: "",
};

export const initialResumeState: Resume = {
    profile: initialProfile,
    workExperiences: initialWorkExperience,
    educations: initialEducation,
    rawText: initialRaw,
    file: null,
}

export const resumeSlice = createSlice({
    name: "resume",
    initialState: initialResumeState,
    reducers: {
        changeProfile: (state, action: PayloadAction<{ key: string; value: any }>) => {
            const { key, value } = action.payload;
            if (key == "name") { state.profile.name = value; }
            else if (key == "email") { state.profile.email = value; }
            else if (key == "phone") { state.profile.phone = value; }
            else if (key == "websites") { state.profile.websites = value; }
            else if (key == "skills") { state.profile.skills = value; }
        },
        changeWorkExperience: (state, action: PayloadAction<{ key: string; value: any }>) => {
            const { key, value } = action.payload;
            if (key == "company") { state.workExperiences.company = value; }
            else if (key == "location") { state.workExperiences.location = value; }
            else if (key == "jobTitle") { state.workExperiences.jobTitle = value; }
            else if (key == "date") { state.workExperiences.date = value; }
            else if (key == "descriptions") { state.workExperiences.descriptions = value; }
        },
        changeEducation: (state, action: PayloadAction<{ key: string; value: any }>) => {

        },
        changeRaw: (state, action: PayloadAction<{ key: string; value: any }>) => {
            const { key, value } = action.payload;
            if(key == "sectionsRaw"){state.rawText.sectionsRaw = value}
            else if(key == "rawText"){state.rawText.rawText = value}
        },
        changeFile: (state, action: PayloadAction<{ key: string; value: any }>) => {

        },


    }
});

// export actions
export const { changeProfile, changeWorkExperience, changeEducation, changeRaw, changeFile } = resumeSlice.actions;

// selectors
export const selectResume = (state: RootState) => state.resume;
export const selectProfile = (state: RootState) => state.resume.profile;
export const selectWorkExperiences = (state: RootState) => state.resume.workExperiences;
export const selectEducations = (state: RootState) => state.resume.educations;
export const selectRawtext = (state: RootState) => state.resume.rawText;
export const selectFile = (state: RootState) => state.resume.file;

// export the reducer
export default resumeSlice.reducer;

// export const resumeSlice = createSlice({
//     name: "resume",
//     initialState: initialResumeState,
//     reducers: {
//         // the key MUST match a resumeprofile key, such as websites, phone. make sure spelling is correct
//         changeProfile: (state, action: PayloadAction<{ key: keyof ResumeProfile; value: any }>) => {
//             const { key, value } = action.payload;
//             if (typeof value === typeof state.profile[key]) {
//                 state.profile[key] = value;
//             }
//             else {
//                 throw new Error("wrong type");
//             }
//         },
//         changeWorkExperience: (state, action: PayloadAction<{ key: keyof ResumeWorkExperience; value: any }>) => {
//             const { key, value } = action.payload;
//             if (typeof value === typeof state.profile[key]) {
//                 state.workExperiences[key] = value;
//             }
//             else {
//                 throw new Error("wrong type");
//             }
//         },
//         changeEducation: (state, action: PayloadAction<{ key: keyof ResumeEducation; value: any }>) => {
//             const { key, value } = action.payload;
//             if (typeof value === typeof state.profile[key]) {
//                 state.educations[key] = value;
//             }
//             else {
//                 throw new Error("wrong type");
//             }
//         },
//         changeRaw: (state, action: PayloadAction<{ key: keyof ResumeRaw; value: any }>) => {
//             const { key, value } = action.payload;
//             if (typeof value === typeof state.profile[key]) {
//                 state.rawText[key] = value;
//             }
//             else {
//                 throw new Error("wrong type");
//             }
//         },
//         changeFile: (state, action: PayloadAction<File>) => {
//             state.file = action.payload
//         },

//     }
// });