import React from "react";

const NumberedCircles = () => {
  return (
    <div className="relative grid grid-cols-1 gap-y-8 justify-center items-center">
      <div className="h-12 w-0.5 bg-gray-400 absolute top-12 left-6"></div>
      <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold mb-2">
        1
      </div>
      <div className="relative">
        <div className="h-12 w-0.5 bg-gray-400 absolute top-12 left-6"></div>
        <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white mb-2">
          2
        </div>
      </div>
      <div className="relative">
        <div className="h-12 w-0.5 bg-gray-400 absolute top-12 left-6"></div>
        <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold mb-2">
          3
        </div>
      </div>
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-indigo-900 flex items-center justify-center text-white font-bold mb-2">
          4
        </div>
      </div>
    </div>
  );
};

export default NumberedCircles;
