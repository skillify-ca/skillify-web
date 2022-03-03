import React from "react";
import { Button } from "../../ui/Button";

export type ResourceRowProps = {
  title: string;
  image: string;
  description: string;
  disabled: boolean;
};

export const ResourceRow: React.FC<ResourceRowProps> = ({
  title,
  image,
  description,
  disabled,
}: ResourceRowProps) => {
  return (
    <div className="bg-white grid grid-cols-1 sm:grid-cols-resource-row shadow-lg p-6">
      <div className="flex sm:justify-center items-center">
        <img src={image} className="h-16 w-16 bg-green-400" />
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="flex sm:justify-end items-center">
        <Button label="View" disabled={disabled} />
      </div>
    </div>
  );
};

export default ResourceRow;
