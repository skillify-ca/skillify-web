import { useState } from "react";

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

  const [definitions, setDefinitions] = useState([
    {
      id: 1,
      definition:
        "The ability to work with AI systems in ways that are effective, efficient, ethical, and safe.",
    },
    {
      id: 2,
      definition:
        "The four core competencies of AI Fluency: Delegation, Description, Discernment, and Diligence.",
    },
    {
      id: 3,
      definition:
        "Deciding on what work should be done by humans, what work should be done by AI, and how to distribute tasks between them.",
    },
    { id: 4, definition: "Effectively communicating with AI systems." },
    {
      id: 5,
      definition:
        "Thoughtfully and critically evaluating AI outputs, processes, behaviors, and interactions.",
    },
    { id: 6, definition: "Using AI responsibly and ethically." },
    // Add more definitions here...
  ]);

  const [matches, setMatches] = useState({});

  const handleMatch = (termId, definitionId) => {
    setMatches((prevMatches) => ({ ...prevMatches, [termId]: definitionId }));
  };

  const handleReset = () => {
    setMatches({});
  };

  return (
    <div>
      <h1>Matching Game</h1>
      <ul>
        {terms.map((term) => (
          <li key={term.id}>
            <h2>{term.term}</h2>
            <ul>
              {definitions.map((definition) => (
                <li key={definition.id}>
                  <input
                    type="radio"
                    name={String(term.id)}
                    value={definition.id}
                    checked={matches[term.id] === definition.id}
                    onChange={() => handleMatch(term.id, definition.id)}
                  />
                  <span>{definition.definition}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default AIMatchingGame;
