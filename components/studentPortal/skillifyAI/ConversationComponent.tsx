// ConversationScreen.tsx
import React, { useEffect, useRef } from "react";
import MessageComponent from "./MessageComponent";

interface Message {
  name: string;
  message: string;
  image: string;
}

interface ConversationScreenProps {
  messages: Message[];
  userProfileImage: string | null;
}

const ConversationScreen: React.FC<ConversationScreenProps> = ({
  messages,
  userProfileImage,
}) => {
  const conversationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div ref={conversationRef} className="h-4/5 overflow-auto lg:w-4/5">
      {messages.map((message, index) => (
        <MessageComponent
          key={index}
          name={message.name}
          message={message.message}
          image={userProfileImage || "/default-avatar.png"}
        />
      ))}
    </div>
  );
};

export default ConversationScreen;
