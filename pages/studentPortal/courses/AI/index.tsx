import { useState } from "react";

const AIMatchingGame = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flex justify-center">
      <div
        className="relative w-72 h-80 [perspective:1000px] cursor-pointer"
        onClick={handleFlip}
      >
        <div
          className={`relative w-full h-full cursor-pointer border border-gray-800 rounded-lg transition-transform duration-700 [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front Side */}
          <div className="absolute w-full h-full bg-white shadow-md rounded-lg p-6 flex items-center justify-center [backface-visibility:hidden]">
            <h2 className="text-2xl text-gray-900 text-center">AI Fluency</h2>
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <span className="text-2xl text-gray-900 text-center">
              AI Fluency
            </span>
            <div className="h-4"></div>
            <span className="text-lg text-gray-600 text-left">
              The ability to work with AI systems in ways that are effective,
              efficient, ethical, and safe. Includes practical skills,
              knowledge, insights, and values that help you adapt to evolving AI
              technologies.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const AILesson = () => {
  return (
    <div className="max-w-3xl p-8 mx-auto">
      {/* Header */}
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">
          AI Fluency: Framework & Foundations
        </h1>
      </div>

      <div className="my-4 border-b"></div>

      {/* About this Course */}
      <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
        <h2 className="mb-2 text-xl font-semibold">About this Course</h2>
        <ul className="list-disc list-inside">
          <li>Estimated time for entire course: 3-4 hours</li>
          <li>Estimated time for this lesson: 10-15 minutes</li>
        </ul>
      </div>

      {/* What You'll Learn */}
      <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
        <h2 className="mb-2 text-xl font-semibold">What you'll learn</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>
            Understand the purpose and structure of the course to determine if
            it will meet your learning needs
          </li>
          <li>Recognize the importance of AI Fluency in today's world</li>
          <li>Identify key components of your learning journey ahead</li>
          <li>Set clear expectations for what you’ll gain from this course</li>
        </ol>
      </div>

      {/* Exercises */}
      <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
        <h2 className="mb-2 text-xl font-semibold">Exercises</h2>
        <p className="text-lg text-black-600">Putting things into practice</p>
        <p className="text-lg text-black-600">
          You'll need access to a language model (5-10 mins)
        </p>
        <p className="text-lg text-black-600">
          Throughout this course, you'll practice what you're learning by
          working directly with a language model. While our examples feature
          Claude (Anthropic's AI assistant), you're welcome to work with any
          language model you prefer. The principles and skills we’ll explore
          apply across different AI systems.
        </p>
        <p className="text-lg text-black-600">
          Getting started is simple and free:
        </p>
        <ul className="list-disc list-inside">
          <li>Claude: Visit claude.ai to create a free account</li>
          <li>No paid subscriptions required to complete course activities</li>
          <li>You can also use other AI chatbots as you prefer</li>
          <li>
            New to Claude? No worries! We'll provide clear guidance with each
            exercise to help you get started
          </li>
        </ul>
      </div>

      {/*Reflection*/}
      <div>
        <h2 className="text-2xl font-bold mb-4">Reflection</h2>
      </div>

      {/* Matching Game */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Flash Cards</h2>
        <AIMatchingGame />
      </div>
    </div>
  );
};

export default AILesson;
