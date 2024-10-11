import React, { useRef } from "react";

const index = () => {
  const canvasRef = useRef(null);

  return (
    <div ref={canvasRef} className="relative">
      {" "}
      <iframe
        src="https://kaboom-js-luckyhariharan.vercel.app/"
        className="w-full h-[800px]"
      />
    </div>
  );
};

export default index;

index.premium = true;
