import { Button } from "../../ui/Button";

import SkillifyNavbar from "./SkillifyNavbar";
type StartQuizProps = {
  onNextClick: () => void;
  title: string;
  body: string;
};

const StartQuiz = ({ onNextClick, body, title }: StartQuizProps) => {
  return (
    <div className="w-full space-y-4 ">
      <SkillifyNavbar hidden={true} onBackClick={() => ""} />

      <div className="flex justify-center p-4 ml-16 "></div>
      <div className="flex flex-col items-center px-4 space-y-6 text-center">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="px-3 text-xl font-medium">{body}</p>
        <div className="space-y-2 text-xl text-left">
          <h3>First Name</h3>{" "}
          <input
            type="text"
            name="name"
            className="px-6 border border-gray-500 rounded-lg shadow appearance-none"
          ></input>
          <h3>Email Address</h3>{" "}
          <input
            type="email"
            name="email"
            className="px-6 border border-gray-500 rounded-lg shadow appearance-none"
          ></input>
        </div>
        <Button
          backgroundColor="yellow"
          label="Start Quiz"
          onClick={onNextClick}
        />
      </div>
    </div>
  );
};
StartQuiz.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};

export default StartQuiz;
