import { useMutation } from "@apollo/client";
import { format } from "date-fns";
import React, { useState } from "react";
import { Button } from "../../../components/ui/Button";
import { insert_Message } from "../../../graphql/studentPortal/messageRepo/insertMessage";
import { useAuth } from "../../../lib/authContext";
type Message = {
  message: string;
  date: string;
};
function MessageRepository() {
  // Initialize state for the message input.
  const [message, setMessage] = useState("");
  const { user } = useAuth();

  //date for state var
  const [date, setDate] = useState(new Date());

  const [targetDate, setTargetDate] = useState({});

  // route back to goals overview page on complete
  const [saveNewMessage] = useMutation(insert_Message);

  // Function to update the 'message' state when the input changes
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Function to handle form submission.
  const handleSubmit = (e) => {
    //prevent default
    e.preventDefault();
    //log the current message
    // Clear the input after submission.
    saveNewMessage({
      variables: {
        date: date,
        reachout_message: message,
      },
    });
    setMessage("");
  };
  // Render a form with an input field and a submit button.
  return (
    <div
      onSubmit={handleSubmit}
      className="ml-4 p-2 rounded-lg space-y-6 flex flex-col"
    >
      <div className="pt-6">
        <h1 className="font-bold text-4xl">Message Repo</h1>
        <h1 className="font-bold text-xl pt-12">Reachout Message</h1>
      </div>

      <textarea
        className="text-left p-2 border rounded-md shadow-md w-1/2 dark:text-murkrow"
        placeholder="Enter your reachout message..."
        value={message}
        onChange={handleMessageChange}
      />
      <h1 className="font-bold text-xl">Target Completion Date</h1>
      <input
        type="date"
        className={`text-left p-2 border rounded-md w-1/2 dark:text-murkrow shadow-lg `}
        value={format(date, "yyyy-MM-dd")}
        onChange={(e) => {
          setDate(new Date(e.target.value));
        }}
      />
      <Button label="Add Goal" onClick={handleSubmit}>
        Add Goal
      </Button>
    </div>
  );
}

export default MessageRepository;
