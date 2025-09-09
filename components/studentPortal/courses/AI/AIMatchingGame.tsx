import { useState } from "react";

// Full list of all flashcards
const allCards = [
  {
    front: "AI Fluency",
    back: "The ability to work with AI systems in ways that are effective, efficient, ethical, and safe. Includes practical skills, knowledge, insights, and values that help you adapt to evolving AI technologies.",
  },
  {
    front: "The 4Ds",
    back: "The four core competencies of AI Fluency: Delegation, Description, Discernment, and Diligence.",
  },
  {
    front: "Delegation",
    back: "Deciding on what work should be done by humans, what work should be done by AI, and how to distribute tasks between them. Includes understanding your goals, AI capabilities, and making strategic choices about collaboration.",
  },
  {
    front: "Problem Awareness",
    back: "Clearly understanding your goals and the nature of the work before involving AI.",
  },
  {
    front: "Platform Awareness",
    back: "Understanding the capabilities and limitations of different AI systems.",
  },
  {
    front: "Task Delegation",
    back: "Thoughtfully distributing work between humans and AI to leverage the strengths of each.",
  },
  {
    front: "Product Description",
    back: "Defining what you want in terms of outputs, format, audience, and style.",
  },
  {
    front: "Process Description",
    back: "Defining how the AI approaches your request, such as providing step by step instructions for the AI to follow.",
  },
  {
    front: "Performance Description",
    back: "Defining the AI's behavior during your collaboration, such as whether it should be concise or detailed, challenging or supportive.",
  },
  {
    front: "Product Discernment",
    back: "Evaluating the quality of what AI produces (accuracy, appropriateness, coherence, relevance).",
  },
  {
    front: "Process Discernment",
    back: "Evaluating how the AI arrived at its output, looking for logical errors, lapses in attention, or inappropriate reasoning steps.",
  },
  {
    front: "Performance Discernment",
    back: "Evaluating how the AI behaves during your interaction, considering whether its communication style is effective for your needs.",
  },
  {
    front: "Creation Diligence",
    back: "Being thoughtful about which AI systems you use and how you interact with them.",
  },
  {
    front: "Transparency Diligence",
    back: "Being honest about AI's role in your work with everyone who needs to know.",
  },
  {
    front: "Deployment Diligence",
    back: "Taking responsibility for verifying and vouching for the outputs you use or share.",
  },
  {
    front: "Automation",
    back: "When AI performs specific tasks based on specific human instructions. The human defines what needs to be done, and the AI executes it.",
  },
  {
    front: "Augmentation",
    back: "When humans and AI collaborate as thinking partners to complete tasks together. Involves iterative back-and-forth where both contribute to the outcome.",
  },
  {
    front: "Agency",
    back: "When humans configure AI to work independently on their behalf, including interacting with other humans or AI. The human establishes the AI's knowledge and behavior patterns rather than specifying exact actions.",
  },
  {
    front: "Generative AI",
    back: "AI systems that can create new content (text, images, code, etc.) rather than just analyzing existing data.",
  },
  {
    front: "Large Language Models (LLMs)",
    back: "Generative AI systems trained on vast amounts of text data to understand and generate human language.",
  },
  { front: "Claude", back: "Anthropic's family of large language models." },
  {
    front: "Parameters",
    back: "The mathematical values within an AI model that determine how it processes information and relates different pieces of language to each other. Modern LLMs contain billions of parameters.",
  },
  {
    front: "Neural Networks",
    back: "Computing systems similar to, but distinct from, biological brains. Composed of interconnected nodes organized in layers that learn patterns from data through training.",
  },
  {
    front: "Transformer Architecture",
    back: "The breakthrough AI design from 2017 that enables LLMs to process sequences of text in parallel while paying attention to relationships between words across long passages.",
  },
  {
    front: "Scaling Laws",
    back: "As AI models have grown larger and trained on more data with more computing power, their performance has improved in consistent patterns. New capabilities can emerge at certain scale thresholds.",
  },
  {
    front: "Pre-training",
    back: "The initial training phase where AI models learn patterns from vast amounts of text data, developing a foundational understanding of language and knowledge.",
  },
  {
    front: "Fine-tuning",
    back: "Additional training after pre-training where models learn to follow instructions, provide helpful responses, and avoid generating harmful content.",
  },
  {
    front: "Context Window",
    back: "The amount of information an AI can consider at one time, including the conversation history and any documents you've shared.",
  },
  {
    front: "Hallucination",
    back: "A type of error when AI confidently states something that sounds plausible, but is actually incorrect.",
  },
  {
    front: "Knowledge Cutoff Date",
    back: "The point after which an AI model has no built-in knowledge of the world, based on when it was trained.",
  },
  {
    front: "Reasoning or Thinking Models",
    back: "Types of AI models specifically designed to think step-by-step through complex problems, showing improved capabilities for tasks requiring logical reasoning.",
  },
  {
    front: "Temperature",
    back: "A setting that controls how random an AI's responses are. Higher temperature produces more varied and creative outputs, while lower temperature produces more predictable responses.",
  },
  {
    front: "Retrieval Augmented Generation (RAG)",
    back: "A technique that connects AI models to external knowledge sources to improve accuracy and reduce hallucinations.",
  },
  {
    front: "Bias",
    back: "Systematic patterns in AI outputs that unfairly favor or disadvantage certain groups or perspectives, often reflecting patterns in training data.",
  },
  {
    front: "Prompt",
    back: "The input given to an AI model, including instructions and any documents shared.",
  },
  {
    front: "Prompt Engineering",
    back: "The practice of designing effective prompts for AI systems to produce desired outputs. Combines clear communication with AI-specific techniques.",
  },
  {
    front: "Chain-of-thought Prompting",
    back: "Encouraging an AI to work through a problem step by step, breaking down complex tasks into smaller steps that help the AI follow your thinking and deliver better results.",
  },
  {
    front: "Few-shot Learning (n-shot prompting)",
    back: "Teaching AI by showing examples of the desired input-output pattern. Helps the model understand what you want without lengthy explanations.",
  },
  {
    front: "Role or Persona Definition",
    back: "Specifying a particular character, expertise level, or communication style for the AI to adopt when responding. Can range from general roles to specific personas.",
  },
  {
    front: "Output Constraints / Output Formatting",
    back: "Clearly specifying within your prompt the desired format, length, structure, or other characteristics of the AI's response.",
  },
  {
    front: "Think-first Approach",
    back: "Explicitly asking the AI to work through its reasoning process before providing a final answer, which can lead to more thorough and well-considered responses.",
  },
];
const AIMatchingGame = () => {
  // State variables
  //visibleCards is a storing variable for the cards that are visible on the screen
  //setVisibleCards is a function to update visibleCards
  //and allcards.silce(0,3) is the first 3 cards that is shown on the screen inititally
  const [visibleCards, setVisibleCards] = useState(allCards.slice(0, 3));
  //flipped keeps track of the backside of the cards
  //and array of 3 elements that show false initially
  const [flipped, setFlipped] = useState(Array(3).fill(false));

  //handleFlip is called when the user clicks on the card
  //index is which card is clicked (0,1,2)
  //
  const handleFlip = (index) => {
    setFlipped((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };
  const handleRefresh = () => {
    const shuffled = [...allCards].sort(() => Math.random() - 0.5);
    const newVisible = shuffled.slice(0, 3);
    setVisibleCards(newVisible);
    setFlipped(Array(3).fill(false));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-center">Flash Cards</h2>
        <button
          onClick={handleRefresh}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Refresh
        </button>
      </div>

      <div className="flex justify-center gap-4">
        {visibleCards.map((card, idx) => (
          <div
            key={idx}
            className="relative w-72 h-80 [perspective:1000px] cursor-pointer"
            onClick={() => handleFlip(idx)}
          >
            <div
              className={`relative w-full h-full border border-gray-800 rounded-lg transition-transform duration-700 [transform-style:preserve-3d] ${
                flipped[idx] ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* Front */}
              <div className="absolute w-full h-full bg-white shadow-md rounded-lg p-6 flex items-center justify-center [backface-visibility:hidden]">
                <h2 className="text-xl text-gray-900 text-center">
                  {card.front}
                </h2>
              </div>

              {/* Back */}
              <div className="absolute w-full h-full bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <span className="text-xl text-gray-900 text-center font-semibold">
                  {card.front}
                </span>
                <div className="h-3"></div>
                <div className="text-sm leading-tight text-gray-600 text-left">
                  {card.back}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIMatchingGame;
