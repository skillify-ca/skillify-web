import React, { useRef } from "react";
import useFireWork from "react-use-firework";

export interface FireworkProps {}
export const Firework: React.FC<FireworkProps> = ({}) => {
  const ref = useRef(null);
  useFireWork(ref);
  return (
    <div>
      <p className="z-10">
        Click in the light blue sky for your celebratory surprise!
      </p>
      <div
        className="z-0 hover:z-50"
        ref={ref}
        style={{ width: "100%", height: "500px", background: "#DBF3FA" }}
      />
    </div>
  );
};

export default Firework;
