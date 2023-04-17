import { quizResultsData } from "../../../../pages/api/studentPortal/quizzes/firstProgrammingLanguage";
import { getPreferredLanguageForQuizResults } from "../../../../pages/api/studentPortal/quizzes/scoringLogicFPL/computeScore";
import { Button } from "../../../ui/Button";
import SkillifyNavbar from "../shared/SkillifyNavbar";

type LanguageResultsProps = {
  onBackClick: () => void;
  score: LanguageQuizResultsMap;
};

export type LanguageQuizResultsMap = Record<string, number>;

const LanguageResults = ({ onBackClick, score }: LanguageResultsProps) => {
  const preferredLanguage = getPreferredLanguageForQuizResults(score);

  const resultData = quizResultsData[preferredLanguage];
  if (!resultData) {
    return <div>Error: Language not found.</div>;
  }

  const { body, src, alt, language } = resultData;

  return (
    <div className="flex flex-col w-full text-center">
      <SkillifyNavbar onBackClick={onBackClick} hidden={false} />
      <div className="mt-4 text-2xl font-bold text-black-600">YOUR RESULTS</div>
      <div className="text-lg font-semibolds px-3">{body}</div>
      <img src={src} alt={alt} className="scale-75" />
      <div className="text-4xl font-bold text-amber-500">{language}</div>
      <div className="mx-4 mt-4 text-xl font-semibold">
        Start learning to code with a Skillify coach today!
      </div>
      <div className="flex flex-col items-center py-4 space-y-3 rounded-full">
        <Button label="Book a call" backgroundColor="yellow" />
        <Button label="Learn more" backgroundColor="blue" />
      </div>
      <div className="mx-4">
        Skillify Coding Academy coaches university graduates to start a career
        in tech. Book a free call with one of our expert coaches to discuss the
        best strategy plan for you.
      </div>
    </div>
  );
};

export default LanguageResults;
