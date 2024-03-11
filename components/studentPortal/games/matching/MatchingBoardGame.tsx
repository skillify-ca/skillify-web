import React, { useEffect } from "react";
import { QuestionAnswerPair } from "../../../../pages/studentPortal/games";
import { Card } from "./Card";

type MatchingBoardGameProps = {
  cardData: string[];
  questionAnswerPairs: QuestionAnswerPair[];
};

export default function MatchingBoardGame({
  cardData,
  questionAnswerPairs,
}: MatchingBoardGameProps) {
  const [cards, setCards] = React.useState<string[]>(cardData);
  const [selectedCards, setSelectedCards] = React.useState<string[]>([]);
  const [matchedCards, setMatchedCards] = React.useState<string[]>([]);
  const [isGameWon, setIsGameWon] = React.useState<boolean>(false);

  useEffect(() => {
    if (matchedCards.length === cards.length) {
      setIsGameWon(true);
    }
  }, [matchedCards, cards]);

  const onCardSelected = (value: string) => {
    if (selectedCards.length === 2) {
      setSelectedCards([]);
    } else {
      if (selectedCards.includes(value)) {
        setSelectedCards(selectedCards.filter((card) => card !== value));
      } else {
        const nextSelctions = [...selectedCards, value];
        setSelectedCards(nextSelctions);

        if (nextSelctions.length === 2) {
          // check if the cards belong to the same question/answer pair
          const [firstCard, secondCard] = nextSelctions;
          const foundPair = questionAnswerPairs.find((pair) => {
            return (
              (pair.question === firstCard && pair.answer === secondCard) ||
              (pair.question === secondCard && pair.answer === firstCard)
            );
          });

          if (foundPair !== undefined) {
            setMatchedCards([
              ...matchedCards,
              foundPair.question,
              foundPair.answer,
            ]);
          }
        }
      }
    }
  };

  return (
    <div className="grid grid-cols-5 w-[800px] gap-4">
      {isGameWon && (
        <div className="col-span-5">
          <h1 className="text-2xl font-bold text-center">You Won!</h1>
        </div>
      )}
      {cards.map((value) => (
        <Card
          key={value}
          value={value}
          flipped={selectedCards.includes(value)}
          matched={matchedCards.includes(value)}
          onClick={() => onCardSelected(value)}
        />
      ))}
    </div>
  );
}
