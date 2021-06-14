import { ReactNode, useState } from "react";
import { Skill } from "../../pages/api/skill";
import { getHintForTopic } from "./HintContent";

export interface HintProps {
  skill: Skill;
  class?: string;
}

const Hint = ({ skill }: HintProps) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <div>
      <img
        onClick={() => setVisibility(!visibility)}
        src="/images/brainHint.png"
        className="w-72 transform -translate-y-24 translate-x-4 "
      />
      {visibility && getHintForTopic(skill)}
    </div>
  );
};

export default Hint;
