import { ReactNode, useState } from "react";
import { Skill } from "../../pages/api/skill";
import { getHintForTopic } from "./HintContent";

export interface HintProps {
  skill: Skill;
  class?: string;
}

const Hint = ({ skill }: HintProps) => {
  return (
    <div>
      {getHintForTopic(skill)}
    </div>
  );
};

export default Hint;
