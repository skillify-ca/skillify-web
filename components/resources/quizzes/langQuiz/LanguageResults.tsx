import React from "react";
import { Button } from "../../../ui/Button";
import SkillifyNavbar from "../shared/SkillifyNavbar";

type LanguageResultsProps = {
  onBackClick: () => void;
  score: LanguageQuizResultsMap;
};

type LanguageQuizResultsMap = Record<string, number>;

const LanguageResults = ({ onBackClick, score }: LanguageResultsProps) => {
  const getPreferredLanguageForQuizResults = (
    score: LanguageQuizResultsMap
  ) => {
    let maxScore = 0;
    let preferredLang = "";
    for (const [key, value] of Object.entries(score)) {
      if (value > maxScore) {
        maxScore = value;
        preferredLang = key;
      }
    }
    return preferredLanguage;
  };

  const preferredLanguage = getPreferredLanguageForQuizResults(score);

  type ResultData = {
    body: string;
    src: string;
    alt: string;
    language: string;
  };

  const results: { [key: string]: ResultData } = {
    JavaScript: {
      body: "The first coding language you should learn is...",
      src: "/images/quiz/languages-quiz/javascript.png",
      alt: "JavaScript",
      language: "JavaScript",
    },
    Python: {
      body: "The first coding language you should learn is...",
      src: "/images/quiz/languages-quiz/python.png",
      alt: "Python",
      language: "Python",
    },
    "HTML/CSS": {
      body: "The first coding languages you should learn are...",
      src: "/images/quiz/languages-quiz/htmlcss.png",
      alt: "HTML/CSS",
      language: "HTML/CSS",
    },
  };

  const resultData = results[preferredLanguage];
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
