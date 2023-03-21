import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import { CREATE_CODING_BADGE } from "../../../graphql/studentPortal/admin/createBadge";

export default function AdminBadges() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [unit, setUnit] = useState(0);

  const [createBadge] = useMutation(CREATE_CODING_BADGE);
  function handleSaveClick() {
    createBadge({
      variables: {
        title,
        description,
        image,
        unitId: unit,
      },
    }).then((res) => {
      alert(JSON.stringify(res.data));
    });
  }
  return (
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
      <p>Unit</p>
      <input
        className="p-4 border-2 rounded shadow-lg text-inputTextPrimary"
        value={unit}
        onChange={(e) => setUnit(Number(e.target.value))}
        type="number"
      />
      <div onClick={handleSaveClick}>
        <Button label="Save" />
      </div>
    </div>
  );
}
