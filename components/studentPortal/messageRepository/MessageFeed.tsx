import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { FETCH_ALL_MESSAGES } from "../../../graphql/studentPortal/messageRepository/fetchMessages";

type Message = {
  message: string;
  date: string;
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
        };
      });

      setMessage(transformedMessage);
    },
  });

  return (
    <div className="h-screen p-4 overflow-y-auto border-l-2 bg-backgroundPrimary">
      <h1 className="mb-4 text-2xl font-bold">Message Repository Messages</h1>
      {message.map((message) => (
        <div
          key={message.message}
          className="p-2 mb-4 border-2 rounded bg-backgroundSecondary"
        >
          <p>{message.message}</p>
          <p>
            {new Date (message.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      ))}
    </div>
  );
}
