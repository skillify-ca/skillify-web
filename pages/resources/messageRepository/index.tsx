import { useState } from "react";

function MessageRepository() {
  // Initialize state for the message input.
  const [goal, setGoal] = useState("");

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
    setGoal("");
  };
  // Render a form with an input field and a submit button.
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xs ml-4 p-2 rounded-lg shadow-lg"
    >
      <div>
        <h1 className="font-bold text-4xl pt-6">Mesage Repo</h1>
        <h1 className="font-bold text-xl pt-12">Reachout Message</h1>
      </div>

      <div className="grid grid-cols-1 pt-6">
        <input
          type="text"
          placeholder="Enter your goal here..."
          value={goal}
          onChange={handleMessageChange}
        />
        <h1 className="font-bold text-xl pt-12">Target Completion Date</h1>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
          Add Goal
        </button>
      </div>
    </form>
  );
}

export default MessageRepository;
