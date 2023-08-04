import React, { useState } from "react";
import { Button } from "../../../ui/Button";
import { Input } from "../../../ui/Input";

type EditProjectComponentProps = {
  projectId: string;
};

export default function EditProjectComponent({
  projectId,
}: EditProjectComponentProps) {
  const [projectName, setProjectName] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [imageLink, setImageLink] = useState("");

  return (
    <div className="p-4 flex flex-col">
      <h2 className="text-3xl font-bold">Edit Project</h2>

      <h3 className="my-4 text-xl font-bold">Project Name</h3>
      <Input
        value={projectName}
        setValue={setProjectName}
        placeholder="Your project name"
      />

      <h3 className="my-4 text-xl font-bold">GitHub Link</h3>
      <Input
        value={githubLink}
        setValue={setGithubLink}
        placeholder="https://github.com/..."
      />

      <h3 className="my-4 text-xl font-bold">Project Link</h3>
      <Input
        value={projectLink}
        setValue={setProjectLink}
        placeholder="https://xyz.vercel.app"
      />

      <h3 className="my-4 text-xl font-bold">Image</h3>
      <div className="mb-4 p-2 flex flex-col rounded bg-backgroundSecondary">
        <div className="mt-2 mb-2">
          <h4 className="font-bold">Image link</h4>
          <Input
            value={imageLink}
            setValue={setImageLink}
            placeholder="https://xyz.vercel.app/image.jpeg"
          />
        </div>
        <p>or</p>
        <div className="mb-2">
          <h4 className="font-bold">Upload file</h4>
          <input type="file" />
        </div>
      </div>

      <div className="mb-2">
        <Button label="Delete" />
      </div>

      <Button label="Save" />
    </div>
  );
}
