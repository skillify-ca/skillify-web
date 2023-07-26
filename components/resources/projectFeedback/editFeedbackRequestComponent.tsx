import React, { useState } from "react";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";

type EditFeedbackRequestProps = {
  id: string;
};

export default function EditFeedbackRequestComponent({
  id,
}: EditFeedbackRequestProps) {
  const [projectName, setProjectName] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="p-4 flex flex-col">
      <h2 className="text-3xl font-bold">Edit Feedback Request</h2>

      <h3 className="my-4 text-xl font-bold">Project Name</h3>
      <Input value={projectName} setValue={setProjectName} />

      <h3 className="my-4 text-xl font-bold">Brief Description</h3>
      <Input value={description} setValue={setDescription} />

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

      <Button label="Save" />
    </div>
  );
}
