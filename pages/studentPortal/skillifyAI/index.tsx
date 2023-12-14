import React, { useEffect, useState } from "react";
import ConversationScreen from "../../../components/studentPortal/skillifyAI/ConversationComponent";
import InputComponent from "../../../components/studentPortal/skillifyAI/InputComponent";
import { useAuth } from "../../../lib/authContext";
import { fetchProfilePicture } from "../../../pages/api/studentPortal/profile/profilePicturesClient";

const SkillifyAI = () => {
  const { user } = useAuth();
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

  const handleInputSubmit = (formattedMessage) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { name: "You", message: formattedMessage, image: userProfileImage },
    ]);
  };

  return (
    <div className="bg-backgroundSecondary h-screen w-screen mb-12 flex flex-col mx-auto">
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
