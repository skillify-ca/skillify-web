// Default imports
import React, { useState } from 'react';
import LandingNavbar from "../../../components/landingPage/LandingNavbar";

// Imports from components
import UserInput from '../../../components/resources/resume_builder/UserInput';
import ProgressBar from "../../../components/resources/resume_builder/ProgressBar";
import ProfileInput from "../../../components/resources/resume_builder/ProfileInput";

export default function resume_builder(){

    // Backend for progress bar
    const [currentStage, setCurrentStage] = useState('Name and contact info');


    // Final return
    return (
        // Full screen
        <div className=" h-full w-full">
            {/* Top part without progress bar*/}
            <div className="max-h-screen grid grid-cols-3 md:grid-cols-6 overflow-hidden">
                {/* Left side with user input */}
                <div className="col-span-3">
                    <UserInput />
                </div >
                {/* Right side with pdf generated */}
                <div className="col-span-3">

                </div>
            </div>
            <ProgressBar currentStage={currentStage}/>
        </div>
    );
}


resume_builder.getLayout = function getLayout(page) {
    return (
        <div className="theme-default">
            <LandingNavbar />
            {page}
        </div>
    );
};