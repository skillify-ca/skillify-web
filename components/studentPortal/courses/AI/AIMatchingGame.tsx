import React, { useState } from "react";

const AIMatchingGame = () => {
  const [terms, setTerms] = useState([
    {
      id: 1,
      term: "AI Fluency",
      definition:
        "The ability to work with AI systems in ways that are effective, efficient, ethical, and safe.",
    },
    {
      id: 2,
      term: "The 4Ds",
      definition:
        "The four core competencies of AI Fluency: Delegation, Description, Discernment, and Diligence.",
    },
    {
      id: 3,
      term: "Delegation",
      definition:
        "Deciding on what work should be done by humans, what work should be done by AI, and how to distribute tasks between them.",
    },
    {
      id: 4,
      term: "Description",
      definition: "Effectively communicating with AI systems.",
    },
    {
      id: 5,
      term: "Discernment",
      definition:
        "Thoughtfully and critically evaluating AI outputs, processes, behaviors, and interactions.",
    },
    {
      id: 6,
      term: "Diligence",
      definition: "Using AI responsibly and ethically.",
    },
    // Add more terms here...
  ]);

  const [selectedTerm, setSelectedTerm] = useState(null);

  const handleSelectTerm = (term) => {
    setSelectedTerm(term);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">AI Matching Game</h1>
      <div className="flex flex-wrap justify-center">
        {terms.map((term) => (
          <div
            key={term.id}
            className="bg-white shadow-md rounded-lg p-4 w-64 m-4"
          >
            <h2
              onClick={() => handleSelectTerm(term)}
              className="cursor-pointer"
            >
              {term.term}
            </h2>
            {selectedTerm && selectedTerm.id === term.id && (
              <p className="mt-2">{term.definition}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIMatchingGame;
