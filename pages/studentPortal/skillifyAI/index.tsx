import React from "react";
import ConversationComponent from "../../../components/studentPortal/skillifyAI/ConversationComponent";
import InputComponent from "../../../components/studentPortal/skillifyAI/InputComponent";
import MessageComponent from "../../../components/studentPortal/skillifyAI/MessageComponent";

const SkillifyAI = () => {
  return (
    <div>
      <div className="bg-backgroundSecondary h-full w-full">
        <div className="flex flex-col">
          <div className="flex justify-around">
            <MessageComponent>
              <ConversationComponent></ConversationComponent>{" "}
            </MessageComponent>{" "}
            <InputComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillifyAI;
