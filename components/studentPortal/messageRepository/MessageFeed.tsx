import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { FETCH_ALL_MESSAGES } from "../../../graphql/studentPortal/messageRepository/fetchMessages";
import MessageCard from "./MessageCard";

export type Message = {
  message: string;
  date: string;
  userId:string;
  userName: string;
};

 
export default function MessageFeed() {
  const [message, setMessage] = useState<Message[]>([]);

  useQuery(FETCH_ALL_MESSAGES, {
    fetchPolicy: "cache-and-network",

    onCompleted: (data) => {
      const transformedMessage = data.message_repository.map((message) => {
        return {
          message: message.message,
          date: message.date,
          userName : message.user.name,
          userId: message.userId
        };
      });

      setMessage(transformedMessage);
    },
  });

  return (
    <div className="h-screen p-4 overflow-y-auto border-l-2 bg-backgroundPrimary">
      <h1 className="mb-4 text-2xl font-bold">Message Repository Messages</h1>
      {message.map((message) => (
        <MessageCard message={message} />
      ))}
    </div>
  );
}
