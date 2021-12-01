import React, { useState } from "react";
import CardColorProblem from "../components/credit-card/CardColorProblem";
import MultipleChoiceWordProblem from "../components/credit-card/MultipleChoiceWordProblem";
import CreditCardWordProblem from "../components/credit-card/CreditCardWordProblem";
import CreditDebitInfo from "../components/credit-card/CreditDebitInfo";
import DebitCardWordProblem from "../components/credit-card/DebitCardWordProblem";
import { Button } from "../components/ui/Button";
import CreditCardProgressTracker from "../components/credit-card/CreditCardProgressTracker";

export default function CreditCard(props) {
  enum STAGE {
    CreditDebitInfo, //intro with info
    CreditCardWordProblem, //credit card word problem
    DebitCardWordProblem, //debit card word problem
    MultipleChoiceWordProblem, //multiple choice
    CardColorProblem, //credit debit both color problem
  }

  //manages state
  const [stage, setStage] = useState(STAGE.CreditDebitInfo);

  // CreditDebitInfo states
  const [infoQ1, setInfoQ1] = useState("");
  const [infoA1, setInfoA1] = useState(0);
  const [infoQ2, setInfoQ2] = useState("");
  const [infoA2, setInfoA2] = useState(0);
  const [infoQ3, setInfoQ3] = useState("");
  const [infoA3, setInfoA3] = useState(0);
  const [infoQ4, setInfoQ4] = useState("");
  const [infoA4, setInfoA4] = useState(0);
  const [infoQ5, setInfoQ5] = useState("");
  const [infoA5, setInfoA5] = useState(0);
  const [infoQ6, setInfoQ6] = useState("");
  const [infoA6, setInfoA6] = useState(0);
  const [infoQ7, setInfoQ7] = useState("");
  const [infoA7, setInfoA7] = useState(0);
  const [infoQ8, setInfoQ8] = useState("");
  const [infoA8, setInfoA8] = useState(0);
  const [infoQ9, setInfoQ9] = useState("");
  const [infoA9, setInfoA9] = useState(0);
  const [infoQ10, setInfoQ10] = useState("");
  const [infoA10, setInfoA10] = useState(0);
  const [infoQ11, setInfoQ11] = useState("");
  const [infoA11, setInfoA11] = useState(0);

  const [scoreCounter, setScoreCounter] = useState(0);
  const [totalCounter, setTotalCounter] = useState(0);

  const onSubmitMaster = () => {
    // check if each stage has a score
    // return false if any stage has no score
    // else return true
    //final score reveal
    submitCreditDebitInfoScore();
  };

  const submitCreditDebitInfoScore = () => {
    const questionArray = [
      infoA1,
      infoA2,
      infoA3,
      infoA4,
      infoA5,
      infoA6,
      infoA7,
      infoA8,
      infoA9,
      infoA10,
      infoA11,
    ];
    let scores = questionArray.reduce((total, score) => total + score);
    console.log(scores);
    setScoreCounter(scores);
    setTotalCounter(questionArray.length);
  };

  const previousStage = () => {
    if (stage > STAGE.CreditDebitInfo) {
      setStage(stage - 1);
    }
  };

  const nextStage = () => {
    if (stage < STAGE.CardColorProblem) {
      setStage(stage + 1);
    }
  };

  const getComponent = (stage: STAGE) => {
    if (stage == STAGE.CreditDebitInfo) {
      return (
        <CreditDebitInfo
          infoQ1={infoQ1}
          setInfoQ1={setInfoQ1}
          infoA1={infoA1}
          setInfoA1={setInfoA1}
          infoQ2={infoQ2}
          setInfoQ2={setInfoQ2}
          infoA2={infoA1}
          setInfoA2={setInfoA2}
          infoQ3={infoQ3}
          setInfoQ3={setInfoQ3}
          infoA3={infoA1}
          setInfoA3={setInfoA3}
          infoQ4={infoQ4}
          setInfoQ4={setInfoQ4}
          infoA4={infoA4}
          setInfoA4={setInfoA4}
          infoQ5={infoQ5}
          setInfoQ5={setInfoQ5}
          infoA5={infoA5}
          setInfoA5={setInfoA5}
          infoQ6={infoQ6}
          setInfoQ6={setInfoQ6}
          infoA6={infoA6}
          setInfoA6={setInfoA6}
          infoQ7={infoQ7}
          setInfoQ7={setInfoQ7}
          infoA7={infoA7}
          setInfoA7={setInfoA7}
          infoQ8={infoQ8}
          setInfoQ8={setInfoQ8}
          infoA8={infoA8}
          setInfoA8={setInfoA8}
          infoQ9={infoQ9}
          setInfoQ9={setInfoQ9}
          infoA9={infoA9}
          setInfoA9={setInfoA9}
          infoQ10={infoQ10}
          setInfoQ10={setInfoQ10}
          infoA10={infoA10}
          setInfoA10={setInfoA10}
          infoQ11={infoQ11}
          setInfoQ11={setInfoQ11}
          infoA11={infoA11}
          setInfoA11={setInfoA11}
        />
      );
    } else if (stage == STAGE.CreditCardWordProblem) {
      return <CreditCardWordProblem />;
    } else if (stage == STAGE.DebitCardWordProblem) {
      return <DebitCardWordProblem />;
    } else if (stage == STAGE.MultipleChoiceWordProblem) {
      return <MultipleChoiceWordProblem />;
    } else if (stage == STAGE.CardColorProblem) {
      return <CardColorProblem />;
    }
  };

  return (
    <div className={"bg-white"}>
      <CreditCardProgressTracker
        score={scoreCounter}
        updateScore={setScoreCounter}
        total={totalCounter}
        updateTotal={setTotalCounter}
      />
      <div>{getComponent(stage)}</div>
      <div className="flex flex-row space-x-8 justify-center">
        <Button
          label="submit"
          backgroundColor="yellow"
          textColor="white"
          onClick={onSubmitMaster}
        />
      </div>
      {stage == STAGE.CreditDebitInfo ? (
        <div className="flex flex-col min-w-full p-12">
          <Button
            backgroundColor="purple"
            textColor="white"
            label="Next"
            onClick={nextStage}
          />
        </div>
      ) : (
        <div className="flex flex-row space-x-8 justify-center p-12">
          <Button
            backgroundColor="purple"
            textColor="white"
            label="Go Back"
            onClick={previousStage}
          />

          <Button
            backgroundColor="green"
            textColor="white"
            label="Next"
            onClick={nextStage}
          />
        </div>
      )}
    </div>
  );
}
