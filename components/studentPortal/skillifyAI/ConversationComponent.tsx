import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../../lib/authContext";
import { fetchProfilePicture } from "../../../pages/api/studentPortal/profile/profilePicturesClient";
import MessageComponent from "./MessageComponent";

interface Message {
  name: string;
  message: string;
  image: string;
}

interface ConversationScreenProps {
  messages: Message[];
}

const ConversationScreen: React.FC<ConversationScreenProps> = ({
  messages,
}) => {
  const { user } = useAuth();
  const [userProfileImage, setUserProfileImage] = useState<string | null>(null);
  const conversationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchUserImage = async () => {
      if (user) {
        const imageUrl = await fetchProfilePicture(user.uid);
        setUserProfileImage(imageUrl !== null ? imageUrl : user.photoURL || "");
      }
    };

    fetchUserImage();
  }, [user]);

  // Scroll to the bottom of the conversationRef when messages change
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
