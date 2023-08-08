export interface ResumeProfile {
    name: string;
    email: string;
    phone: string;
    websites: string[];
    skills: string;
}

// "resumes" -> "data" ->  "workExperience"
export interface ResumeWorkExperience {
    company: string; // "organization"
    location: string; // location -> rawinput
    jobTitle: string; // "jobTitle"
    date: string; // "dates" -> "rawText"
    descriptions: string; // "jobDescription"
}

export interface ResumeEducation {
    school: string;
    degree: string;
    date: string;
    grade: string;
}

export interface ResumeRaw {
    sectionsRaw: string[];
    rawText: string;
}

export interface Resume {
    profile: ResumeProfile;
    workExperiences: ResumeWorkExperience;
    educations: ResumeEducation;
    rawText: ResumeRaw;
    file: File;
}

export type ResumeKey = keyof Resume;