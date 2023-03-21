import { Button } from "../../ui/Button";
import NumberedCircles from "./NumberedCircles";
import ProgressBar from "./Progress";
import SkillifyNavbar from "./SkillifyNavbar";

type BluePrintProps = {
  onNextClick: () => void;
  onBackClick: () => void;
};

const BluePrint = ({ onNextClick, onBackClick }: BluePrintProps) => {
  return (
    <div>
      <SkillifyNavbar hidden={false} onBackClick={onBackClick} />
      <div className="w-full mb-4 px-8 text-center">
        <ProgressBar progress={100} />
        <div className="mt-4 mb-2 text-2xl font-bold text-black-600">
          The Skillify BluePrint
        </div>
      </div>
      <div className="grid grid-cols-[1fr_3fr] md:grid-cols-[1fr_7fr]">
        <div className="grid grid-cols-1 ml-8">
          <NumberedCircles />
        </div>
        <div className="grid grid-cols-1 mx-4 mr-16 space-y-8 md:space-y-12 md:mt-2">
          <div className="font-bold text-black-600 ">
            Learn the fundamentals of coding
          </div>
          <div className="font-bold text-black-600">
            Work on group projects with a team
          </div>
          <div className="font-bold text-black-600">
            Network with expert mentors in the industry
          </div>
          <div className="font-bold text-black-600 ">
            Ace coding interviews and get hired
          </div>
        </div>
      </div>
      <div className="grid py-6 place-items-center">
        <Button
          label="View results"
          onClick={onNextClick}
          backgroundColor="yellow"
        />
      </div>
    </div>
  );
};

export default BluePrint;
