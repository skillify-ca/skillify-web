import React, { useState } from "react";
import { Input } from "../../../components/ui/Input";

export default function AdminBadges() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [unit, setUnit] = useState(10);

  return (
    <div className="flex flex-col gap-4 p-4 text-textPrimary">
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
      <p>Unit</p>
      <input
        className="p-4 rounded"
        value={unit}
        onChange={(e) => setUnit(Number(e.target.value))}
        type="number"
      />
    </div>
  );
}
