// SkillifyAI.tsx
import React, { useEffect, useState } from "react";
import ConversationScreen from "../../../components/studentPortal/skillifyAI/ConversationComponent";
import InputComponent from "../../../components/studentPortal/skillifyAI/InputComponent";
import { useAuth } from "../../../lib/authContext";
import { fetchProfilePicture } from "../../../pages/api/studentPortal/profile/profilePicturesClient";

const SkillifyAI = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [userProfileImage, setUserProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserImage = async () => {
      if (user) {
        const imageUrl = await fetchProfilePicture(user.uid);
        setUserProfileImage(imageUrl || user.photoURL || "/default-avatar.png");
      }
    };

    fetchUserImage();
  }, [user]);

  const handleInputSubmit = (formattedMessage) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { name: "You", message: formattedMessage, image: userProfileImage },
    ]);
  };

  return (
    <div className="flex flex-col w-screen h-screen mx-auto mb-12 bg-backgroundSecondary max-w-94">
      <div className="overflow-auto">
        <ConversationScreen
          messages={messages}
          userProfileImage={userProfileImage}
        />
      </div>
      <InputComponent onSubmitMessage={handleInputSubmit} />
    </div>
  );
};

export default SkillifyAI;

SkillifyAI.premium = true;
