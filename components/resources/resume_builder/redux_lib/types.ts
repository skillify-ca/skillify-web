export interface ResumeProfile {
    name: string;
    email: string;
    phone: string;
    url: string;
    location: string;
}

export interface ResumeWorkExperience {
    company: string;
    jobTitle: string;
    date: string;
    descriptions1: string;
    descriptions2: string;
}

export interface ResumeEducation {
    school: string;
    degree: string;
    date: string;
    gpa: string;
}

export interface ResumeProject {
    project: string;
    date: string;
    descriptions: string;
}


export interface Resume {
    profile: ResumeProfile;
    workExperiences: ResumeWorkExperience;
    educations: ResumeEducation;
    projects: ResumeProject;
}

export type ResumeKey = keyof Resume;