import React from "react";

export type PillProps = {
  title: string;
  disabled: boolean;
};

export const Pill: React.FC<PillProps> = ({ title, disabled }: PillProps) => {
  return (
    <p
      className={`${
        disabled ? "bg-gray-100 text-gray-700" : "bg-blue-900 text-white"
      } w-48 p-4  rounded-full text-center`}
    >
      {title}
    </p>
  );
};

export default Pill;
