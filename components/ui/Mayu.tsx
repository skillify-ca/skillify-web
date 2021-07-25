import { ReactNode } from "react";

export interface MayuProps {
  children: ReactNode;
  bgColor: "blueBackground" | "redBackground";
//probably better to use boolean logic than options
}

const Mayu = ({ children, bgColor}: MayuProps) => {
  return (
    <div
      className={`flex flex-col justify-center space-y-16 items-center shadow-md rounded-2xl	bgrounded-xl max-w-screen-lg w-96 h-48
      ${bgColor === "blueBackground" ? " bg-blue-200" : "bg-red-200"}
    `}
    > 
    <h1>Mayu's Card</h1>
      {children}
    </div>
  );
};
export default Mayu;
