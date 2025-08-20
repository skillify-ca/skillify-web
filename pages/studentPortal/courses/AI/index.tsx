import AIMatchingGame from "../../../../components/studentPortal/courses/AI/AIMatchingGame";

// Full AI Lesson
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

      {/* Reflection */}
      <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Reflection</h2>
        <p className="text-lg text-black-600">
          Before moving on, take a moment to consider your own experiences with
          AI:
        </p>
        <ul className="list-disc list-inside">
          <li>
            What challenges have you encountered when working with AI to achieve
            specific outcomes?
          </li>
          <li>What possibilities for AI collaboration excite you most?</li>
          <li>What do you hope to gain from this course?</li>
        </ul>
      </div>

      <AIMatchingGame />
    </div>
  );
};

export default AILesson;
