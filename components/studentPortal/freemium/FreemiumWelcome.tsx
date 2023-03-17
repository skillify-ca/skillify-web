import React, { useState } from "react";

export enum ModalStage {
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
}

const FreemiumWelcome = () => {
  const [currentStage, setCurrentStage] = useState(ModalStage.ONE);

  const handleNext = () => {
    if (currentStage < ModalStage.FIVE) {
      setCurrentStage(currentStage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStage > ModalStage.ONE) {
      setCurrentStage(currentStage - 1);
    }
  };

  return (
    <div>
      {currentStage === ModalStage.ONE && <Welcome />}
      {currentStage === ModalStage.TWO && <PremiumFeatures />}
      {currentStage === ModalStage.THREE && <Upgrade />}
      {currentStage === ModalStage.FOUR && <WhereToStart />}
      {currentStage === ModalStage.FIVE && <Launch />}
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
export default FreemiumWelcome;
