import { ReactNode } from "react";

export interface SingleQuestionInputProps {
  value: number | string;
  type: string;
  name: string;
  onChange: (e: any) => void;
}

export const SingleQuestionInput = ({
  value,
  type,
  name,
  onChange,
}: SingleQuestionInputProps) => {
  return (
    <div>
<<<<<<< HEAD
      <div className={"flex flex-nowrap gap-x-2 rounded-xl w-1/4"}>
        <div>
=======
      <div className={"flex flex-nowrap gap-x-2 rounded-xl"}>
        <div className={"flex gap-x-2 "}>
>>>>>>> main
          <label>
            <input
              type={type}
              value={value}
              name={name}
<<<<<<< HEAD
              className={"gap-x-2 bg-gray-100 rounded-md w-36"}
=======
              className={"gap-x-2 bg-gray-100"}
>>>>>>> main
              onChange={onChange}
            />
          </label>
        </div>
      </div>
    </div>
  );
};
