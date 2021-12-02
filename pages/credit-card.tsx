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

  // Manage stage
  const [stage, setStage] = useState(STAGE.CreditDebitInfo);

  // CreditDebitInfo states
  const [infoQ1, setInfoQ1] = useState("");
  const [infoA1, setInfoA1] = useState(0);
  const [isCorrectQ1, setIsCorrectQ1] = useState(false);
  const [infoQ2, setInfoQ2] = useState("");
  const [infoA2, setInfoA2] = useState(0);
  const [isCorrectQ2, setIsCorrectQ2] = useState(false);
  const [infoQ3, setInfoQ3] = useState("");
  const [infoA3, setInfoA3] = useState(0);
  const [isCorrectQ3, setIsCorrectQ3] = useState(false);
  const [infoQ4, setInfoQ4] = useState("");
  const [infoA4, setInfoA4] = useState(0);
  const [isCorrectQ4, setIsCorrectQ4] = useState(false);
  const [infoQ5, setInfoQ5] = useState("");
  const [infoA5, setInfoA5] = useState(0);
  const [isCorrectQ5, setIsCorrectQ5] = useState(false);
  const [infoQ6, setInfoQ6] = useState("");
  const [infoA6, setInfoA6] = useState(0);
  const [isCorrectQ6, setIsCorrectQ6] = useState(false);
  const [infoQ7, setInfoQ7] = useState("");
  const [infoA7, setInfoA7] = useState(0);
  const [isCorrectQ7, setIsCorrectQ7] = useState(false);
  const [infoQ8, setInfoQ8] = useState("");
  const [infoA8, setInfoA8] = useState(0);
  const [isCorrectQ8, setIsCorrectQ8] = useState(false);
  const [infoQ9, setInfoQ9] = useState("");
  const [infoA9, setInfoA9] = useState(0);
  const [isCorrectQ9, setIsCorrectQ9] = useState(false);
  const [infoQ10, setInfoQ10] = useState("");
  const [infoA10, setInfoA10] = useState(0);
  const [isCorrectQ10, setIsCorrectQ10] = useState(false);
  const [infoQ11, setInfoQ11] = useState("");
  const [infoA11, setInfoA11] = useState(0);
  const [isCorrectQ11, setIsCorrectQ11] = useState(false);

  // CreditCardWordProblem states
  const [creditQ1, setCreditQ1] = useState("");
  const [creditA1, setCreditA1] = useState(0);
  const [isCreditCorrectQ1, setIsCreditCorrectQ1] = useState(false);
  const [creditQ2, setCreditQ2] = useState("");
  const [creditA2, setCreditA2] = useState(0);
  const [isCreditCorrectQ2, setIsCreditCorrectQ2] = useState(false);
  const [creditQ3, setCreditQ3] = useState("");
  const [creditA3, setCreditA3] = useState(0);
  const [isCreditCorrectQ3, setIsCreditCorrectQ3] = useState(false);
  const [creditQ4, setCreditQ4] = useState("");
  const [creditA4, setCreditA4] = useState(0);
  const [isCreditCorrectQ4, setIsCreditCorrectQ4] = useState(false);
  const [creditQ5, setCreditQ5] = useState("");
  const [creditA5, setCreditA5] = useState(0);
  const [isCreditCorrectQ5, setIsCreditCorrectQ5] = useState(false);
  const [creditQ6, setCreditQ6] = useState("");
  const [creditA6, setCreditA6] = useState(0);
  const [isCreditCorrectQ6, setIsCreditCorrectQ6] = useState(false);
  const [creditQ7, setCreditQ7] = useState("");
  const [creditA7, setCreditA7] = useState(0);
  const [isCreditCorrectQ7, setIsCreditCorrectQ7] = useState(false);
  const [creditQ8, setCreditQ8] = useState("");
  const [creditA8, setCreditA8] = useState(0);
  const [isCreditCorrectQ8, setIsCreditCorrectQ8] = useState(false);
  const [creditQ9, setCreditQ9] = useState("");
  const [creditA9, setCreditA9] = useState(0);
  const [isCreditCorrectQ9, setIsCreditCorrectQ9] = useState(false);
  const [creditQ10, setCreditQ10] = useState("");
  const [creditA10, setCreditA10] = useState(0);
  const [isCreditCorrectQ10, setIsCreditCorrectQ10] = useState(false);
  const [creditQ11, setCreditQ11] = useState("");
  const [creditA11, setCreditA11] = useState(0);
  const [isCreditCorrectQ11, setIsCreditCorrectQ11] = useState(false);
  const [creditQ12, setCreditQ12] = useState("");
  const [creditA12, setCreditA12] = useState(0);
  const [isCreditCorrectQ12, setIsCreditCorrectQ12] = useState(false);
  const [creditQ13, setCreditQ13] = useState("");
  const [creditA13, setCreditA13] = useState(0);
  const [isCreditCorrectQ13, setIsCreditCorrectQ13] = useState(false);
  const [creditQ14, setCreditQ14] = useState("");
  const [creditA14, setCreditA14] = useState(0);
  const [isCreditCorrectQ14, setIsCreditCorrectQ14] = useState(false);
  const [creditQ15, setCreditQ15] = useState("");
  const [creditA15, setCreditA15] = useState(0);
  const [isCreditCorrectQ15, setIsCreditCorrectQ15] = useState(false);

  // Progress tracker
  const [scoreCounter, setScoreCounter] = useState(0);
  const [totalCounter, setTotalCounter] = useState(0);

  // disable button onClick
  const [disabledInfo, setDisabledInfo] = useState(false);
  const [disabledCreditCard, setDisabledCreditCard] = useState(false);
  const [disabledDebitCard, setDisabledDebitCard] = useState(false);
  const [disabledMC, setDisabledMC] = useState(false);
  const [disabledColorCard, setDisabledColorCard] = useState(false);

  const onSubmitMaster = () => {
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
    validateCreditDebitInfoScore();
  };

  const validateCreditDebitInfoScore = () => {
    infoA1 === 1 ? setIsCorrectQ1(true) : setIsCorrectQ1(false);
    infoA2 === 1 ? setIsCorrectQ2(true) : setIsCorrectQ2(false);
    infoA3 === 1 ? setIsCorrectQ3(true) : setIsCorrectQ3(false);
    infoA4 === 1 ? setIsCorrectQ4(true) : setIsCorrectQ4(false);
    infoA5 === 1 ? setIsCorrectQ5(true) : setIsCorrectQ5(false);
    infoA6 === 1 ? setIsCorrectQ6(true) : setIsCorrectQ6(false);
    infoA7 === 1 ? setIsCorrectQ7(true) : setIsCorrectQ7(false);
    infoA8 === 1 ? setIsCorrectQ8(true) : setIsCorrectQ8(false);
    infoA9 === 1 ? setIsCorrectQ9(true) : setIsCorrectQ9(false);
    infoA10 === 1 ? setIsCorrectQ10(true) : setIsCorrectQ10(false);
    infoA11 === 1 ? setIsCorrectQ11(true) : setIsCorrectQ11(false);
    setDisabledInfo(true);
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
        <>
          <CreditDebitInfo
            infoQ1={infoQ1}
            setInfoQ1={setInfoQ1}
            infoA1={infoA1}
            setInfoA1={setInfoA1}
            isCorrectQ1={isCorrectQ1}
            setIsCorrectQ1={setIsCorrectQ1}
            infoQ2={infoQ2}
            setInfoQ2={setInfoQ2}
            infoA2={infoA2}
            setInfoA2={setInfoA2}
            isCorrectQ2={isCorrectQ2}
            setIsCorrectQ2={setIsCorrectQ2}
            infoQ3={infoQ3}
            setInfoQ3={setInfoQ3}
            infoA3={infoA3}
            setInfoA3={setInfoA3}
            isCorrectQ3={isCorrectQ3}
            setIsCorrectQ3={setIsCorrectQ3}
            infoQ4={infoQ4}
            setInfoQ4={setInfoQ4}
            infoA4={infoA4}
            setInfoA4={setInfoA4}
            isCorrectQ4={isCorrectQ4}
            setIsCorrectQ4={setIsCorrectQ4}
            infoQ5={infoQ5}
            setInfoQ5={setInfoQ5}
            infoA5={infoA5}
            setInfoA5={setInfoA5}
            isCorrectQ5={isCorrectQ5}
            setIsCorrectQ5={setIsCorrectQ5}
            infoQ6={infoQ6}
            setInfoQ6={setInfoQ6}
            infoA6={infoA6}
            setInfoA6={setInfoA6}
            isCorrectQ6={isCorrectQ6}
            setIsCorrectQ6={setIsCorrectQ6}
            infoQ7={infoQ7}
            setInfoQ7={setInfoQ7}
            infoA7={infoA7}
            setInfoA7={setInfoA7}
            isCorrectQ7={isCorrectQ7}
            setIsCorrectQ7={setIsCorrectQ7}
            infoQ8={infoQ8}
            setInfoQ8={setInfoQ8}
            infoA8={infoA8}
            setInfoA8={setInfoA8}
            isCorrectQ8={isCorrectQ8}
            setIsCorrectQ8={setIsCorrectQ8}
            infoQ9={infoQ9}
            setInfoQ9={setInfoQ9}
            infoA9={infoA9}
            setInfoA9={setInfoA9}
            isCorrectQ9={isCorrectQ9}
            setIsCorrectQ9={setIsCorrectQ9}
            infoQ10={infoQ10}
            setInfoQ10={setInfoQ10}
            infoA10={infoA10}
            setInfoA10={setInfoA10}
            isCorrectQ10={isCorrectQ10}
            setIsCorrectQ10={setIsCorrectQ10}
            infoQ11={infoQ11}
            setInfoQ11={setInfoQ11}
            infoA11={infoA11}
            setInfoA11={setInfoA11}
            isCorrectQ11={isCorrectQ11}
            setIsCorrectQ11={setIsCorrectQ11}
          />
          <div className="flex flex-row space-x-8 justify-center">
            <Button
              label="submit"
              backgroundColor="yellow"
              textColor="white"
              disabled={disabledInfo}
              onClick={onSubmitMaster}
            />
          </div>
        </>
      );
    } else if (stage == STAGE.CreditCardWordProblem) {
      return (
        <>
          <CreditCardWordProblem
            creditQ1={creditQ1}
            setCreditQ1={setCreditQ1}
            creditA1={creditA1}
            setCreditA1={setCreditA1}
            iscreditCorrectQ1={isCreditCorrectQ1}
            setIsCreditCorrectQ1={setIsCreditCorrectQ1}
            creditQ2={creditQ2}
            setCreditQ2={setCreditQ2}
            creditA2={creditA2}
            setCreditA2={setCreditA2}
            iscreditCorrectQ2={isCreditCorrectQ2}
            setIsCreditCorrectQ2={setIsCreditCorrectQ2}
            creditQ3={creditQ3}
            setCreditQ3={setCreditQ3}
            creditA3={creditA3}
            setCreditA3={setCreditA3}
            iscreditCorrectQ3={isCreditCorrectQ3}
            setIsCreditCorrectQ3={setIsCreditCorrectQ3}
            creditQ1={creditQ1}
            setCreditQ1={setCreditQ1}
            creditA1={creditA1}
            setCreditA1={setCreditA1}
            iscreditCorrectQ1={isCreditCorrectQ1}
            setIsCreditCorrectQ1={setIsCreditCorrectQ1}
            creditQ1={creditQ1}
            setCreditQ1={setCreditQ1}
            creditA1={creditA1}
            setCreditA1={setCreditA1}
            iscreditCorrectQ1={isCreditCorrectQ1}
            setIsCreditCorrectQ1={setIsCreditCorrectQ1}
            creditQ1={creditQ1}
            setCreditQ1={setCreditQ1}
            creditA1={creditA1}
            setCreditA1={setCreditA1}
            iscreditCorrectQ1={isCreditCorrectQ1}
            setIsCreditCorrectQ1={setIsCreditCorrectQ1}
            creditQ1={creditQ1}
            setCreditQ1={setCreditQ1}
            creditA1={creditA1}
            setCreditA1={setCreditA1}
            iscreditCorrectQ1={isCreditCorrectQ1}
            setIsCreditCorrectQ1={setIsCreditCorrectQ1}
            creditQ1={creditQ1}
            setCreditQ1={setCreditQ1}
            creditA1={creditA1}
            setCreditA1={setCreditA1}
            iscreditCorrectQ1={isCreditCorrectQ1}
            setIsCreditCorrectQ1={setIsCreditCorrectQ1}
            creditQ1={creditQ1}
            setCreditQ1={setCreditQ1}
            creditA1={creditA1}
            setCreditA1={setCreditA1}
            iscreditCorrectQ1={isCreditCorrectQ1}
            setIsCreditCorrectQ1={setIsCreditCorrectQ1}
            creditQ1={creditQ1}
            setCreditQ1={setCreditQ1}
            creditA1={creditA1}
            setCreditA1={setCreditA1}
            iscreditCorrectQ1={isCreditCorrectQ1}
            setIsCreditCorrectQ1={setIsCreditCorrectQ1}
            creditQ1={creditQ1}
            setCreditQ1={setCreditQ1}
            creditA1={creditA1}
            setCreditA1={setCreditA1}
            iscreditCorrectQ1={isCreditCorrectQ1}
            setIsCreditCorrectQ1={setIsCreditCorrectQ1}
            creditQ1={creditQ1}
            setCreditQ1={setCreditQ1}
            creditA1={creditA1}
            setCreditA1={setCreditA1}
            iscreditCorrectQ1={isCreditCorrectQ1}
            setIsCreditCorrectQ1={setIsCreditCorrectQ1}
            creditQ1={creditQ1}
            setCreditQ1={setCreditQ1}
            creditA1={creditA1}
            setCreditA1={setCreditA1}
            iscreditCorrectQ1={isCreditCorrectQ1}
            setIsCreditCorrectQ1={setIsCreditCorrectQ1}
            creditQ1={creditQ1}
            setCreditQ1={setCreditQ1}
            creditA1={creditA1}
            setCreditA1={setCreditA1}
            iscreditCorrectQ1={isCreditCorrectQ1}
            setIsCreditCorrectQ1={setIsCreditCorrectQ1}
            creditQ1={creditQ1}
            setCreditQ1={setCreditQ1}
            creditA1={creditA1}
            setCreditA1={setCreditA1}
            iscreditCorrectQ1={isCreditCorrectQ1}
            setIsCreditCorrectQ1={setIsCreditCorrectQ1}
          />
          ;
          <div className="flex flex-row space-x-8 justify-center">
            <Button
              label="submit"
              backgroundColor="yellow"
              textColor="white"
              disabled={disabledColorCard}
              onClick={onSubmitMaster}
            />
          </div>
        </>
      );
    } else if (stage == STAGE.DebitCardWordProblem) {
      return (
        <>
          <DebitCardWordProblem />;{" "}
          <div className="flex flex-row space-x-8 justify-center">
            <Button
              label="submit"
              backgroundColor="yellow"
              textColor="white"
              disabled={disabledDebitCard}
              onClick={onSubmitMaster}
            />
          </div>
        </>
      );
    } else if (stage == STAGE.MultipleChoiceWordProblem) {
      return (
        <>
          <MultipleChoiceWordProblem />;
          <div className="flex flex-row space-x-8 justify-center">
            <Button
              label="submit"
              backgroundColor="yellow"
              textColor="white"
              disabled={disabledMC}
              onClick={onSubmitMaster}
            />
          </div>
        </>
      );
    } else if (stage == STAGE.CardColorProblem) {
      return (
        <>
          <CardColorProblem />;{" "}
          <div className="flex flex-row space-x-8 justify-center">
            <Button
              label="submit"
              backgroundColor="yellow"
              textColor="white"
              disabled={disabledCreditCard}
              onClick={onSubmitMaster}
            />
          </div>
        </>
      );
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
