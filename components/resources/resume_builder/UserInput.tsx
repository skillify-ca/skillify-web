import { useState } from "react";
import ProfileInput from "./ProfileInput";
import EducationInput from "./EducationInput";
import WorkInput from "./WorkInput";
import ProjectInput from "./ProfileInput";
export const UserInput = () => {

    // To be implemented later
    const [isHovering, setIsHovering] = useState(false);

    return (
    <div className="hover:overflow-scroll justify-center scrollbar scrollbar-track-gray-100 scrollbar-w-3 md:justify-end md:overflow-y-scroll scrollbar-thumb-gray-200">
        <div className="flex max-w-2xl flex-col gap-10">
            <ProfileInput />
            <EducationInput />
            <WorkInput />
            <ProjectInput />
        </div>
    </div>
    );
}

export default UserInput