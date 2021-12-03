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

  //DebitCardWordProblem states
  const [debitQ1, setDebitQ1] = useState("");
  const [debitA1, setDebitA1] = useState(0);
  const [isDebitCorrectQ1, setIsDebitCorrectQ1] = useState(false);
  const [debitQ2, setDebitQ2] = useState("");
  const [debitA2, setDebitA2] = useState(0);
  const [isDebitCorrectQ2, setIsDebitCorrectQ2] = useState(false);
  const [debitQ3, setDebitQ3] = useState("");
  const [debitA3, setDebitA3] = useState(0);
  const [isDebitCorrectQ3, setIsDebitCorrectQ3] = useState(false);
  const [debitQ4, setDebitQ4] = useState("");
  const [debitA4, setDebitA4] = useState(0);
  const [isDebitCorrectQ4, setIsDebitCorrectQ4] = useState(false);
  const [debitQ5, setDebitQ5] = useState("");
  const [debitA5, setDebitA5] = useState(0);
  const [isDebitCorrectQ5, setIsDebitCorrectQ5] = useState(false);
  const [debitQ6, setDebitQ6] = useState("");
  const [debitA6, setDebitA6] = useState(0);
  const [isDebitCorrectQ6, setIsDebitCorrectQ6] = useState(false);
  const [debitQ7, setDebitQ7] = useState("");
  const [debitA7, setDebitA7] = useState(0);
  const [isDebitCorrectQ7, setIsDebitCorrectQ7] = useState(false);
  const [debitQ8, setDebitQ8] = useState("");
  const [debitA8, setDebitA8] = useState(0);
  const [isDebitCorrectQ8, setIsDebitCorrectQ8] = useState(false);
  const [debitQ9, setDebitQ9] = useState("");
  const [debitA9, setDebitA9] = useState(0);
  const [isDebitCorrectQ9, setIsDebitCorrectQ9] = useState(false);
  const [debitQ10, setDebitQ10] = useState("");
  const [debitA10, setDebitA10] = useState(0);
  const [isDebitCorrectQ10, setIsDebitCorrectQ10] = useState(false);
  const [debitQ11, setDebitQ11] = useState("");
  const [debitA11, setDebitA11] = useState(0);
  const [isDebitCorrectQ11, setIsDebitCorrectQ11] = useState(false);
  const [debitQ12, setDebitQ12] = useState("");
  const [debitA12, setDebitA12] = useState(0);
  const [isDebitCorrectQ12, setIsDebitCorrectQ12] = useState(false);

  // MultipleChoiceWordProblem states
  const [multiQ1, setMultiQ1] = useState("");

  // Global Progress tracker
  const [scoreCounter, setScoreCounter] = useState(0);

  // disable button onClick
  const [disabledInfo, setDisabledInfo] = useState(false);
  const [disabledCreditCard, setDisabledCreditCard] = useState(false);
  const [disabledDebitCard, setDisabledDebitCard] = useState(false);
  const [disabledMC, setDisabledMC] = useState(false);
  const [disabledColorCard, setDisabledColorCard] = useState(false);

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
    setScoreCounter(scoreCounter + scores);
    validateCreditDebitInfoScore();
    setDisabledInfo(true);
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
  };

  const submitCreditCardWordScore = () => {
    const questionArray = [
      creditA1,
      creditA2,
      creditA3,
      creditA4,
      creditA5,
      creditA6,
      creditA7,
      creditA8,
      creditA9,
      creditA10,
      creditA11,
      creditA12,
      creditA13,
      creditA14,
      creditA15,
    ];
    let scores = questionArray.reduce((total, score) => total + score);
    setScoreCounter(scoreCounter + scores);
    validateCreditCardWordScore();
    setDisabledCreditCard(true);
  };

  const validateCreditCardWordScore = () => {
    creditA1 == 1 ? setIsCreditCorrectQ1(true) : setIsCreditCorrectQ1(false);
    creditA2 == 1 ? setIsCreditCorrectQ2(true) : setIsCreditCorrectQ2(false);
    creditA3 == 1 ? setIsCreditCorrectQ3(true) : setIsCreditCorrectQ3(false);
    creditA4 == 1 ? setIsCreditCorrectQ4(true) : setIsCreditCorrectQ4(false);
    creditA5 == 1 ? setIsCreditCorrectQ5(true) : setIsCreditCorrectQ5(false);
    creditA6 == 1 ? setIsCreditCorrectQ6(true) : setIsCreditCorrectQ6(false);
    creditA7 == 1 ? setIsCreditCorrectQ7(true) : setIsCreditCorrectQ7(false);
    creditA8 == 1 ? setIsCreditCorrectQ8(true) : setIsCreditCorrectQ8(false);
    creditA9 == 1 ? setIsCreditCorrectQ9(true) : setIsCreditCorrectQ9(false);
    creditA10 == 1 ? setIsCreditCorrectQ10(true) : setIsCreditCorrectQ10(false);
    creditA11 == 1 ? setIsCreditCorrectQ11(true) : setIsCreditCorrectQ11(false);
    creditA12 == 1 ? setIsCreditCorrectQ12(true) : setIsCreditCorrectQ12(false);
    creditA13 == 1 ? setIsCreditCorrectQ13(true) : setIsCreditCorrectQ13(false);
    creditA14 == 1 ? setIsCreditCorrectQ14(true) : setIsCreditCorrectQ14(false);
    creditA15 == 1 ? setIsCreditCorrectQ15(true) : setIsCreditCorrectQ15(false);
  };

  const submitDebitCardWordScore = () => {
    const questionArray = [
      debitA1,
      debitA2,
      debitA3,
      debitA4,
      debitA5,
      debitA6,
      debitA7,
      debitA8,
      debitA9,
      debitA10,
      debitA11,
      debitA12,
    ];
    let scores = questionArray.reduce((total, score) => total + score);
    setScoreCounter(scoreCounter + scores);
    validateDebitCardWordScore();
    setDisabledDebitCard(true);
  };

  const validateDebitCardWordScore = () => {
    debitA1 == 1 ? setIsDebitCorrectQ1(true) : setIsDebitCorrectQ1(false);
    debitA2 == 1 ? setIsDebitCorrectQ2(true) : setIsDebitCorrectQ2(false);
    debitA3 == 1 ? setIsDebitCorrectQ3(true) : setIsDebitCorrectQ3(false);
    debitA4 == 1 ? setIsDebitCorrectQ4(true) : setIsDebitCorrectQ4(false);
    debitA5 == 1 ? setIsDebitCorrectQ5(true) : setIsDebitCorrectQ5(false);
    debitA6 == 1 ? setIsDebitCorrectQ6(true) : setIsDebitCorrectQ6(false);
    debitA7 == 1 ? setIsDebitCorrectQ7(true) : setIsDebitCorrectQ7(false);
    debitA8 == 1 ? setIsDebitCorrectQ8(true) : setIsDebitCorrectQ8(false);
    debitA9 == 1 ? setIsDebitCorrectQ9(true) : setIsDebitCorrectQ9(false);
    debitA10 == 1 ? setIsDebitCorrectQ10(true) : setIsDebitCorrectQ10(false);
    debitA11 == 1 ? setIsDebitCorrectQ11(true) : setIsDebitCorrectQ11(false);
    debitA12 == 1 ? setIsDebitCorrectQ12(true) : setIsDebitCorrectQ12(false);
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
              onClick={submitCreditDebitInfoScore}
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
            isCreditCorrectQ1={isCreditCorrectQ1}
            setIsCreditCorrectQ1={setIsCreditCorrectQ1}
            creditQ2={creditQ2}
            setCreditQ2={setCreditQ2}
            creditA2={creditA2}
            setCreditA2={setCreditA2}
            isCreditCorrectQ2={isCreditCorrectQ2}
            setIsCreditCorrectQ2={setIsCreditCorrectQ2}
            creditQ3={creditQ3}
            setCreditQ3={setCreditQ3}
            creditA3={creditA3}
            setCreditA3={setCreditA3}
            isCreditCorrectQ3={isCreditCorrectQ3}
            setIsCreditCorrectQ3={setIsCreditCorrectQ3}
            creditQ4={creditQ4}
            setCreditQ4={setCreditQ4}
            creditA4={creditA4}
            setCreditA4={setCreditA4}
            isCreditCorrectQ4={isCreditCorrectQ4}
            setIsCreditCorrectQ4={setIsCreditCorrectQ4}
            creditQ5={creditQ5}
            setCreditQ5={setCreditQ5}
            creditA5={creditA5}
            setCreditA5={setCreditA5}
            isCreditCorrectQ5={isCreditCorrectQ5}
            setIsCreditCorrectQ5={setIsCreditCorrectQ5}
            creditQ6={creditQ6}
            setCreditQ6={setCreditQ6}
            creditA6={creditA6}
            setCreditA6={setCreditA6}
            isCreditCorrectQ6={isCreditCorrectQ6}
            setIsCreditCorrectQ6={setIsCreditCorrectQ6}
            creditQ7={creditQ7}
            setCreditQ7={setCreditQ7}
            creditA7={creditA7}
            setCreditA7={setCreditA7}
            isCreditCorrectQ7={isCreditCorrectQ7}
            setIsCreditCorrectQ7={setIsCreditCorrectQ7}
            creditQ8={creditQ8}
            setCreditQ8={setCreditQ8}
            creditA8={creditA8}
            setCreditA8={setCreditA8}
            isCreditCorrectQ8={isCreditCorrectQ8}
            setIsCreditCorrectQ8={setIsCreditCorrectQ8}
            creditQ9={creditQ9}
            setCreditQ9={setCreditQ9}
            creditA9={creditA9}
            setCreditA9={setCreditA9}
            isCreditCorrectQ9={isCreditCorrectQ9}
            setIsCreditCorrectQ9={setIsCreditCorrectQ9}
            creditQ10={creditQ10}
            setCreditQ10={setCreditQ10}
            creditA10={creditA10}
            setCreditA10={setCreditA10}
            isCreditCorrectQ10={isCreditCorrectQ10}
            setIsCreditCorrectQ10={setIsCreditCorrectQ10}
            creditQ11={creditQ11}
            setCreditQ11={setCreditQ11}
            creditA11={creditA11}
            setCreditA11={setCreditA11}
            isCreditCorrectQ11={isCreditCorrectQ11}
            setIsCreditCorrectQ11={setIsCreditCorrectQ11}
            creditQ12={creditQ12}
            setCreditQ12={setCreditQ12}
            creditA12={creditA12}
            setCreditA12={setCreditA12}
            isCreditCorrectQ12={isCreditCorrectQ12}
            setIsCreditCorrectQ12={setIsCreditCorrectQ12}
            creditQ13={creditQ13}
            setCreditQ13={setCreditQ13}
            creditA13={creditA13}
            setCreditA13={setCreditA13}
            isCreditCorrectQ13={isCreditCorrectQ13}
            setIsCreditCorrectQ13={setIsCreditCorrectQ13}
            creditQ14={creditQ14}
            setCreditQ14={setCreditQ14}
            creditA14={creditA14}
            setCreditA14={setCreditA14}
            isCreditCorrectQ14={isCreditCorrectQ14}
            setIsCreditCorrectQ14={setIsCreditCorrectQ14}
            creditQ15={creditQ15}
            setCreditQ15={setCreditQ15}
            creditA15={creditA15}
            setCreditA15={setCreditA15}
            isCreditCorrectQ15={isCreditCorrectQ15}
            setIsCreditCorrectQ15={setIsCreditCorrectQ15}
          />
          ;
          <div className="flex flex-row space-x-8 justify-center">
            <Button
              label="submit"
              backgroundColor="yellow"
              textColor="white"
              disabled={disabledCreditCard}
              onClick={submitCreditCardWordScore}
            />
          </div>
        </>
      );
    } else if (stage == STAGE.DebitCardWordProblem) {
      return (
        <>
          <DebitCardWordProblem
            debitQ1={debitQ1}
            setDebitQ1={setDebitQ1}
            debitA1={debitA1}
            setDebitA1={setDebitA1}
            isDebitCorrectQ1={isDebitCorrectQ1}
            setIsDebitCorrectQ1={setIsDebitCorrectQ1}
            debitQ2={debitQ2}
            setDebitQ2={setDebitQ2}
            debitA2={debitA2}
            setDebitA2={setDebitA2}
            isDebitCorrectQ2={isDebitCorrectQ2}
            setIsDebitCorrectQ2={setIsDebitCorrectQ2}
            debitQ3={debitQ3}
            setDebitQ3={setDebitQ3}
            debitA3={debitA3}
            setDebitA3={setDebitA3}
            isDebitCorrectQ3={isDebitCorrectQ3}
            setIsDebitCorrectQ3={setIsDebitCorrectQ3}
            debitQ4={debitQ4}
            setDebitQ4={setDebitQ4}
            debitA4={debitA4}
            setDebitA4={setDebitA4}
            isDebitCorrectQ4={isDebitCorrectQ4}
            setIsDebitCorrectQ4={setIsDebitCorrectQ4}
            debitQ5={debitQ5}
            setDebitQ5={setDebitQ5}
            debitA5={debitA5}
            setDebitA5={setDebitA5}
            isDebitCorrectQ5={isDebitCorrectQ5}
            setIsDebitCorrectQ5={setIsDebitCorrectQ5}
            debitQ6={debitQ6}
            setDebitQ6={setDebitQ6}
            debitA6={debitA6}
            setDebitA6={setDebitA6}
            isDebitCorrectQ6={isDebitCorrectQ6}
            setIsDebitCorrectQ6={setIsDebitCorrectQ6}
            debitQ7={debitQ7}
            setDebitQ7={setDebitQ7}
            debitA7={debitA7}
            setDebitA7={setDebitA7}
            isDebitCorrectQ7={isDebitCorrectQ7}
            setIsDebitCorrectQ7={setIsDebitCorrectQ7}
            debitQ8={debitQ8}
            setDebitQ8={setDebitQ8}
            debitA8={debitA8}
            setDebitA8={setDebitA8}
            isDebitCorrectQ8={isDebitCorrectQ8}
            setIsDebitCorrectQ8={setIsDebitCorrectQ8}
            debitQ9={debitQ9}
            setDebitQ9={setDebitQ9}
            debitA9={debitA9}
            setDebitA9={setDebitA9}
            isDebitCorrectQ9={isDebitCorrectQ9}
            setIsDebitCorrectQ9={setIsDebitCorrectQ9}
            debitQ10={debitQ10}
            setDebitQ10={setDebitQ10}
            debitA10={debitA10}
            setDebitA10={setDebitA10}
            isDebitCorrectQ10={isDebitCorrectQ10}
            setIsDebitCorrectQ10={setIsDebitCorrectQ10}
            debitQ11={debitQ11}
            setDebitQ11={setDebitQ11}
            debitA11={debitA11}
            setDebitA11={setDebitA11}
            isDebitCorrectQ11={isDebitCorrectQ11}
            setIsDebitCorrectQ11={setIsDebitCorrectQ11}
            debitQ12={debitQ12}
            setDebitQ12={setDebitQ12}
            debitA12={debitA12}
            setDebitA12={setDebitA12}
            isDebitCorrectQ12={isDebitCorrectQ12}
            setIsDebitCorrectQ12={setIsDebitCorrectQ12}
          />
          ;{" "}
          <div className="flex flex-row space-x-8 justify-center">
            <Button
              label="submit"
              backgroundColor="yellow"
              textColor="white"
              disabled={disabledDebitCard}
              onClick={submitDebitCardWordScore}
            />
          </div>
        </>
      );
    } else if (stage == STAGE.MultipleChoiceWordProblem) {
      return (
        <>
          <MultipleChoiceWordProblem
            multiQ1={multiQ1}
            setMultiQ1={setMultiQ1}
          />
          ;
          <div className="flex flex-row space-x-8 justify-center">
            <Button
              label="submit"
              backgroundColor="yellow"
              textColor="white"
              disabled={disabledMC}
              onClick={submitDebitCardWordScore}
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
              disabled={disabledColorCard}
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
