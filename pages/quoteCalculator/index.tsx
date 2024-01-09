import React, { useState } from "react";
import { default as Contact } from "../../components/quoteCalculator/Contact";
import Initial from "../../components/quoteCalculator/Initial";
import Selections from "../../components/quoteCalculator/Selections";
enum Stages {
  Initial,
  Contact,
  Selections,
}
// Import statements...

export default function Quote() {
  const [stage, setStage] = useState<Stages>(Stages.Initial);
  const [questionId, setQuestionId] = useState<number>(1); // Initial question id

  // Function to switch between stages
  const handleStartClick = () => {
    setStage((prevStage) => prevStage + 1);
    setQuestionId((prevQuestionId) => prevQuestionId + 1); // Move to the next question
  };

  switch (stage) {
    case Stages.Initial:
      return (
        <div>
          <Initial handleClick={handleStartClick} />
        </div>
      );
    case Stages.Contact:
      return (
        <div>
          <Contact handleClick={handleStartClick} />
        </div>
      );
    case Stages.Selections:
      return (
        <div>
          <Selections questionId={questionId} handleClick={handleStartClick} />
        </div>
      );
    default:
      return null;
  }
}

Quote.getLayout = function getLayout(page) {
  return <div className=" theme-default">{page}</div>;
};
