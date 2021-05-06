import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode
  size: 'small' | 'large'
}

const Card = ({ children, size }: CardProps) => {
  return (
    <div className={`flex justify-center items-center p-8 bg-white shadow-md rounded-xl max-w-screen-lg
      ${size === 'large' ? ' w-96 h-full' : 'w-48 h-24'}`}>
      {children}
    </div>
  );
};

export default Card;
