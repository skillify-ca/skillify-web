import React, { useEffect, useState } from "react";

export default function MultiplicationBlock() {
  return (
    <div>
      {" "}
      <ul className="w-20 h-20 bg-green-400 flex justify-center items-center border-2 text-green-50 float-left ">
        <p>{"8 x 9"}</p>
      </ul>
      <ul className="w-20 h-20 bg-green-400 flex justify-center items-center border-2 text-green-50 float-left ">
        <p>72</p>
      </ul>
    </div>
  );
}
