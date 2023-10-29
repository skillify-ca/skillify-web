import { useQuery } from "@apollo/client";
import { useState } from "react";
import { FETCH_ALL_MESSAGES } from "../../../graphql/studentPortal/messageRepository/fetchMessages";

//data that we are using to display
type Message = {
  message: string;
  date: string;
  id: number;
};

//the data that we get
type MessageQueryData = {
  messages: {
    message: string;
    date: string;
    id: number;
  }[];
};

export default function MessageFeed() {
  const [messages, setMessages] = useState<Message[]>([]);

  useQuery<MessageQueryData>(FETCH_ALL_MESSAGES, {
    onCompleted: (data) => {
      setMessages(data.messages);
    },
  });

  return (
    <div className="h-screen p-4 overflow-y-auto border-l-2 bg-backgroundPrimary">
      <h1 className="mb-4 text-2xl font-bold">Message Feed</h1>
      {messages &&
        messages.map((message) => (
          <div
            key={message.id} // Use a unique identifier like "id" instead of "index"
            className="p-2 mb-4 border-2 rounded bg-backgroundSecondary"
          >
            <p className="text-sm font-bold text-bulbasaur-500">Message</p>
            <p>{message.message}</p>
            <p className="font-bold">
              Date:{" "}
              {new Date(message.date).toLocaleDateString("en-US", {
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
