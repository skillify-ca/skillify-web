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
    <div className="flex flex-col items-center justify-between gap-4 p-4 border-2 rounded shadow-lg sm:flex-row bg-backgroundPrimary border-textPrimary">
      <div className="flex flex-col sm:flex-row items-center">
        <img src={image} className="object-cover w-16 h-16" />
        <div className="flex flex-col sm:p-6 pt-4 items-start">
          <h2 className="font-bold text-textPrimary">{title}</h2>
          <p className="text-textPrimary">{description}</p>
        </div>
      </div>
      <a target="_blank" href={link} rel="noopener noreferrer">
        <Button label="View" disabled={disabled} />
      </a>
    </div>
  );
};

export default ResourceRow;
