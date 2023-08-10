import React, { useState } from "react";
import { selectResume } from "./redux/resumeSlice"
import { useAppSelector } from './redux/hooks';

export const ResumeDisplay = ({ }) => {

    const resume = useAppSelector(selectResume);
    const { userResumeURL, jobDescription } = resume

    return (
        <div  className="h-full m-10 space-y-5">
            <text> Your uploaded resume will show up here </text>
            <iframe src={`${userResumeURL}#navpanes=0`} className="h-full w-full" />
        </div>
    );
}