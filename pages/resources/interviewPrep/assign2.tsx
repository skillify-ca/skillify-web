import React from 'react';
import LandingNavbar from '../../../components/landingPage/LandingNavbar';
import Link from 'next/link';

export default function Assign2Page() {
  return (
    <div className="theme-default">
      <div className="max-w-3xl mx-auto mt-8">
        <div className="flex items-center justify-between mb-6">
          <Link href="./try3">
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2">
              Back
            </button>
          </Link>
          <h1 className="text-3xl font-bold">
            Real Interview Simulation - Kira
          </h1>
          <Link href="./lesson5">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Next
            </button>
          </Link>
        </div>

        <a
          href="https://app.kiratalent.com/n/assessment/vybwte/" // Replace this with the actual Kira platform link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 block mx-auto mb-6 text-center"
        >
          Go to Kira Platform
        </a>

        <div className="max-w-3xl mx-auto">
          {' '}
          {/* Update the width here */}
          <h2 className="text-xl font-bold mb-4">Overview:</h2>
          <p className="mb-6">
            {` In this mock interview, we will conduct a real interview simulation using Kira. The interview will consist of three sections: Behavioral, Technical, and Coding Hands-On. Each section will evaluate different aspects of your skills and suitability for the role you're applying for.`}
          </p>
          <h2 className="text-xl font-bold mb-4">Behavioral Questions:</h2>
          <p className="mb-6">
            {` In the Behavioral section, you'll be asked questions about your past experiences, how you handle challenges, and your problem-solving abilities. We'll assess your communication skills, teamwork, and how you react to different situations.`}
          </p>
          <h2 className="text-xl font-bold mb-4">Technical Questions:</h2>
          <p className="mb-6">
            {` The Technical section will focus on your domain knowledge and expertise. You may encounter questions related to specific technologies, tools, or methodologies relevant to the job you're applying for. We'll evaluate your technical understanding and problem-solving capabilities.`}
          </p>
          <h2 className="text-xl font-bold mb-4">Coding Hands-On:</h2>
          <p className="mb-6">
            {`In the Coding Hands-On section, you'll be given realistic coding challenges to solve within a specified time frame. This is an opportunity to showcase your coding skills, algorithmic thinking, and ability to write clean and efficient code.`}
          </p>
          <h2 className="text-xl font-bold mb-4">Kira Recording:</h2>
          <p className="mb-6">
            {` To provide constructive feedback and accurate evaluation, the mock interview will be recorded using Kira. This will help us review your performance and provide personalized insights to enhance your interview skills.`}
          </p>
          <h2 className="text-xl font-bold mb-4">Important Note:</h2>
          <p>
            {` Please ensure you have a stable internet connection and access to a webcam for the Kira recording. Feel free to reach out if you have any questions or concerns before the mock interview. Good luck, and we look forward to seeing you shine in the simulation!`}
          </p>
        </div>
      </div>
    </div>
  );
}

Assign2Page.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
