import { ReactNode } from "react";

export interface SingleQuestionInputProps {
  question: string;
  answer: string;
}

export const SingleQuestionInput = ({
  question,
  answer,
}: SingleQuestionInputProps) => {
  return (
    <div>
      <div className={"flex flex-nowrap gap-x-2"}>
        {question}
        <div className={"flex gap-x-2 "}>
          <div>
            <label>
              <input
                type="text"
                value={answer}
                className={"gap-x-2 bg-gray-50"}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
