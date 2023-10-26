import { useMutation } from "@apollo/client";
import { format } from "date-fns";
import React, { useState } from "react";
import { Button } from "../../../components/ui/Button";
import { insert_Message } from "../../../graphql/studentPortal/messageRepo/insertMessage";
import { useAuth } from "../../../lib/authContext";

function MessageRepository() {
  // Initialize state for the message input.
  const [goal, setGoal] = useState("");
  const { user } = useAuth();

  const [newGoalValues, setNewGoalValues] = useState({
    userId: user.uid,
    isComplete: false,
    goalName: "",
    targetDate: new Date(),
  });

  // route back to goals overview page on complete
  const [saveNewMessage] = useMutation(insert_Message);

  // Function to update the 'message' state when the input changes
  const handleMessageChange = (e) => {
    setGoal(e.target.value);
  };

  // Function to handle form submission.
  const handleSubmit = (e) => {
    //prevent default
    e.preventDefault();
    //log the current message
    console.log("Goal:", goal);
    // Clear the input after submission.
    saveNewMessage({
      variables: {
        date: "2023-10-15",
        reachout_message: goal,
      },
    });
    setGoal("");
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
        value={goal}
        onChange={handleMessageChange}
      />
      <h1 className="font-bold text-xl">Target Completion Date</h1>
      <input
        type="date"
        className={`text-left p-2 border rounded-md w-1/2 dark:text-murkrow shadow-lg ${
          newGoalValues.targetDate >= new Date() ? "" : " border-red-600"
        }`}
        value={format(new Date(newGoalValues.targetDate), "yyyy-MM-dd")}
        onChange={(e) => {
          setNewGoalValues((prevState) => ({
            ...prevState,
            targetDate: new Date(e.target.value + "T00:00:00"),
          }));
        }}
      />
      <Button label="Add Goal" onClick={handleSubmit}>
        Add Goal
      </Button>
    </div>
  );
}

export default MessageRepository;
