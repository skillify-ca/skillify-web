import React, { useState } from "react";
import ProfileInput from "./ProfileInput";
import EducationInput from "./EducationInput";
import WorkExperienceInput from "./WorkExperienceInput";
import ProjectInput from "./ProjectInput";
export const UserInput = () => {

    return (
        <div className="overflow-y-scroll h-screen justify-center">
            <div className="flex max-w-2xl flex-col gap-10">
                <ProfileInput />
                <EducationInput />
                <WorkExperienceInput />
                <ProjectInput />
            </div>
        </div>
    );
}

export default UserInput