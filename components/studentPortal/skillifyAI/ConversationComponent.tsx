// ConversationScreen.tsx
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const fetchUserImage = async () => {
      if (user) {
        const imageUrl = await fetchProfilePicture(user.uid);
        setUserProfileImage(imageUrl !== null ? imageUrl : user.photoURL || "");
      }
    };

    fetchUserImage();
  }, [user]);

  return (
    <div className="h-4/5  lg:w-4/5 ">
      {messages.map((message, index) => (
        <MessageComponent
          key={index}
          name={message.name}
          message={message.message}
          image={userProfileImage}
        />
      ))}
    </div>
  );
};

export default ConversationScreen;
