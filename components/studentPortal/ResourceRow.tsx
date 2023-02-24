import React from "react";
import { Button } from "../ui/Button";

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
    <div className="grid grid-cols-1 gap-4 border-2 rounded shadow-lg bg-backgroundPrimary lg:grid-cols-resource-row border-textPrimary">
      <div className="flex items-center justify-center p-4 bg-white rounded-l-sm sm:p-0 border-l-textPrimary">
        <img src={image} className="object-cover w-16" />
      </div>
      <div className="flex flex-col p-6 ">
        <h2 className="font-bold">{title}</h2>
        <p className="">{description}</p>
      </div>
      <div className="flex items-center p-6 sm:justify-end">
        <a target="_blank" href={link} rel="noopener noreferrer">
          <Button label="View" disabled={disabled} />
        </a>
      </div>
    </div>
  );
};

export default ResourceRow;
