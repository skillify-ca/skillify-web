import React from "react";
import ConversationScreen from "../../../components/studentPortal/skillifyAI/ConversationComponent";
import InputComponent from "../../../components/studentPortal/skillifyAI/InputComponent";

const SkillifyAI = () => {
  return (
    <div className="bg-backgroundSecondary md:scale-115 h-screen w-screen mb-12  flex flex-col ">
      <ConversationScreen />
      <InputComponent />
    </div>
  );
};

export default SkillifyAI;
