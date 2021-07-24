import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
}

const Card = ({children}: CardProps) => {
  return (
    <div
      className={`flex flex-col justify-center space-y-16 items-center p-8 bg-white shadow-md rounded-xl max-w-screen-lg`}
    >
      {children}
    </div>
  );
};

export default Card;

// test comment