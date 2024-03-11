import React from "react";
import GenerateQuestionAnswerPairs from "../../../components/studentPortal/games/matching/GenerateQuestionAnswerPairs";
import MatchingBoardGame from "../../../components/studentPortal/games/matching/MatchingBoardGame";

export type QuestionAnswerPair = {
  question: string;
  answer: string;
};

export default function MatchingGamePage() {
  const [questionAnswerPairs, setQuestionAnswerPairs] = React.useState<
    QuestionAnswerPair[]
  >([]);

  const getCardData = (questionAnswerPairs: QuestionAnswerPair[]): string[] => {
    const cardValues = questionAnswerPairs.reduce(
      (acc: string[], curr: QuestionAnswerPair) => {
        acc.push(curr.question, curr.answer);
        return acc;
      },
      []
    );

    // shuffle the array
    const shuffledCardValues = cardValues.sort(() => Math.random() - 0.5);
    return shuffledCardValues;
  };

  const [stage, setStage] = React.useState<"review" | "game">("review");

  return (
    <div className="max-w-5xl p-4">
      <h1 className="mb-4 text-5xl font-bold text-center">Matching Game</h1>
      {stage === "review" && (
        <GenerateQuestionAnswerPairs
          questionAnswerPairs={questionAnswerPairs}
          setQuestionAnswerPairs={setQuestionAnswerPairs}
          setStage={setStage}
        />
      )}
      {stage === "game" && (
        <MatchingBoardGame
          cardData={getCardData(questionAnswerPairs)}
          questionAnswerPairs={questionAnswerPairs}
        />
      )}
    </div>
  );
}
