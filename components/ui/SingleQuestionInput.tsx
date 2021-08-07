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
      <div className={"flex flex-nowrap gap-x-2 rounded-xl w-1/4"}>
        <div>
          <label>
            <input
              type={type}
              value={value}
              name={name}
              className={"gap-x-2 bg-gray-100 rounded-md w-36"}
              onChange={onChange}
            />
          </label>
        </div>
      </div>
    </div>
  );
};
