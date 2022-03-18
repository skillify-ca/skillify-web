import React from "react";
import { Button } from "../../ui/Button";

export type ResourceRowProps = {
  title: string;
  image: string;
  description: string;
  disabled: boolean;
  link: string;
};

export const ResourceRow: React.FC<ResourceRowProps> = ({
  title,
  image,
  description,
  disabled,
  link,
}: ResourceRowProps) => {
  return (
    <div className="bg-white dark:bg-gray-900 grid grid-cols-1 sm:grid-cols-resource-row shadow-lg p-6">
      <div className="flex sm:justify-center items-center">
        <img src={image} className="h-16 w-16 " />
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="flex sm:justify-end items-center">
        <a href={link}>
          <Button label="View" disabled={disabled} />
        </a>
      </div>
    </div>
  );
};

export default ResourceRow;
