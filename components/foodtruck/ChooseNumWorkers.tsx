import React, { ReactNode } from "react";

export interface ChooseNumWorkersProps {
  selectedNumWorkers: string;
  setSelectedNumWorkers: (selectedNumWorkers: string) => void;
}

const ChooseNumWorkers = ({
  selectedNumWorkers,
  setSelectedNumWorkers,
}: ChooseNumWorkersProps) => {
  const numWorkerArray = ["1", "2", "3", "4"];

  const renderWorkerImagesHTML = (n: string) => {
    return [...Array(Number.parseInt(n))].map((_, i) => (
      <div className="flex flex-cols" key={i}>
        <img
          className="object-contain h-full w-full px-8"
          src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3226091/chef-clipart.svg"
        />
      </div>
    ));
  };

  return (
    <div className="flex flex-col border-2 border-black border-dashed p-4">
      <h1 className="text-4xl text-black bold p-4 mb-8">
        How many workers do you want to employ?
      </h1>

      {numWorkerArray.map((n) => {
        return (
          <label className="flex flex-row space-x-8 items-center p-4">
            <input
              className="form-radio h-8 w-8"
              type="radio"
              value={n.toString()}
              checked={selectedNumWorkers === n.toString()}
              onChange={(e) => setSelectedNumWorkers(e.target.value)}
            />
            <div className="flex flex-row h-24">
              {renderWorkerImagesHTML(n)}
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default ChooseNumWorkers;
