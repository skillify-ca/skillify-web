import React, { useState } from 'react'
import { selectResume } from "./redux/resumeSlice"
import { useAppDispatch, useAppSelector } from "./redux/hooks"

export const JobDescription = ({ }) => {

    const [text, setText] = useState('');
    const dispatch = useAppDispatch();

    const handleChange = (event) => {
        setText(event.target.value);
        dispatch({ type: 'updateText', payload: text })
    }

    return (
        <div className='mt-10'>
            <text>Enter the job description</text>
            <textarea
                className='border border-gray-500 text-base font-medium text-gray-700'
                onChange={handleChange}
                value={text}
            />
        </div>
    );

}