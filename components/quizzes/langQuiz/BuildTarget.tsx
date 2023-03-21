import Progress from "../../../components/quizzes/langQuiz/Progress";
import Skills from "../../../components/quizzes/langQuiz/SkillSelections";
import QuizNavbar from "../../../components/quizzes/QuizNavbar";
import { Button } from "../../../components/ui/Button";

function BuildTarget() {
  return (
    <>
      <QuizNavbar />
      <div className="flex flex-col items-center px-8">
        <Progress progress={0} />
        <div className="mt-4 text-2xl font-bold text-center text-black-600">
          What field of work are you interested in?
        </div>
        <div className="text-lg font-semibolds px-3">
          Select all that apply.
        </div>
        <Skills
          selections={[
            "Websites",
            "Storefront",
            "Mobile apps",
            "Games",
            "Email",
            "Tools to automate your life",
            "I don't know / Not sure yet",
          ]}
        />
        <Button label="Next" />
      </div>
    </>
  );
}

export default BuildTarget;
