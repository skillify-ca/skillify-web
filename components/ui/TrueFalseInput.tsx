import { ReactNode } from "react";

export interface TrueFalseProps {
  question: string;
  option1: string; // Yes, True or Optional
  option2: string; // No, False or Optional
}

export const TrueFalse = ({ question, option1, option2 }: TrueFalseProps) => {
  return (
    <div>
      {/*Q1 Radio */}
      <div className={"flex flex-nowrap gap-x-2"}>
        {question}
        <div className={"flex gap-x-2 "}>
          <div>
            <label>
              <input type="radio" value={option1} className={"gap-x-2"} />
              {option1}
            </label>
          </div>
          <div className={""}>
            <label>
              <input type="radio" value={option2} className={"gap-x-2"} />
              {option2}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
