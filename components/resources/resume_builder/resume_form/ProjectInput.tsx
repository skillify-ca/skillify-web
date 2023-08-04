import React, { useState } from 'react';

import { Input, TextArea } from "./ParentComponents/Input";
import { useAppDispatch, useAppSelector } from "../redux_lib/hook";
import { ResumeProject } from "../redux_lib/types"
import { changeProjects, selectProjects } from "../redux_lib/resumeSlice";

const ProjectInput = () => {

  const dispatch = useAppDispatch();
  const project_selector = useAppSelector(selectProjects);
  const { project, date, descriptions } = project_selector;

  const handleProjectChange = (field: keyof ResumeProject, value: string) => {
    dispatch(changeProjects({ field, value }));
  }

  return (
    <div className="flex flex-col gap-3 rounded-md bg-white p-6 pt-4 shadow transition-opacity duration-200">
      <div className="grid grid-cols-6 gap-3">
      <text>My Project</text>
        <Input
          label="Project Name"
          name="project"
          placeholder="Resume builder"
          labelClassName="col-span-full"
          value = {project}
          onChange={handleProjectChange}
        ></Input>
        <Input
          label="Date"
          name="date"
          placeholder="2023-07-01"
          labelClassName="col-span-full"
          value = {date}
          onChange={handleProjectChange}
        ></Input>
        <Input
          label="Descriptions"
          name="descriptions"
          placeholder="The project builds resumes!"
          labelClassName="col-span-full"
          value = {descriptions}
          onChange={handleProjectChange}
        ></Input>
      </div>
    </div>
  );
}

export default ProjectInput