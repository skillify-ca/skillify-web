import React, { useRef, useState } from "react";
import { AnswerType } from "../../pages/api/question";
import { QuestionType } from "../../pages/api/questionTypes";
import { Skill, Topic } from "../../pages/api/skill";
import { createWordProblemModel } from "../../pages/api/WordProblemModel";
import { Button } from "./Button";
import { Input } from "./Input";
import Toggle from "./Toggle";
import { WordProblemAdd } from "./WordProblemAdd";

type DiagnosticTestFormProps = {
  onClick: (grade: string) => void;
};

const DiagnosticTestForm = ({ onClick }: DiagnosticTestFormProps) => {
  const [grade, setGrade] = useState("Grade 3");
  const [wordProblem, setWordProblem] = useState(createWordProblemModel("+"));
  const onGradeChange = (e: any) => {
    setGrade(e.target.value);
  };

  const onSubmit = () => {
    setWordProblem(createWordProblemModel("+"));
  };
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col items-center bg-white shadow-lg gap-8 rounded-lg p-4">
        <p className="text-xl font-bold">Math Champ Assessment</p>
        <div className="flex flex-col gap-4 sm:max-w-2xl">
          <p>
            This summative assessment helps you discover your child's level in
            math. Find out exactly where they have gaps in the Ontario
            curriculum (if any).
          </p>
          <p>
            At the end of the test we provide you with personalized resources to
            help your child get better at math no matter what level they are at.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center w-full gap-4">
          <p className="font-bold text-gray-700">Grade</p>
          <div className="relative inline-flex">
            <svg
              className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                fill="#648299"
                fill-rule="nonzero"
              />
            </svg>
            <select
              value={grade}
              onChange={onGradeChange}
              className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            >
              <option>Grade 1</option>
              <option>Grade 2</option>
              <option>Grade 3</option>
            </select>
          </div>
        </div>

        <Button
          backgroundColor="blue"
          label="Start"
          textColor="white"
          onClick={(e) => onClick(grade)}
        />
      </div>
      <div className="bg-white shadow-lg flex flex-col sm:flex-row justify-between rounded-lg">
        <div className="flex flex-col gap-4 p-8 sm:w-1/2 bg-blue-50">
          <p className="font-bold">Step 1</p>
          <p className="font-bold text-xl">Take the Math Champ Assessment</p>
          <p>
            During this quick assessment, your child will answer 36 questions
            from the Ontario curriculum.
          </p>
        </div>
        <div className="sm:w-1/2 m-4 p-4">
          <WordProblemAdd
            autofocus={false}
            submitGuess={(it) => {
              onSubmit();
            }}
            question={{
              text: "3 + 3",
              answer: "6",
              answerType: AnswerType.NUMBER,
              questionType: QuestionType.BINARY_WORD_PROBLEM,
              skill: Skill.ADDITION_SINGLE,
              wordProblem: wordProblem,
            }}
          />
        </div>
      </div>
      <div className="bg-blue-50 shadow-lg flex flex-col sm:flex-row justify-between rounded-lg">
        <img
          src="/diagnostic/diagnostic-sample-report.gif"
          className="sm:w-1/2 sm:rounded-l-lg rounded-t-lg"
        />{" "}
        <div className="flex flex-col gap-4 p-8 sm:w-1/2">
          <p className="font-bold">Step 2</p>
          <p className="font-bold text-xl">Get Your Personalized Report</p>
          <p>
            Your customized Math Champ report will give you the insights and
            supplemental worksheets you need for your child.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticTestForm;
