import { useState, useMemo } from "react";
import { selectResume } from './redux_lib/resumeSlice';
import { selectSettings } from './redux_lib/settingSlice';
import { useAppSelector } from './redux_lib/hook';
import { ResumePDF } from './resume_pdf/resume_pdf';
import { DownloadButton } from "./resume_pdf/DownloadButton";
import ProgressBar from "./ProgressBar";

const Resume = () => {

    const resume = useAppSelector(selectResume);
    const settings = useAppSelector(selectSettings);

    const [currentStage, setCurrentStage] = useState('Name and contact info');

    return (
        <div className="relative flex md:grid-rows-12">
            <div className="rows-span-11">
                <ResumePDF resume={resume} settings={settings} />
            </div>
            <div className="fixed-bottom-0 rows-span-1">
              <DownloadButton document={<ResumePDF resume={resume} settings={settings} />}></DownloadButton>
            </div>
        </div>
    );

}

export default Resume;