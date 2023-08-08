import { changeProfile, changeEducation, changeWorkExperience, changeRaw, changeFile } from "./redux/resumeSlice";
import { selectProfile, selectEducations, selectWorkExperiences, selectRawtext, selectFile } from "./redux/resumeSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { ResumeProfile, ResumeWorkExperience, ResumeEducation, ResumeRaw, Resume } from "./redux/types"


export const updateState = (file: File) => {
    const data = require('./affinda-parser-hGsRtCkP.json');

    const dispatch = useAppDispatch();
    const raw_selector = useAppSelector(selectRawtext);
    const { sectionsRaw, rawText } = raw_selector;

    const updateResumeRaw = (key: string, value: any) => {
        dispatch(changeRaw({ key, value }));
    };

    updateResumeRaw("rawText", data['resumes'][0]['data']['rawText']);
    updateResumeRaw("sectionsRaw", data['resumes'][0]['data']['sectionsRaw']);
}