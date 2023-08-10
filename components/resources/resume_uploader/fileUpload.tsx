import React, { useState } from 'react'
import { selectResume } from "./redux/resumeSlice"
import { useAppDispatch, useAppSelector } from "./redux/hooks"

export const FileUpload = ({}) => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const dispatch = useAppDispatch();
    const handleUpload = (value: any) => {
        if (selectedFile) {
            dispatch({type:"uploadPDF", payload: selectedFile});
        }
    };

    return (
        <div>
            <h1>Upload your PDF</h1>
            <input type="file" accept=".pdf" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload PDF</button>
        </div>
    );

}