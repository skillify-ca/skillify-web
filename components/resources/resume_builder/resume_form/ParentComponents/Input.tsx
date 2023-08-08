// Input: For one line inputs

import React, { useState, useRef } from 'react';

interface InputProps<K extends string, V extends string | string[]> { label: string; labelClassName?: string; name: K;
  value?: V;
  placeholder: string;
  onChange: (name: K, value: V) => void;
}


export const InputGroupWrapper = ({ label, className, children, }: {
  label: string;
  className?: string;
  children?: React.ReactNode;
}) => (
  <label className={`text-base font-medium text-gray-700 ${className}`}>
    {label}
    {children}
  </label>
);



// export const Input = ({ name, value='', placeholder, onChange, label, labelClassName }) => {

//   const [text, setText] = useState('');

//     const handleInputChange = (event) => {
//         const { value } = event.target;
//         setText(value);
//     };

//   return (
//     <InputGroupWrapper label={label} className={labelClassName}>
//       <input
//         type="text"
//         name={name}
//         value={text}
//         placeholder={placeholder}
//         // onChange={(event) => onChange(event.target.value)}
//         onChange={(e) => onChange(name, e.target.value)}
//         className={INPUT_CLASS_NAME}
//       />
//     </InputGroupWrapper>
//   );
// };

export const Input = <K extends string>({
  name,
  value = "",
  placeholder,
  onChange,
  label,
  labelClassName,
}: InputProps<K, string>) => {
  return (
    <InputGroupWrapper label={label} className={labelClassName}>
      <input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(name, e.target.value)}
        className={INPUT_CLASS_NAME}
      />
    </InputGroupWrapper>
  );
};

export const TextArea = ({ name, classname, value = "", placeholder, onChange, }) => {

  return (
    <InputGroupWrapper label={name} className={classname}>
      <textarea
        ref={useRef()}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      />
    </InputGroupWrapper>
  );
};

// Text area is for when you need multi-line inputs 


export const INPUT_CLASS_NAME = "mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm text-base";

