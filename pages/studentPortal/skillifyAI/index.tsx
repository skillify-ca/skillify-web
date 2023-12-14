// SkillifyAI.tsx
import React, { useState } from "react";
import ConversationScreen from "../../../components/studentPortal/skillifyAI/ConversationComponent";
import InputComponent from "../../../components/studentPortal/skillifyAI/InputComponent";

const SkillifyAI = () => {
  const [messages, setMessages] = useState([
    {
      name: "John Doe",
      message: "Hello, this is the first message!",
      image: "/images/john_avatar.png",
    },
    {
      name: "Jane Smith",
      message: "Hi there! This is another message.",
      image: "/images/jane_avatar.png",
    },
    {
      name: "Bob Johnson",
      message: "Hey! Nice to meet you.",
      image: "/images/bob_avatar.png",
    },
  ]);

  const handleInputSubmit = (formattedMessage) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { name: "You", message: formattedMessage, image: "/your-avatar.png" },
    ]);
  };

  return (
    <div className="bg-backgroundSecondary md:scale-115 h-screen w-screen mb-12  flex flex-col mx-auto ">
      <ConversationScreen messages={messages} />
      <InputComponent onSubmitMessage={handleInputSubmit} />
    </div>
  );
};

export default SkillifyAI;
