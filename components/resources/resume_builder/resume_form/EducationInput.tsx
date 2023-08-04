import React, { useState } from 'react';

import { Input } from "./ParentComponents/Input";
import { useAppDispatch, useAppSelector } from "../redux_lib/hook";
import { ResumeEducation } from "../redux_lib/types"
import { changeEducations, selectEducations } from "../redux_lib/resumeSlice";

const EducationInput = () => {

  const dispatch = useAppDispatch();
  const education_selector = useAppSelector(selectEducations);
  const {school, degree, gpa, date} = education_selector;

  const handleEducationChange = (field: keyof ResumeEducation, value: string) =>{
    dispatch(changeEducations({ field, value }));
  };

  return (
    <div className="flex flex-col gap-3 rounded-md bg-white p-6 pt-4 shadow transition-opacity duration-200">
      <div className="grid grid-cols-6 gap-3">
      <text>Education</text>
        <Input
          label="School"
          name="school"
          placeholder="University of Waterloo"
          labelClassName="col-span-full"
          value = {school}
          onChange={handleEducationChange}
        ></Input>
        <Input
          label="Degree"
          name="degree"
          placeholder="Mathematics"
          labelClassName="col-span-full"
          value = {degree}
          onChange={handleEducationChange}
        ></Input>
        <Input
          label="Timeframe"
          name="date"
          placeholder="2022-2027"
          value = {date}
          labelClassName="col-span-full"
          onChange={handleEducationChange}
        ></Input>
      </div>
    </div>
  );
}

export default EducationInput