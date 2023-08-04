import React, { useState } from 'react';

import { Input, TextArea } from "./ParentComponents/Input";
import { useAppDispatch, useAppSelector } from "../redux_lib/hook";
import { ResumeWorkExperience } from "../redux_lib/types"
import { changeWorkExperiences, selectWorkExperiences } from "../redux_lib/resumeSlice";



const WorkInput = () => {

  const dispatch = useAppDispatch()
  const work_selector = useAppSelector(selectWorkExperiences);
  const { company, jobTitle, date, descriptions1, descriptions2 } = work_selector;

  const handleWorkChange = (field: keyof ResumeWorkExperience, value: string) => {
    dispatch(changeWorkExperiences({ field, value }));
  }

  return (
    <div className="flex flex-col gap-3 rounded-md bg-white p-6 pt-4 shadow transition-opacity duration-200">
      <div className="grid grid-cols-6 gap-3">
      <text>Work Experiences</text>
        <Input
          label="Company Name"
          name="company"
          placeholder="Skillify"
          labelClassName="col-span-full"
          value={company}
          onChange={handleWorkChange}
        ></Input>
        
        <Input
          label="Job Title"
          name="jobTitle"
          placeholder="Website Developer"
          labelClassName="col-span-3"
          value={jobTitle}
          onChange={handleWorkChange}
        ></Input>

        <Input
          label="Date"
          name="date"
          placeholder="2023-07-01"
          labelClassName="col-span-3"
          value={date}
          onChange={handleWorkChange}
        ></Input>
        <Input
          label="Description"
          name="descriptions1"
          placeholder="Built a website using react and tailwind css"
          labelClassName="col-span-full"
          value={descriptions1}
          onChange={handleWorkChange}
        ></Input>
        <Input
          label="Description"
          name="descriptions2"
          placeholder="Created the frontend with react redux"
          labelClassName="col-span-full"
          value={descriptions2}
          onChange={handleWorkChange}
        ></Input>
      </div>
    </div>
  );
}

export default WorkInput