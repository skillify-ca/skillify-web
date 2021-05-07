import React from "react";
import Navbar from "../../components/Navbar";

export default function Practice(props) {
  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll bg-gray-200">
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="bg-white w-8/12">
          <h1 className="text-xl text-center font-bold">Practice</h1>
          <div className="flex justify-center items-center gap-4"></div>
        </div>
      </div>
    </div>
  );
}
