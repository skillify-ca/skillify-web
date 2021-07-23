import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  bgColor: "blue" | "red";

}

const Mayu = ({ children, bgColor}: CardProps) => {
  return (
    <div
      className={`flex flex-col justify-center space-y-16 items-center p-4 bg-blue shadow-md rounded-xl max-w-screen-lg
     ${bgColor === "blue" ? "bg-blue" : "bg-red"}`}
    >gi
      {children}
    </div>
  );
};
export default Mayu;
