import Skills from "../../../components/quizzes/langQuiz/SkillSelections";
import QuizNavbar from "../../../components/quizzes/QuizNavbar";
import { Button } from "../../../components/ui/Button";
import Progress from "../shared/Progress";

function LearnCoding() {
  return (
    <>
      <QuizNavbar />
      <div className="flex flex-col items-center px-8">
        <Progress progress={0} />
        <div className="mt-4 text-2xl font-bold text-center text-black-600">
          Why do you want to learn coding?
        </div>
        <div className="text-lg font-semibolds px-3">
          Select all that apply.
        </div>
        <Skills
          selections={[
            "Learn an in-demand skill",
            "Work in tech",
            "Build programs for fun",
            "I run a startup",
            "Become a professional developer",
            "Communicate better with technical coworkers",
            "Start a side hustle",
          ]}
        />
        <Button label="Next" />
      </div>
    </>
  );
}

export default LearnCoding;
