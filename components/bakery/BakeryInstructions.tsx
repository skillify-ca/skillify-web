import React, { useState, useRef, useEffect } from "react";

const bakeryInstructions = () => {
  return (
    <div className={"grid grid-cols-2 bg-white min-h-screen"}>
      <div>
        <div
          className={
            "flex justify-center text-5xl text-red-200 font-bold mt-4 "
          }
        >
          Buliding a Bakery
        </div>
        <div className={"flex justify-center text-xl mx-8 my-8"}>
          Hooray! Your dreams are coming true, and you are buildilng your very
          own bakery. You are going to have a blast exploring the ins and outs
          of your new bakery. Before the flour gets flying and you fire up the
          ovens, we must find the perfect place to call home.
        </div>
      </div>
      <div className={""}>
        <div className={"border-2 border-black mx-16 mt-8"}>
          <div className={"flex justify-center text-xl"}> Bakery Name</div>
          <div className={"flex justify-center mx-4"}>
            <input className={"bg-yellow-100 w-screen h-8 mx-32 mb-4"}></input>
          </div>
          <div className={"flex justify-center text-xl"}> Bakery Slogan</div>
          <div className={"flex justify-center mx-4"}>
            <input className={"bg-yellow-100 w-screen h-8 mx-32 mb-4"}></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default bakeryInstructions;
