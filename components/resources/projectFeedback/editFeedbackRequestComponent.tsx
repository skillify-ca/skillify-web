import React, { useState } from "react";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";

type EditFeedbackRequestProps = {
  feedbackRequestId: string;
};

export default function EditFeedbackRequestComponent({
  feedbackRequestId,
}: EditFeedbackRequestProps) {
  const [projectName, setProjectName] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className="p-4 flex flex-col">
      <h2 className="text-3xl font-bold">Edit Feedback Request</h2>

      <h3 className="my-4 text-xl font-bold">Project Name</h3>
      <Input value={projectName} setValue={setProjectName} />

      <h3 className="my-4 text-xl font-bold">Share Project</h3>
      <div className="mb-4 p-2 flex flex-col rounded bg-backgroundSecondary">
        <div className="mt-2 mb-2">
          <h4 className="font-bold">GitHub Link</h4>
          <Input value={githubLink} setValue={setGithubLink} />
        </div>
        <p>or</p>
        <div className="mb-2">
          <h4 className="font-bold">Upload as ZIP File</h4>
          <input type="file" accept=".zip" />
        </div>
      </div>

      <h3 className="mb-4 text-xl font-bold">Additional Notes</h3>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className=" resize-y w-full p-4 bg-white border rounded-md shadow-lg appearance-none text-inputTextPrimary focus:outline-none focus:z-10 sm:text-sm"
        placeholder="Enter Answer"
      />
      <p className={`${notes.length > 1000 ? "text-red-500" : ""}`}>
        {notes.length}/1000 characters
      </p>

      <div className="my-4">
        <Button
          label="Save"
          // Grey out save button if the feedbackRequestId includes the substring "feedback"
          // Only for demonstration purposes, really this should be retrieving the feedback request
          // from the backend and checking if the feedbackAvailable field is true
          // i.e. only allow users to save edits if no feedback has been received yet
          disabled={feedbackRequestId.includes("feedback")}
        />
      </div>
    </div>
  );
}
