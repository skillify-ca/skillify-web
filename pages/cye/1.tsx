import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import { Button } from "../../components/ui/Button";
import "katex/dist/katex.min.css";
import TeX from "@matejmazur/react-katex";
import bedmasRulesImg from "../../public/images/cye/rules.png";

enum Stage {
  RULES,
  ASSIGNMENT,
}

export default function Resources(props) {
  const [guess, setGuess] = useState("");
  const [stage, setStage] = useState(Stage.RULES);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const onNextQuestion = () => {
    setCurrentQuestionIndex(
      Math.min(questions.length - 1, currentQuestionIndex + 1)
    );
  };
  const onPreviousQuestion = () => {
    if (currentQuestionIndex == 0) {
      setStage(Stage.RULES);
    } else {
      setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1));
    }
  };
  const onStartAssignment = () => {
    setStage(Stage.ASSIGNMENT);
  };

  const questions = [
    "[(3 - 2)(2 - 3)]3[(—4) - 2)] + (+6)(2) - (-3)",
    "-[(6-3)(8-4)] + (-5)(-2) + 1 - (2)",
    "[(\\frac{(-5)(-8) - (4)(5)}{(8)-(-2)})^2]^3",
    "\\frac{(6)(-5) + (-3)-(2)}{(-4)(-2)+1}",
    "[(2)(—2)+2—4][(2)—2]",
    "\\frac{(4)(4)+4-(2)2^3}{3}",
    "(7)(2) — 4(2 — 4) + 6(—1)(—2)",
    "(4-1)^2 + 2(3-4)^3 + 6^2 - (8)(—3)",
    "(—2)(—4)(—3) + 4(—3) - 2(4)",
    "12 - (-4) + 6(-2) - \\frac{1-4}{3}",
    "[(4-2)+(3+2)][—2(4)+(5+8)-2]+4",
    "(4-1)^2 + 2(3-4)^3 + 6^2 - (8)(—3)",
    "\\frac{[(—4+3)(3+1)]^2—8(6—2)}{(4)(-2)(-3)}",
    "3 - 2(4 + 2) + 5(-2 - 3) - \\frac{2^3(3^3)}{(2)(3)}",
  ];
  let latexString =
    "This is inline $$int_{a}^{b} f(x)dx = F(b) - F(a)$$ latex string";

  return (
    <div className="flex flex-col bg-blue-50">
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-8 col-start-3">
          {stage == Stage.RULES && (
            <div className="flex flex-col gap-8">
              <Image src={bedmasRulesImg} objectFit="contain" alt="Bedmas Rules" width="300" height="600" />
              <Button
                label="Start"
                backgroundColor="blue"
                textColor="white"
                onClick={onStartAssignment}
              />
            </div>
          )}
          {stage == Stage.ASSIGNMENT && (
            <div className="flex flex-col gap-4 items-center min-w-max bg-blue-300 p-8">
              <p>Question #{currentQuestionIndex}</p>
              <div className="font-bold text-xl">
                <TeX block>{questions[currentQuestionIndex]}</TeX>
              </div>
              <label>
                Evaluate without the use of a calculator. Show all your work
              </label>
              <textarea
                className="w-2/3 h-36"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
              ></textarea>
              <div className="flex gap-8">
                <Button
                  label="Previous"
                  onClick={onPreviousQuestion}
                  backgroundColor="white"
                  textColor="blue-600"
                />
                <Button
                  label="Next"
                  onClick={onNextQuestion}
                  backgroundColor="blue"
                  textColor="white"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
