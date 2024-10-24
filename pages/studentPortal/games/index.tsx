import Link from "next/link";
import React from "react";
import Card from "../../../components/ui/Card";

export type QuestionAnswerPair = {
  question: string;
  answer: string;
};

export default function GamePage() {
  return (
    (<div className="p-4 bg-backgroundSecondary">
      <h1 className="mb-4 text-5xl font-bold">Games</h1>
      <div className="grid grid-cols-3">
        <Link href="/studentPortal/games/matching" legacyBehavior>
          <div className="cursor-pointer">
            <Card size={"medium"}>
              <h1 className="mb-4 text-2xl font-bold text-center">
                Matching Game
              </h1>
            </Card>
          </div>
        </Link>
      </div>
    </div>)
  );
}

GamePage.premium = true;
