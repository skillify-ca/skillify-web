import React, { useEffect, useState } from "react";
import { useAuth } from "../../../lib/authContext";
import { fetchProfilePicture } from "../../../pages/api/studentPortal/profile/profilePicturesClient";
import MessageComponent from "./MessageComponent";

const ConversationScreen = () => {
  const { user } = useAuth();
  const [userProfileImage, setUserProfileImage] = useState(null);

  useEffect(() => {
    const fetchUserImage = async () => {
      if (user) {
        const imageUrl = await fetchProfilePicture(user.uid);
        if (imageUrl !== null) {
          setUserProfileImage(imageUrl);
        } else {
          // If no profile picture, use the one from user's data
          setUserProfileImage(user.photoURL);
        }
      }
    };

    fetchUserImage();
  }, [user]);

  // Dummy data for messages
  const messages = [
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
    // Add more messages as needed
  ];

  return (
    <div className="h-4/5 lg:w-4/5">
      {messages.map((message, index) => (
        <MessageComponent
          key={index}
          name={message.name}
          message={message.message}
          image={userProfileImage || message.image}
        />
      ))}
    </div>
  );
};

export default ConversationScreen;
