import React, { useState } from 'react';
import { Input,TextArea } from "../resume_builder/Parent_Components/Input"


const ProjectInput = () => {
  return (
    <div className="flex flex-col gap-3 rounded-md bg-white p-6 pt-4 shadow transition-opacity duration-200">
      <div className="grid grid-cols-6 gap-3">
        <Input
          name="Project Name"
          placeholder="Resume builder"
          classname="col-span-full"
        ></Input>
        <Input
          name="Date"
          placeholder="2023-07-01"
          classname="col-span-full"
        ></Input>
        <TextArea
          name="Description"
          placeholder="The project builds resumes!"
          classname="col-span-full"
        ></TextArea>
      </div>
    </div>
  );
}

export default ProjectInput