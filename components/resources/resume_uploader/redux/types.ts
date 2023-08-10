export interface Resume {
    userResumeURL: string;
    jobDescription: string;
}

export type ResumeKey = keyof Resume