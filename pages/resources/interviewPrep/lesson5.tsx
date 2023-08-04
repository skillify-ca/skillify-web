import React from 'react';
import Link from 'next/link';
import { InterviewPrepCourse } from '.';
import LandingNavbar from '../../../components/landingPage/LandingNavbar';

export default function WrapUpPage() {
  return (
    <div className="theme-default">
      <div className="max-w-3xl mx-auto mt-8">
        <div className="flex items-center justify-between mb-6">
          <Link href="./assign2">
            <button className="px-4 py-2 mr-2 text-white bg-gray-500 rounded-lg">
              Back
            </button>
          </Link>
          <h1 className="text-3xl font-bold">
            Wrap Up: Are You Interview Ready?
          </h1>
          <Link href="./">
            <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">
              Next
            </button>
          </Link>
        </div>

        <div className="max-w-3xl p-4 mx-auto mb-6 bg-white border border-gray-300 rounded-lg">
          <p className="mb-6">
            {`Congratulations on completing our interview preparation course! By
            now, you've gained valuable insights and honed your skills for a
            successful job interview experience. But how do you know if you're
            truly interview-ready? Here are some key indicators to consider:`}
          </p>

          <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
            <h2 className="mb-4 text-xl font-bold">1. Self-Confidence:</h2>
            <p className="mb-6">
              {`A crucial sign of being interview-ready is feeling confident in your abilities. Reflect on your preparation journey and acknowledge the progress you've made. Trust in yourself and your knowledge to tackle interview questions with poise and composure.`}
            </p>
          </div>

          <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
            <h2 className="mb-4 text-xl font-bold">
              2. Understanding Job Requirements:
            </h2>
            <p className="mb-6">
              {`Ensure you have a clear understanding of the job requirements and the skills the employer is seeking. Tailor your responses to highlight your relevant experiences and how you can contribute to the organization.`}
            </p>
          </div>

          <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
            <h2 className="mb-4 text-xl font-bold">3. Practicing Responses:</h2>
            <p className="mb-6">
              {`Practice answering common interview questions, both behavioral and technical. Use the STAR method (Situation, Task, Action, Result) for behavioral questions, and provide specific examples to support your answers.`}
            </p>
          </div>

          <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
            <h2 className="mb-4 text-xl font-bold">
              4. Handling Technical Questions:
            </h2>
            <p className="mb-6">
              {`For technical roles, be prepared to discuss technical concepts and demonstrate your problem-solving skills. Practice coding challenges and review fundamental concepts related to the role you're applying for.`}
            </p>
          </div>

          <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
            <h2 className="mb-4 text-xl font-bold">
              5. Demonstrating Soft Skills:
            </h2>
            <p className="mb-6">
              {`Employers value soft skills such as communication, teamwork, adaptability, and leadership. Be ready to provide examples of how you've utilized these skills in past experiences.`}
            </p>
          </div>

          <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
            <h2 className="mb-4 text-xl font-bold">6. Asking Questions:</h2>
            <p className="mb-6">
              {`Prepare thoughtful questions to ask the interviewer. This demonstrates your interest in the role and company, and it's an opportunity to gather valuable information about the position.`}
            </p>
          </div>

          <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
            <h2 className="mb-4 text-xl font-bold">7. Handling Nervousness:</h2>
            <p className="mb-6">
              {`Feeling nervous before an interview is normal. Practice relaxation techniques to manage nervousness. Take deep breaths, visualize a successful interview, and remember that interviews are opportunities to showcase your skills.`}
            </p>
          </div>

          <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
            <h2 className="mb-4 text-xl font-bold">
              General Tips for Interview Preparation:
            </h2>
            <ul className="pl-6 mb-6 list-disc">
              <li>{`Research the company: Understand the company's values, culture, and recent developments. This knowledge will help you tailor your responses and demonstrate your genuine interest.`}</li>
              <li>{`Practice with mock interviews: Ask a friend or mentor to conduct mock interviews. Practice answering various types of questions to boost your confidence.`}</li>
              <li>{`Dress appropriately: Choose professional attire that aligns with the company culture. Dressing well shows respect for the interview process.`}</li>
              <li>{`Review your resume: Be prepared to discuss your experiences, skills, and achievements mentioned on your resume. Highlight relevant accomplishments for the role.`}</li>
              <li>{`Prepare for different interview formats: Be ready for phone interviews, video interviews, or in-person interviews. Adjust your communication style accordingly.`}</li>
              <li>{`Arrive early: Plan your travel in advance and aim to arrive a few minutes early for the interview. Punctuality is essential.`}</li>
              <li>{`Bring necessary materials: Carry extra copies of your resume, a notepad, and a pen. You may also bring a portfolio to showcase your work.`}</li>
              <li>{`Follow up: Send a thank-you email to the interviewer(s) after the interview. Express your gratitude for the opportunity and reiterate your interest in the position.`}</li>
              <li>{`Stay positive: Interviews may not always lead to job offers. Regardless of the outcome, view each interview as a learning experience and an opportunity to grow.`}</li>
            </ul>
          </div>

          <p>
            {`Remember, preparation is key to a successful interview. Good luck, and we wish you all the best in your job search!`}
          </p>
        </div>
      </div>

      {/* Additional Notes for Next Steps */}
      <div className="my-4 border-b"></div>
      <div className="prose">
        <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
          <h2 className="mb-4 text-xl font-bold">Notes:</h2>
          <p>Video format recommended add-on</p>
        </div>
      </div>
    </div>
  );
}

WrapUpPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />

      <div className="grid h-screen grid-cols-1 lg:grid-cols-12">
        <div className="hidden col-span-5 overflow-scroll lg:block">
          <InterviewPrepCourse />
        </div>
        <div className="col-span-7 p-4 overflow-scroll">{page}</div>
      </div>
    </div>
  );
};
