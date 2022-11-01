import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
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
    <div className="grid grid-cols-1 gap-4 p-6 bg-white shadow-lg dark:bg-gray-900 lg:grid-cols-resource-row">
      <div className="flex items-center">
        <img src={image} className="w-16 h-16 " />
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold dark:text-white">{title}</h2>
        <p className="dark:text-white">{description}</p>
      </div>
      <div className="flex items-center sm:justify-end">
        <a target="_blank" href={link} rel="noopener noreferrer">
          <Button label="View" disabled={disabled} />
        </a>
      </div>
    </div>
  );
};

export default ResourceRow;
