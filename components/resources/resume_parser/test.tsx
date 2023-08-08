import { useState } from 'react';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import React from 'react';
import { selectResume } from "./redux/resumeSlice"
import { useAppSelector } from './redux/hooks';
    
import { updateState } from './updateState';
import type { ResumeRaw } from "./redux/types";

export const Test_parser = () => {

    const resume = useAppSelector(selectResume);
    updateState(null);
    const { sectionsRaw, rawText } = resume.rawText

    return (
        <div>
            <text>{rawText}</text>
        </div>
    );
};