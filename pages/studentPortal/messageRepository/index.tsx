import { useMutation } from "@apollo/client";
import { format } from "date-fns";
import { useState } from "react";
import MessageFeed from "../../../components/studentPortal/messageRepository/MessageFeed";
import { Button } from "../../../components/ui/Button";
import { FETCH_ALL_MESSAGES } from "../../../graphql/studentPortal/messageRepository/fetchMessages";
import { insert_Message } from "../../../graphql/studentPortal/messageRepository/insertMessage";
import { useAuth } from "../../../lib/authContext";
type Message = {
  message: string;
  date: string;
};
function MessageRepository() {
  // Initialize state for the message input.
  const [message, setMessage] = useState("");

  //date for state var
  const [date, setDate] = useState(new Date());

  const { user } = useAuth();

  //query to refetch the page without having to refresh the page
  const [saveNewMessage] = useMutation(insert_Message, {
    refetchQueries: [{ query: FETCH_ALL_MESSAGES }],
  });

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
        message: message,
        userId: user.uid,
      },
    });
    setMessage("");
  };
  // Render a form with an input field and a submit button.
  return (
    <div className="grid w-full grid-cols-3">
      <div
        onSubmit={handleSubmit}
        className="flex flex-col col-span-2 p-2 ml-4 space-y-6 rounded-lg"
      >
        <div className="pt-6">
          <h1 className="text-4xl font-bold">Message Repo</h1>
          <h1 className="pt-12 text-xl font-bold">Reachout Message</h1>
        </div>
        <textarea
          className="w-1/2 p-2 text-left border rounded-md shadow-md dark:text-murkrow"
          placeholder="Enter your reachout message..."
          value={message}
          onChange={handleMessageChange}
        />
        <h1 className="text-xl font-bold">Target Completion Date</h1>
        <input
          type="date"
          className={`text-left p-2 border rounded-md w-1/2 dark:text-murkrow shadow-lg `}
          value={format(date, "yyyy-MM-dd")}
          onChange={(e) => {
            setDate((prevState) => ({
              ...prevState,
              targetDate: new Date(e.target.value),
            }));
          }}
        />
        <Button label="Add Goal" onClick={handleSubmit}>
          Add Goal
        </Button>
      </div>

      <div className="hidden overflow-y-auto sm:flex">
        <MessageFeed />
      </div>
    </div>
  );
}

export default MessageRepository;
