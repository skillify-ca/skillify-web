import { useState } from 'react';
import { Provider } from 'react-redux'
import { store } from "../../../components/resources/resume_builder/redux_lib/store"
import LandingNavbar from "../../../components/landingPage/LandingNavbar";

import { Button } from "../../../components/ui/Button"

import UserInput from "../../../components/resources/resume_builder/resume_form/UserInput"
import Resume from "../../../components/resources/resume_builder/Resume"
import ProgressBar from "../../../components/resources/resume_builder/ProgressBar"


export default function resume_builder() {

    // Backend for progress bar
    const [currentStage, setCurrentStage] = useState('Name and contact info');

    const [currentState, setCurrentState] = useState('first');
    const handleClick = () => {
        setCurrentState('second')
    };

    const options = ['Software Engineering', 'Computer Engineering', 'AI Developer', 'Product Manager'];

    if (currentState == 'first') {
        return (
            <div className='flex justify-center h-full'>
                <select className='mx-6'>
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Computer Engineering">Computer Engineering</option>
                    <option value="AI Developer">AI Developer</option>
                </select>
                <div className='mx-6'>
                    <Button label="Build Resume" onClick={handleClick}></Button>
                </div>
            </div>
        );
    } else {
        return (
            // Full screen
            <Provider store={store}>
                <div className="h-full w-full">
                    {/* Top part without progress bar*/}
                    <div className="max-h-screen grid grid-cols-3 md:grid-cols-6 overflow-hidden">
                        {/* Left side with user input */}
                        <div className="col-span-3">
                            <UserInput />
                        </div >
                        {/* Right side with pdf generated */}
                        <div className="col-span-3">
                            <Resume />
                        </div>
                    </div>
                    {/* <ProgressBar currentStage={currentStage} /> */}
                </div>
                <ProgressBar currentStage={currentStage} />
            </Provider>
        );
    }
}

resume_builder.getLayout = function getLayout(page) {
    return (
        <div className="theme-default">
            <LandingNavbar />
            {page}
        </div>
    );
};