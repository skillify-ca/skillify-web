import AIMatchingGame from "../../../../components/studentPortal/courses/AI/AIMatchingGame";

function AILesson() {
  return (
    <div className="max-w-3xl p-8 mx-auto">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">
          AI Fluency: Framework & Foundations
        </h1>
      </div>
      <div className="my-4 border-b"></div>
      <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
        <h2 className="mb-2 text-xl font-semibold">About this Course</h2>
        <ul>
          <li>Estimated time for entire course: 3-4 hours</li>
          <li>Estimated time for this lesson: 10-15 minutes</li>
        </ul>
      </div>
      <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
        <h2 className="mb-2 text-xl font-semibold">What you'll learn</h2>
        <ol>
          <li>
            Understand the purpose and structure of the course to determine if
            it will meet your learning needs
          </li>
          <li>Recognize the importance of AI Fluency in today's world</li>
          <li>Identify key components of your learning journey ahead</li>
          <li>Set clear expectations for what you’ll gain from this course</li>
        </ol>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Matching Game</h2>
        <AIMatchingGame />
      </div>
    </div>
  );
}

export default AILesson;
