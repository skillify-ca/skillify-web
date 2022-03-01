import React, { useEffect, useState } from "react";
import Head from "next/head";
import kaboom, { KaboomCtx } from "kaboom";
import Script from "next/script";
// import KaboomComponent from "../components/KaboomComponent";
import dynamic from "next/dynamic";
import { MultipleChoiceSentence } from "../components/questionTypes/MultipleChoiceSentence";
const KaboomComponent = dynamic(() => import("../components/KaboomComponent"));

const Kaboom = () => {
  const [k, setK] = useState<KaboomCtx>();
  const [showQuestion, setShowQuestion] = useState(false);

  const onQuestionRequested = () => {
    setShowQuestion(!showQuestion);
  };
  const onHideQuestionRequested= () => {
    setShowQuestion(false)
  }
  useEffect(() => {
    setK(
      kaboom({
        canvas: document.querySelector("#mycanvas"),
      })
    );
  }, []);
  return (
    <div className="grid grid-cols-12">
      <canvas id="mycanvas" className="col-span-8 bg-red-400 h-screen">
        <KaboomComponent k={k} requestQuestion={onQuestionRequested} hideQuestion={onHideQuestionRequested} />
      </canvas>
      <div className="col-span-4 bg-blue-300">
        {showQuestion && (
          <MultipleChoiceSentence
            answer={"a"}
            submitGuess={() => {
              console.log("WEE");
            }}
            displayQuestion={"What is a question?"}
            option1={{ id: "a", text: "WE Know" }}
            option2={{ id: "b", text: "HE Know" }}
            option3={{ id: "c", text: "SHE Knows" }}
            option4={{ id: "d", text: "THEY" }}
          />
        )}
      </div>
    </div>
  );
};

export default Kaboom;
