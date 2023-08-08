import React from 'react';
import { Input } from "./ParentComponents/Input";
import { useAppDispatch, useAppSelector } from "../redux_lib/hook";
import { ResumeProfile } from "../redux_lib/types"
import { changeProfile, selectProfile } from "../redux_lib/resumeSlice";

const ProjectInput = () => {

  const dispatch = useAppDispatch();
  const profile_selector = useAppSelector(selectProfile);
  const { name, email, phone, url, location } = profile_selector;

  const handleProfileChange = (field: keyof ResumeProfile, value: string) => {
    dispatch(changeProfile({ field, value }));
  };

  return (
    <div className="flex flex-col gap-3 rounded-md bg-white p-6 pt-4 shadow transition-opacity duration-200">
      <div className="grid grid-cols-6 gap-3">
        About me
        <Input
          label="Name"
          labelClassName="col-span-full"
          name="name"
          placeholder="Aaron Wang"
          value={name}
          onChange={handleProfileChange}
        ></Input>
        <Input
          label="Email"
          labelClassName="col-span-4"
          name="email"
          placeholder="aaronwang@gmail.com"
          value={email}
          onChange={handleProfileChange}
        ></Input>
        <Input
          label="Phone"
          labelClassName="col-span-2"
          name="phone"
          placeholder="(123)456-7890"
          value={phone}
          onChange={handleProfileChange}
        ></Input>
        <Input
          label="Website"
          labelClassName="col-span-4"
          name="url"
          placeholder="www.skillify.ca"
          value={url}
          onChange={handleProfileChange}
        ></Input>
      </div>
    </div>
  );
}

export default ProjectInput