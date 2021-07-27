import { ReactNode } from "react";

export interface BrianProps {
  children: ReactNode;
  size: "small" | "large";
  bgColour: "Blue" | "Red";
  image: "Protoss" | "Zerg" | "Terran"
}

const Brian = ({ children, size, bgColour, image }: BrianProps) => {
 /* let img; 
  if(image==="Protoss"){
    img = <img src="https://liquipedia.net/commons/images/0/01/Zealot_SC_Remastered_Art1.jpg" alt="Protoss Picture"  width="200px" height="100px"/>;
  } else if(image ==="Zerg"){
    img = <img src= "https://liquipedia.net/commons/images/2/26/Hydralisk_SC1_Art2.jpg" alt="Zerg Picture" width="150px" height="100px"/>;
  } else{
    img = <img src= "https://www.sideshow.com/wp/wp-content/uploads/2015/01/100181_press02.jpg" alt="Zerg Picture" width="150px" height="100px"/>;
  }*/

  return (
    <div
      className={`flex flex-col space-y-16 justify-center p-8 bg-white shadow-md rounded-xl max-w-screen-lg
      --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) w-80 h-160`}
    > 
    <div
      className={'flex justify-center'}
    > <p>Gradient Can end either "Blue" Or "Red"</p>
      
    </div>
    </div>
  );
};
export default Brian;

