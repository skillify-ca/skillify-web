// Input: For one line inputs

import React, { useState, useRef } from 'react';

export const InputGroupWrapper = ({
    label,
    className,
    children,
}: {
    label: string;
    className?: string;
    children?: React.ReactNode;
}) => (
    <label className={`text-base font-medium text-gray-700 ${className}`}>
        {label}
        {children}
    </label>
);

export const Input = ({ name, placeholder, classname }) => {

    const [text, setText] = useState('');

    const handleInputChange = (event) => {
        const { value } = event.target;
        setText(value);
    };

    return (
        <InputGroupWrapper label={name} className={classname}>
            <input
                type="text"
                name={name}
                value={text}
                placeholder={placeholder}
                onChange={handleInputChange}
                className={INPUT_CLASS_NAME}
            />
        </InputGroupWrapper>
    );
};

// Text area is for when you need multi-line inputs 

export const TextArea = ({ name, placeholder, classname }) => {

    const [text, setText] = useState('');

    const handleInputChange = (event) => {
        const { value } = event.target;
        setText(value);
    };

    return (
        <InputGroupWrapper label={name} className={classname}>
            <textarea
                ref={useRef()}
                name={name}
                value={text}
                placeholder={placeholder}
                onChange={handleInputChange}
                className={INPUT_CLASS_NAME}
            />
        </InputGroupWrapper>
    );
};


export const INPUT_CLASS_NAME = "mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm text-base";

