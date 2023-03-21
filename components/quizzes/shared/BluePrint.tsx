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
    <div className="w-full space-y-4">
      <SkillifyNavbar hidden={false} onBackClick={onBackClick} />

      <div className="w-full mb-4 text-center">
        <div className="w-full h-2 px-4 mb-2 rounded-lg bg-black-600">
          {" "}
          <ProgressBar progress={100} />
        </div>
        <div className="mt-8 mb-2 text-2xl font-bold text-black-600">
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
      <div className="grid py-8 place-items-center">
        <Button
          label="View results"
          onClick={onNextClick}
          backgroundColor="yellow"
        />
      </div>
    </div>
  );
};

BluePrint.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
export default BluePrint;
