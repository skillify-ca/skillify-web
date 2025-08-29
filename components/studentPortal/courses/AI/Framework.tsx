import React, { useState } from "react";

const cardsData = [
  { id: 1, text: "Delegation", pairId: "delegation", type: "name" },
  {
    id: 2,
    text: "Setting goals and deciding whether, when and how to engage with AI.",
    pairId: "delegation",
    type: "description",
  },
  { id: 3, text: "Discernment", pairId: "discernment", type: "name" },
  {
    id: 4,
    text: "Accurately assessing the usefulness of AI outputs and behaviors.",
    pairId: "discernment",
    type: "description",
  },
  { id: 5, text: "Description", pairId: "description", type: "name" },
  {
    id: 6,
    text: "Effectively describing goals to prompt useful AI behaviors and outputs.",
    pairId: "description",
    type: "description",
  },
  { id: 7, text: "Diligence", pairId: "diligence", type: "name" },
  {
    id: 8,
    text: "Taking responsibility for what we do with AI and how we do it.",
    pairId: "diligence",
    type: "description",
  },
];

// Utility: shuffle an array
const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

const Framework = () => {
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);
  const [names, setNames] = useState(
    shuffleArray(cardsData.filter((c) => c.type === "name"))
  );
  const [descriptions, setDescriptions] = useState(
    shuffleArray(cardsData.filter((c) => c.type === "description"))
  );

  const handleCardClick = (card) => {
    if (matched.includes(card.pairId)) return; // ignore already matched

    const newSelection = [...selected, card];

    if (newSelection.length === 2) {
      if (newSelection[0].pairId === newSelection[1].pairId) {
        setMatched((prev) => [...prev, card.pairId]);
      }
      setSelected([]); // reset after 2 clicks
    } else {
      setSelected(newSelection);
    }
  };

  const handleShuffle = () => {
    setNames(shuffleArray(cardsData.filter((c) => c.type === "name")));
    setDescriptions(
      shuffleArray(cardsData.filter((c) => c.type === "description"))
    );
    setMatched([]); // reset matches
    setSelected([]); // reset selections
  };

  // Check if all pairs are matched
  const allMatched =
    matched.length === new Set(cardsData.map((c) => c.pairId)).size;

  return (
    <div>
      <h1 className="font-bold text-2xl mb-6 text-center">The 4D Framework</h1>

      <div className="flex justify-between px-10">
        {/* Left side: Shuffled Names */}
        <div className="flex flex-col gap-4 w-1/3">
          {names.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card)}
              className={`border p-4 rounded-xl cursor-pointer shadow transition ${
                matched.includes(card.pairId) ? "bg-green-300" : "bg-white"
              }`}
            >
              {card.text}
            </div>
          ))}
        </div>

        {/* Right side: Shuffled Descriptions */}
        <div className="flex flex-col gap-4 w-1/3">
          {descriptions.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card)}
              className={`border p-4 rounded-xl cursor-pointer shadow transition ${
                matched.includes(card.pairId) ? "bg-green-300" : "bg-white"
              }`}
            >
              {card.text}
            </div>
          ))}
        </div>
      </div>

      {/* Shuffle Button (only enabled after all matches) */}
      <div className="text-center mt-6">
        <button
          onClick={handleShuffle}
          disabled={!allMatched}
          className={`px-6 py-2 rounded-xl font-semibold shadow ${
            allMatched
              ? "bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        >
          Shuffle & Play Again
        </button>
      </div>
    </div>
  );
};

export default Framework;
