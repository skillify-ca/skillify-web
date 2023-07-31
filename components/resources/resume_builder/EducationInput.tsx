import React, { useState } from 'react';
import { Input } from "../resume_builder/Parent_Components/Input"


const EducationInput = () => {
  return (
    <div className="flex flex-col gap-3 rounded-md bg-white p-6 pt-4 shadow transition-opacity duration-200">
      <div className="grid grid-cols-6 gap-3">
        <Input
          name="School"
          placeholder="University of Waterloo"
          classname="col-span-full"
        ></Input>
        <Input
          name="Degree"
          placeholder="Mathematics"
          classname="col-span-full"
        ></Input>
        <Input
          name="Timeframe"
          placeholder="2022-2027"
          classname="col-span-full"
        ></Input>
      </div>
    </div>
  );
}

export default EducationInput