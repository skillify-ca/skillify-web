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
    <div className="grid grid-cols-1 p-4 bg-white shadow-lg dark:bg-gray-900 sm:grid-cols-resource-row">
      <div className="flex items-center sm:justify-center">
        <img src={image} className="w-16 h-16 " />
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="flex items-center sm:justify-end">
        <a href={link}>
          <Button label="View" disabled={disabled} />
        </a>
      </div>
    </div>
  );
};

export default ResourceRow;
