import React, { useState } from "react";
import apiData from "../pages/api/addition10.json";

const Addition10 = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const questionData = apiData["questions"];

  return (
    <div>
      <div className="p-4">
        
      </div>
    </div>
  );
};

export default Addition10;
