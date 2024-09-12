import Link from "next/link";

// ref https://www.simplilearn.com/how-to-introduce-yourself-in-a-job-interview-article#:~:text=%22Good%20day%2C%20I%20am%20%5B,the%20requirements%20of%20this%20position.

// Add recording feature for practice

export default function Lesson4Page() {
  return (
    <div className="theme-default">
      <div className="max-w-3xl mx-auto mt-8">
        <div className="flex items-center justify-between mb-6">
          <Link href="./assign1">
            <button className="px-4 py-2 mr-2 text-white bg-gray-500 rounded-lg">
              Back
            </button>
          </Link>
          <h1 className="text-3xl font-bold">How should I introduce myself?</h1>
          <Link href="./try1">
            <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">
              Next
            </button>
          </Link>
        </div>
        <div className="my-4 border-b"></div>
        <div className="max-w-3xl p-4 mx-auto mb-6 bg-white border border-gray-300 rounded-lg">
          <div className="lesson-content">
            <p>
              {`Creating a great self-introduction is crucial for impressing potential employers and landing your dream internship. Here are essential tips to showcase your skills and passion. Let's get started!`}
            </p>

            <div className="p-4 mt-6 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
              <h2 className="mb-2 text-xl font-bold">
                {`1. Keep it concise and focused`}
              </h2>
              <p>
                {`When introducing yourself, aim for a 30 to 60-second elevator pitch that highlights your key attributes and accomplishments. Avoid excessive detail to maintain the listener's attention.`}
              </p>
            </div>

            <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
              <h2 className="mb-2 text-xl font-bold">
                {`2. Start with a compelling hook`}
              </h2>
              <p>
                {`Begin with an attention-grabbing hook that summarizes your unique selling proposition, like an intriguing statement or relevant achievement.`}
              </p>
            </div>

            <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
              <h2 className="mb-2 text-xl font-bold">
                {`3. Highlight relevant skills and projects`}
              </h2>
              <p>
                {`Focus on skills and projects most relevant to the positions you're applying for, mentioning specific languages, frameworks, and tools you are proficient in.`}
              </p>
            </div>

            <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
              <h2 className="mb-2 text-xl font-bold">
                {`4. Emphasize eagerness to learn and grow`}
              </h2>
              <p>
                {`Express your eagerness to learn from experienced professionals, take on challenges, and contribute to meaningful projects.`}
              </p>
            </div>

            <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
              <h2 className="mb-2 text-xl font-bold">
                {`5. Personalize your introduction`}
              </h2>
              <p>
                {`Add a touch of personality by sharing a brief coding-related anecdote that reflects your passion or motivation.`}
              </p>
            </div>

            <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
              <h2 className="mb-2 text-xl font-bold">
                {`6. Practice makes perfect`}
              </h2>
              <p>
                {`Practice your self-introduction in front of a mirror, with friends, or record yourself to improve your tone, clarity, and confidence.`}
              </p>
            </div>

            <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
              <h2 className="mb-2 text-xl font-bold">
                {`7. Tailor your introduction for each opportunity`}
              </h2>
              <p>
                {`Customize your self-introduction for each application by researching the company's values, projects, and goals to demonstrate genuine interest.`}
              </p>
            </div>

            <div className="my-4 border-b"></div>
            <p>Conclusion:</p>
            <p>
              {`By following these tips, you'll make a strong impression on potential employers and increase your chances of landing the desired internship. Be confident, concise, and authentic when highlighting your coding skills and passion. Good luck!`}
            </p>
          </div>
        </div>

        {/* Additional Notes for Next Steps */}
        <div className="my-4 border-b"></div>
        <div className="prose">
          <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
            <h2 className="mb-4 text-xl font-bold">Notes:</h2>
            <textarea className="w-full"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
