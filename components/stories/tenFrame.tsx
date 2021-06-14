import React, { useEffect, useState } from "react";
import { Story, Meta } from "@storybook/react";

const TenFrame = () => {
  return (
    <div>
      <div className="inline-flex border-8 m-0 space-x-4 relative">
        <div className="rounded-full h-24 w-24 flex items-center justify-center bg-red-400 "></div>
        <div className="border-r-8"></div>
        <div className="rounded-full h-24 w-24 flex items-center justify-center bg-red-400 border-black "></div>
        <div className="border-r-8"></div>
        <div className="rounded-full h-24 w-24 flex items-center justify-center bg-red-400 border-black"></div>
        <div className="border-r-8"></div>
        <div className="rounded-full h-24 w-24 flex items-center justify-center bg-red-400 border-black"></div>
        <div className="border-r-8"></div>
        <div className="rounded-full h-24 w-24 flex items-center justify-center bg-red-400 border-black"></div>
      </div>
      <div className="inline-flex border-8 m-0 space-x-4">
        <div className="rounded-full h-24 w-24 flex items-center justify-center bg-red-400 border-black relative"></div>
        <div className="border-r-8"></div>
        <div className="rounded-full h-24 w-24 flex items-center justify-center bg-red-400 border-black "></div>
        <div className="border-r-8"></div>
        <div className="rounded-full h-24 w-24 flex items-center justify-center bg-red-400 border-black"></div>
        <div className="border-r-8"></div>
        <div className="rounded-full h-24 w-24 flex items-center justify-center bg-red-400 border-black"></div>
        <div className="border-r-8"></div>
        <div className="rounded-full h-24 w-24 flex items-center justify-center bg-red-400 border-black"></div>
      </div>
    </div>
  );
};

export default TenFrame;
