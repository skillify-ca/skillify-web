import { Button } from "../../ui/Button";
import SkillifyNavbar from "../shared/SkillifyNavbar";

type LangResultsProps = {
  onBackClick: () => void;
  score: { [key: string]: number };
};

const LangResults = ({ onBackClick, score }: LangResultsProps) => {
  let preferredLang = "";
  let maxVal = 0;
  for (const [language, scoreValue] of Object.entries(score)) {
    if (scoreValue > maxVal) {
      maxVal = scoreValue;
      preferredLang = language;
    }
  }

  const results = {
    JavaScript: {
      body: "The first coding language you should learn is...",
      src: "/images/quiz/languages-quiz/javascript.png",
      alt: "JavaScript",
      lang: "JavaScript",
      size: "scale-75",
    },
    Python: {
      body: "The first coding language you should learn is...",
      src: "/images/quiz/languages-quiz/python.png",
      alt: "Python",
      lang: "Python",
      size: "scale-75",
    },
    HTMLCSS: {
      body: "The first coding languages you should learn are...",
      src: "/images/quiz/languages-quiz/htmlcss.png",
      alt: "HTML/CSS",
      lang: "HTML / CSS",
      size: "scale-75",
    },
  };

  const { body, src, alt, lang, size } = results[preferredLang];

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto text-center md:mr-12">
      <SkillifyNavbar onBackClick={onBackClick} hidden={false} />
      <div className="mt-4 text-2xl font-bold text-black-600">YOUR RESULTS</div>
      <div className="text-lg font-semibolds px-3">{body}</div>
      <img src={src} alt={alt} className={size} />
      <div className="text-3xl font-bold text-brandPrimary">{lang}</div>
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
export default LangResults;
