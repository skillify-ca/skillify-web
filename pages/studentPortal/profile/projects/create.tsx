import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/Button";
import { useAuth } from "../../../../lib/authContext";
import { supabase } from "../../../../lib/supabase";

export default function CreateProject() {
  // get user id
  const { user } = useAuth();

  // create state variables for each text input
  const [githubLink, setGithubLink] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [projectName, setProjectName] = useState("");
  const [imageURL, setImageURL] = useState("");

  // initialize router
  const router = useRouter();

  // handle save button click
  const onSave = async () => {
    try {
      const { error } = await supabase.from("user_projects").insert([
        {
          githubLink: githubLink,
          projectLink: projectLink,
          name: projectName,
          image: imageURL,
          userId: user.uid,
        },
      ]);
      if (error) {
        throw error;
      }
      router.push(`/profile/${user.uid}`);
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="my-4 text-3xl font-bold text-center">Create Project</h1>
      <div className="flex flex-col items-center space-y-4">
        <label className="font-bold">GitHub Link:</label>
        <input
          type="text"
          value={githubLink}
          onChange={(e) => setGithubLink(e.target.value)}
          placeholder="Enter GitHub link"
          className="p-2 border border-gray-300 rounded-lg w-80 "
        />

        <label className="font-bold">Project Link:</label>
        <input
          type="text"
          value={projectLink}
          onChange={(e) => setProjectLink(e.target.value)}
          placeholder="Enter project link"
          className="p-2 border border-gray-300 rounded-lg w-80 "
        />

        <label className="font-bold">Project Name:</label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Enter project name"
          className="p-2 border border-gray-300 rounded-lg w-80 "
        />

        <label className="font-bold">Image URL:</label>
        <input
          type="text"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          placeholder="Enter image URL"
          className="p-2 border border-gray-300 rounded-lg w-80 "
        />

        <Button label="Save" onClick={onSave} />
      </div>
    </div>
  );
}
