import React from "react";
import ConversationScreen from "../../../components/studentPortal/skillifyAI/ConversationComponent";
import InputComponent from "../../../components/studentPortal/skillifyAI/InputComponent";

const SkillifyAI = () => {
  return (
    <div className="bg-backgroundSecondary md:scale-115 h-screen mb-12 w-full flex flex-col ">
      <ConversationScreen />
      <InputComponent />
    </div>
  );
};

export default SkillifyAI;
