import { ReactNode } from "react";

export interface SingleQuestionInputProps {
  answer;
  type: string;
  name: string;
}

export const SingleQuestionInput = ({
  answer,
  type,
  name,
}: SingleQuestionInputProps) => {
  return (
    <div>
      <div className={"flex flex-nowrap gap-x-2 rounded-xl"}>
        <div className={"flex gap-x-2 "}>
          <label>
            <input
              type={type}
              value={answer}
              name={name}
              className={"gap-x-2 bg-gray-100"}
            />
          </label>
        </div>
      </div>
    </div>
  );
};
