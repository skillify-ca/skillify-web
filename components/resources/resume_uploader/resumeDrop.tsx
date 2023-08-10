import React, { useState } from 'react'
import { selectResume } from "./redux/resumeSlice"
import { useAppDispatch, useAppSelector } from "./redux/hooks"

export const ResumeDrop = () => {

    const [isHover, setHover] = useState(false);
    const [hasPdfFile, setHasPdfFile] = useState(false);
    const [fileUrl, setFileURL] = useState("");

    const [selectedFile, setSelectedFile] = useState(null);
    const dispatch = useAppDispatch();
    const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const inputFile = event.dataTransfer.files[0];
        if (inputFile.name.endsWith(".pdf")) {
            setSelectedFile(inputFile);
            dispatch({ type: "uploadPDF", payload: URL.createObjectURL(inputFile) });
            setHasPdfFile(true);
        }
        else {
        }
        setHover(false);
    }

    const onButtonInput = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setHasPdfFile(true);
    };

    const onInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files) return;
        const inputFile = files[0];
        if (inputFile.name.endsWith(".pdf")) {
            setSelectedFile(inputFile);
            dispatch({ type: "uploadPDF", payload: URL.createObjectURL(inputFile) });
            setHasPdfFile(true);
        }
        setHover(false);

    };


    const hoverStyling = isHover && "border-orange-500"
    const hasPDFStyling = hasPdfFile && "PDF File Received"
    const dropBoxStyling = "flex flex-col justify-center items-center gap-y-3 content-center rounded-md border-2 border-dashed border-gray-600 mt-5 p-6"


    return (
        <div className={`${dropBoxStyling} ${hoverStyling}`}
            onDrop={onDrop}
            onDragOver={(event) => { event.preventDefault(); setHover(true); }}
            onDragLeave={() => setHover(false)}
        >
            <div className='text-md font-semibold pt-3 text-gray-700'>
                Browse a pdf file or drop it here
            </div>
            <div>{hasPDFStyling}</div>
            <label className="rounded-full border p-3 pt-4">
                Browse File
                <input
                    type="file"
                    className="sr-only"
                    accept=".pdf"
                    onChange={onInputChange}
                />
            </label>
        </div>
    );
};