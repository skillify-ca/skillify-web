import { useRouter } from "next/router";
import React from "react";
import SkillSelection from "../../components/quizzes/skillselection";
import { Button } from "../../components/ui/Button";
import ProgressBar from "../studentPortal/quizcomponent/progressbar";
import QuizNavbar from "../studentPortal/quizcomponent/quiznavbar";
const QuizComponent = () => {
  const router = useRouter();
  return (
    <div className="w-full  space-y-4 ">
      <QuizNavbar />
      <div className="px-4 flex flex-col items-center ">
        <ProgressBar progress={35} />

        <div className=" flex flex-col items-center  py-4 ">
          <h1 className="text-2xl font-bold text-center">
            What industries are you interested in working?
          </h1>

          <p className="text-lg font-medium px-4 ">Select 1-3 choices</p>
          <SkillSelection
            selections={[
              "Advertising",
              "Cybersecurity",
              "Digital Media",
              "Design",
              "E-commerce",
              "Entertainment",
              "Fashion",
              "Finance",
              "Healthcare",
              "Real Estate",
              "Technology",
              "Video Games",
              "Science",
              "Not Sure Yet",
            ]}
          />
        </div>
        <Button
          backgroundColor="yellow"
          label="Next"
          onClick={() => router.push("/careerQuiz/skills")}
        />
      </div>
    </div>
  );
};

QuizComponent.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
export default QuizComponent;
