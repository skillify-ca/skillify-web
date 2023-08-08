import React, { useState } from 'react'
import { selectResume } from "./redux/resumeSlice"
import { useAppDispatch, useAppSelector } from "./redux/hooks"

export const JobDescription = ({ }) => {

    const [text, setText] = useState('');
    const dispatch = useAppDispatch();

    const handleChange = (e) => {
        setText(e.target.value);
        dispatch({ type: 'updateText', payload: text })
    }

    return (
        <textarea
            onChange={handleChange}
            value={text}
        />
    );

}