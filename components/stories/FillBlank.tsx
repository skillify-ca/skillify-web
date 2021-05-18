import {
  SSL_OP_PKCS1_CHECK_1,
  SSL_OP_SSLEAY_080_CLIENT_DH_BUG,
} from "node:constants";
import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Question } from "../../pages/api/question";
import { Button } from "./Button";

export interface FillBlankProp {
  displayQuestion: string;
  step1: string;
  step2: string;
  step3: string;
  submitGuess: (guess: GuessData) => void;
}

export const FillBlank: React.FC<FillBlankProp> = ({
  displayQuestion,
  step1,
  step2,
  step3,
  submitGuess,
  ...props
}) => {
  const [guess, setGuess] = useState("");
  const [button1Visible, setButton1Visible] = useState(true);
  const [button2Visible, setButton2Visible] = useState(false);
  const [button3Visible, setButton3Visible] = useState(false);
  const [button4Visible, setButton4Visible] = useState(false);

  function onButton1Click(e) {
    setButton2Visible(true);
    setButton1Visible(false);
  }
  function onButton2Click(e) {
    setButton3Visible(true);
    setButton2Visible(false);
  }
  function onButton3Click(e) {
    setButton4Visible(true);
    setButton3Visible(false);
  }
  function onButton4Click(e) {
    submitGuess({ guess: "", isCorrect: true });
    setButton1Visible(true);
    setButton4Visible(false);
  }

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      onSubmit();
    }
  };
  const onSubmit = () => {
    setGuess("");
    submitGuess({ guess: guess, isCorrect: guess === "33" });
  };
  const parse = () => {
    let index1 = 0;
    let index2 = 0;
    let index3 = 0;
    let step1first = "";
    let step1second = "";
    let step2first = "";
    let step2second = "";
    let step3first = "";

    const step1parts = step1.split(" ");
    const step2parts = step2.split(" ");
    const step3parts = step3.split(" ");

    for (index1 = 0; index1 < 8; ++index1) {
      step1first += step1parts[index1] + " ";
    }
    for (index1 = 9; index1 < 11; ++index1) {
      step1second += step1parts[index1] + " ";
    }
    for (index2 = 0; index2 < 3; ++index2) {
      step2first += step2parts[index2] + " ";
    }

    for (index2 = 4; index2 < 6; ++index2) {
      step2second += step2parts[index2] + " ";
    }
    for (index3 = 0; index3 < 3; ++index3) {
      step3first += step3parts[index3] + " ";
    }
    const stepArray = [
      step1first,
      step1second,
      step2first,
      step2second,
      step3first,
    ];
    return {
      steps: stepArray,
    };
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      <h1 className="text-4m font-semibold text-center"> {displayQuestion} </h1>
      <p>
        {parse().steps[0]}
        <input
          spellCheck="false"
          className="border py-0.5 px-0.5 text-grey-darkest p-8 w-10"
          type="number"
        ></input>
        {" " + parse().steps[1]}
        {button1Visible && (
          <Button label="Lock-in" onClick={onButton1Click}></Button>
        )}
      </p>
      <p>
        {" "}
        {parse().steps[2] + "("}
        <input
          spellCheck="false"
          className="border py-0.5 px-0.5 text-grey-darkest p-8 w-10"
          type="number"
        ></input>
        {" " + parse().steps[3]}
        {button2Visible && (
          <Button onClick={onButton2Click} label="Lock-in"></Button>
        )}
      </p>

      <p>
        {" "}
        {parse().steps[4]}
        <input
          spellCheck="false"
          className="border py-0.5 px-0.5 text-grey-darkest p-8 w-10"
          type="number"
        ></input>
        {button3Visible && (
          <Button onClick={onButton3Click} label="Lock-in"></Button>
        )}
      </p>

      <p>
        {" "}
        ={" "}
        <input
          spellCheck="false"
          className="border py-0.5 px-0.5 text-grey-darkest p-8 w-10"
          type="number"
        ></input>{" "}
        {button4Visible && (
          <Button onClick={onButton4Click} label="Lock-in"></Button>
        )}
      </p>
    </div>
  );
};
