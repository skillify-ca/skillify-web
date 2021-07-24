import { ReactNode } from "react";

export interface BrianProps {
  children: ReactNode;
  size: "small" | "large";
}

const Brian = ({ children, size }: BrianProps) => {
  return (
    <div
      className={`flex flex-col justify-center space-y-16 items-center p-8 bg-grey shadow-md rounded-xl max-w-screen-lg
       ${size === "large" ? " w-40 h-40" : "w-48 h-24"}`}
    >
      {children}
    </div>
  );
};
export default Brian;
