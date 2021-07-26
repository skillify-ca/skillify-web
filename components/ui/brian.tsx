import { ReactNode } from "react";

export interface BrianProps {
  children: ReactNode;
  size: "small" | "large";
  bgColour: "Blue" | "Red";
}
/*justify-center items-center*/
const Card = ({ children, size, bgColour }: BrianProps) => {
  return (
    <div
      className={`flex flex-col space-y-16 justify-center p-8 bg-white shadow-md rounded-xl max-w-screen-lg
      --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);	border-width: 2px;border-blue-600; bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500;	
       ${size === "large" ? " w-64 h-40" : "w-48 h-24"};${bgColour === "Blue" ? " bg-blue-400" : "bg-red-400"}`}
    > 
    <div
      className={'flex justify-center'}
    > <p>Gradient Can end either "Blue" Or "Red"</p>
    
    </div>
   


  
    </div>
  );
};
export default Card;




/*import { ReactNode } from "react";

export interface BrianProps {
  children: ReactNode;
  size: "small" | "large";
}

const Brian = ({ children, size }: BrianProps) => {
  return (
    <div
      className={`flex flex-col justify-center space-y-16 items-center p-8 bg-grey shadow-md rounded-xl max-w-screen-lg
       ${size === "large" ? " w-100 h-100" : "w-48 h-24"}`}
    >
      {children}
    </div>
  );
};
export default Brian;
*/