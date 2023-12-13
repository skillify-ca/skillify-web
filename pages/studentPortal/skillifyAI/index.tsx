import React from "react";
import ConversationScreen from "../../../components/studentPortal/skillifyAI/ConversationComponent";
import InputComponent from "../../../components/studentPortal/skillifyAI/InputComponent";

const SkillifyAI = () => {
  return (
    <div>
      <div className="bg-backgroundSecondary h-screen w-full flex flex-col ">
        <ConversationScreen />
        <InputComponent />
      </div>
    </div>
  );
};

export default SkillifyAI;
