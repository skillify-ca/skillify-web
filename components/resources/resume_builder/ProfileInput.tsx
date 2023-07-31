import React, { useState } from 'react';
import { Input, TextArea } from "../resume_builder/Parent_Components/Input"


const ProjectInput = () => {
  return (
    <div className="flex flex-col gap-3 rounded-md bg-white p-6 pt-4 shadow transition-opacity duration-200">
      <div className="grid grid-cols-6 gap-3">
        <Input
          name="Name"
          placeholder="Aaron Wang"
          classname="col-span-full"
        ></Input>
        <Input
          name="Email"
          placeholder="aaronwang@gmail.com"
          classname="col-span-full"
        ></Input>
        <Input
          name="Phone"
          placeholder="(123)-456-789"
          classname="col-span-full"
        ></Input>
        <Input
          name="Website"
          placeholder="www.skillify.ca"
          classname="col-span-full"
        ></Input>
      </div>
    </div>
  );
}

export default ProjectInput