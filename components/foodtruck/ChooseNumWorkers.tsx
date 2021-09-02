import React, { ReactNode } from "react";

export interface ChooseNumWorkersProps {
  selectedNumWorkers: string;
  setSelectedNumWorkers: (selectedNumWorkers: string) => void;
}

const ChooseNumWorkers = ({
  selectedNumWorkers,
  setSelectedNumWorkers,
}: ChooseNumWorkersProps) => {
  return (
    <div className="flex flex-col border-2 border-black border-dashed p-4">
      <h1 className="text-4xl text-black bold p-4">
        How many workers do you want to employ?
      </h1>
      <label className="flex flex-row space-x-8 items-center p-4">
        <input
          className="form-radio h-8 w-8"
          type="radio"
          value="1"
          checked={selectedNumWorkers === "1"}
          onChange={(e) => setSelectedNumWorkers(e.target.value)}
        />
        <div className="flex flex-row h-24">
          <img
            className="object-contain h-full w-full px-8"
            src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3226091/chef-clipart.svg"
          />
        </div>
      </label>
      <label className="flex flex-row space-x-8 items-center p-4">
        <input
          className="form-radio h-8 w-8"
          type="radio"
          value="2"
          checked={selectedNumWorkers === "2"}
          onChange={(e) => setSelectedNumWorkers(e.target.value)}
        />
        <div className="flex flex-row h-24">
          <img
            className="object-contain h-full w-full px-8"
            src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3226091/chef-clipart.svg"
          />
          <img
            className="object-contain h-full w-full px-8"
            src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3226091/chef-clipart.svg"
          />
        </div>
      </label>
      <label className="flex flex-row space-x-8 items-center p-4">
        <input
          className="form-radio h-8 w-8"
          type="radio"
          value="3"
          checked={selectedNumWorkers === "3"}
          onChange={(e) => setSelectedNumWorkers(e.target.value)}
        />
        <div className="flex flex-row h-24 w-24">
          <img
            className="object-contain h-full w-full px-8"
            src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3226091/chef-clipart.svg"
          />
          <img
            className="object-contain h-full w-full px-8"
            src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3226091/chef-clipart.svg"
          />
          <img
            className="object-contain h-full w-full px-8"
            src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3226091/chef-clipart.svg"
          />
        </div>
      </label>
      <label className="flex flex-row space-x-8 items-center p-4">
        <input
          className="form-radio h-8 w-8"
          type="radio"
          value="4"
          checked={selectedNumWorkers === "4"}
          onChange={(e) => setSelectedNumWorkers(e.target.value)}
        />
        <div className="grid grid-cols-3">
          <div className="grid grid-cols-2">
            <img
              className="object-contain h-1/2 w-1/2"
              src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3226091/chef-clipart.svg"
            />
            <img
              className="object-contain h-1/2 w-1/2"
              src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3226091/chef-clipart.svg"
            />
            <img
              className="object-contain h-1/2 w-1/2"
              src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3226091/chef-clipart.svg"
            />
            <img
              className="object-contain h-1/2 w-1/2"
              src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3226091/chef-clipart.svg"
            />
          </div>
        </div>
      </label>
    </div>
  );
};

export default ChooseNumWorkers;
