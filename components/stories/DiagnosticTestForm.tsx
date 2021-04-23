import React, { useRef, useState } from "react";
import { Button } from "./Button";
import Card from "./Card";
import Dropdown from "./Dropdown";
import Toggle from "./Toggle";
import { VerticalEquation } from "./VerticalEquation";

type DiagnosticTestFormProps = {
  onClick: (e) => void
};

const DiagnosticTestForm = ({
  onClick
}: DiagnosticTestFormProps) => {
  return (<div className="flex flex-col items-center bg-white rounded-lg p-4 w-64 h-96">
    <p className="text-xl font-bold mb-8">Diagnostic Test</p>

    <div className="flex w-full gap-4 mb-8">
      <p className="text-sm font-bold text-gray-700">Topics</p>
      <div className="flex flex-col">
        <div className="flex gap-4">
          <Toggle />
          <p>Addition</p>
        </div>
        <div className="flex gap-4">
          <Toggle />
          <p>Subtraction</p>
        </div>
        <div className="flex gap-4">
          <Toggle />
          <p>Multiplication</p>
        </div>
        <div className="flex gap-4">
          <Toggle />
          <p>Division</p>
        </div>
      </div>
    </div>

    <div className="w-full mb-16">
      <Dropdown />
    </div>

    <Button backgroundColor="blue" label="Start" textColor="white" onClick={onClick} />
  </div>)
};

export default DiagnosticTestForm;
