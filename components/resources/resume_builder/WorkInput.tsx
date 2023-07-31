import React, { useState } from 'react';
import { Input,TextArea } from "../resume_builder/Parent_Components/Input"


const WorkInput = () => {
  return (
    <div className="flex flex-col gap-3 rounded-md bg-white p-6 pt-4 shadow transition-opacity duration-200">
      <div className="grid grid-cols-6 gap-3">
        <Input
          name="Company Name"
          placeholder="Skillify"
          classname="col-span-full"
        ></Input>
        <Input
          name="Date"
          placeholder="2023-07-01"
          classname="col-span-full"
        ></Input>
        <TextArea
          name="Description"
          placeholder="Built websites using React and TailwindCSS"
          classname="col-span-full"
        ></TextArea>
      </div>
    </div>
  );
}

export default WorkInput