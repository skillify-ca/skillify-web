import { useRef } from "react";
import VirtualHangout from "../../../components/virtualHangout/virtualHangout";

const index = () => {
  const canvasRef = useRef(null);

  return (
    <div ref={canvasRef} className="relative">
      {" "}
      <VirtualHangout></VirtualHangout>
    </div>
  );
};

export default index;
