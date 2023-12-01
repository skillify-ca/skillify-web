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
    <div className="flex items-center justify-between gap-4 p-4 border-2 rounded shadow-lg bg-backgroundPrimary border-textPrimary">
      <div className="flex items-center">
        <img src={image} className="object-cover w-16 h-16" />
        <div className="flex flex-col p-6 ">
          <h2 className="font-bold">{title}</h2>
          <p className="">{description}</p>
        </div>
      </div>
      <a target="_blank" href={link} rel="noopener noreferrer">
        <Button label="View" disabled={disabled} />
      </a>
    </div>
  );
};

export default ResourceRow;
