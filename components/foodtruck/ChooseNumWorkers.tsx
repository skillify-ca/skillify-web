import React, { ReactNode } from "react";

export interface ChooseNumWorkersProps {
  numWorkers: string;
  setNumWorkers: (truck: string) => void;
}

const ChooseNumWorkers = ({
  numWorkers,
  setNumWorkers,
}: ChooseNumWorkersProps) => {
  const workers = ["1", "2", "3", "4"];
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
          checked={numWorkers === "1"}
          onChange={(e) => setNumWorkers(e.target.value)}
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
          checked={numWorkers === "2"}
          onChange={(e) => setNumWorkers(e.target.value)}
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
          checked={numWorkers === "3"}
          onChange={(e) => setNumWorkers(e.target.value)}
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
          checked={numWorkers === "4"}
          onChange={(e) => setNumWorkers(e.target.value)}
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
