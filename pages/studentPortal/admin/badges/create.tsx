import React, { useState } from "react";
import { CodingBadgeCardContent } from "../../../../components/studentPortal/profile/badges/CodingBadgeCard";
import { Button } from "../../../../components/ui/Button";
import { Input } from "../../../../components/ui/Input";
import { supabase } from "../../../../lib/supabase";

export default function AdminBadges() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSaveClick = async () => {
    try {
      const { data, error } = await supabase
        .from("coding_badges")
        .insert([{ title, description, image }]);
      if (error) {
        throw error;
      }
      alert(JSON.stringify(data));
    } catch (error) {
      console.error("Error creating badge:", error);
    }
  };
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-3xl font-bold">Create Badge</h1>
        <p>Title</p>
        <Input value={title} setValue={setTitle} placeholder="Enter Title" />
        <p>Description</p>
        <Input
          value={description}
          setValue={setDescription}
          placeholder="Enter Title"
        />
        <p>Image</p>
        <Input value={image} setValue={setImage} placeholder="Enter Image" />
        <div className="flex gap-4">
          <div onClick={handleSaveClick}>
            <Button label="Save" />
          </div>
          <div>
            <a target="_blank" rel="noreferrer" href="https://opensea.io/">
              <Button
                label="Open Sea"
                backgroundColor="white"
                textColor="primary"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-4">
        <p className="font-bold">Preview</p>
        <div className="border-2 bg-slate-200 w-96 h-96">
          <CodingBadgeCardContent
            badge={{
              coding_badge: {
                title,
                description,
                id: 1,
                image,
              },
              created_at: new Date().toDateString(),
            }}
          />
        </div>
      </div>
    </div>
  );
}
