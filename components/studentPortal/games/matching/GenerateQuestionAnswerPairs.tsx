import React from "react";
import { QuestionAnswerPair } from "../../../../pages/studentPortal/games";
import { Button } from "../../../ui/Button";
import { Input } from "../../../ui/Input";

type GenerateQuestionAnswerPairsProps = {
  questionAnswerPairs: QuestionAnswerPair[];
  setQuestionAnswerPairs: React.Dispatch<
    React.SetStateAction<QuestionAnswerPair[]>
  >;
  setStage: (stage: "game" | "review") => void;
};
export default function GenerateQuestionAnswerPairs({
  questionAnswerPairs,
  setQuestionAnswerPairs,
  setStage,
}: GenerateQuestionAnswerPairsProps) {
  const [prompt, setPrompt] = React.useState<string>("");
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const onGenerateClicked = () => {
    setLoading(true);
    fetch(
      `/api/studentPortal/games/matching/generateQuestionAnswerPairs?prompt=${prompt}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setQuestionAnswerPairs(res.data);
        }

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">
        Generate Question Answer Pairs
      </h1>

      <p>What topic do you want to generate questions about?</p>
      <div className="flex items-center gap-4">
        <Input placeholder="Enter topic" value={prompt} setValue={setPrompt} />
        <Button label="Generate" onClick={onGenerateClicked} />
      </div>
      <div className="flex flex-col gap-4 p-4 my-4 border-2">
        {isLoading ? (
          <div className="p-4 bg-backgroundSecondary">
            <p className="text-center">Loading...</p>
          </div>
        ) : questionAnswerPairs.length === 0 ? (
          <div className="p-4 bg-backgroundSecondary">
            <p className="text-center">No questions generated yet.</p>
          </div>
        ) : (
          questionAnswerPairs.map((pair) => (
            <div
              key={pair.question}
              className="flex justify-between p-4 bg-backgroundSecondary"
            >
              <p>{pair.question}</p>
              <p>{pair.answer}</p>
            </div>
          ))
        )}
      </div>
      <Button onClick={() => setStage("game")} label="Start Game" />
    </div>
  );
}
