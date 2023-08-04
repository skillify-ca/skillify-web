import React from 'react';
import Link from 'next/link';
import { InterviewPrepCourse } from '.';
import LandingNavbar from '../../../components/landingPage/LandingNavbar';

export default function Assign2Page() {
  return (
    <div className="theme-default">
      <div className="max-w-3xl mx-auto mt-8">
        <div className="flex items-center justify-between mb-6">
          <Link href="./try3">
            <button className="px-4 py-2 mr-2 text-white bg-gray-500 rounded-lg">
              Back
            </button>
          </Link>
          <h1 className="text-3xl font-bold">Real Interview Simulation</h1>
          <Link href="./lesson5">
            <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">
              Next
            </button>
          </Link>
        </div>

        <a
          href="https://app.kiratalent.com/n/assessment/vybwte/" // Replace this with the actual Kira platform link
          target="_blank"
          rel="noopener noreferrer"
          className="block px-6 py-3 mx-auto mb-6 text-center text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
        >
          Go to Recording Platform
        </a>

        <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
          <h2 className="mb-4 text-xl font-bold">Overview:</h2>
          <p>
            {` In this mock interview, we will conduct a real interview simulation using Kira. The interview will consist of three sections: Behavioral, Technical, and Coding Hands-On. Each section will evaluate different aspects of your skills and suitability for the role you're applying for.`}
          </p>
        </div>
        <div className="my-4 border-b"></div>
        <div>
          <div className="w-full">
            <table className="w-full border-collapse border border-gray-300 text-base rounded-lg">
              <thead>
                <tr>
                  <th className="px-6 py-3 border border-gray-300 bg-gray-100 font-semibold">
                    Behavioral
                  </th>
                  <th className="px-6 py-3 border border-gray-300 bg-gray-100 font-semibold">
                    Technical
                  </th>
                  <th className="px-6 py-3 border border-gray-300 bg-gray-100 font-semibold">
                    Coding Hands-on
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-3 border border-gray-300 whitespace-normal">
                    {`Questions about your experiences, challenges, and problem-solving skills.`}
                    {'   '}
                    <br />
                    <br />
                    {'   '}
                    {`We'll assess communication, teamwork, and reactions to situations.`}
                  </td>
                  <td className="px-6 py-3 border border-gray-300 whitespace-normal">
                    {`Focus on your knowledge and expertise in specific technologies, tools, or methodologies.`}{' '}
                    <br />
                    <br />{' '}
                    {`We'll evaluate technical understanding and problem-solving abilities.`}
                  </td>
                  <td className="px-6 py-3 border border-gray-300 whitespace-normal">
                    {`Realistic coding challenges to showcase skills. `} <br />
                    <br />{' '}
                    {`Algorithmic thinking, and writing efficient code within time constraints.`}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="my-4 border-b"></div>
          <div className="p-4 mt-6 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
            <h2 className="mb-4 text-xl font-bold">Recording:</h2>
            <p>
              {` To provide constructive feedback and accurate evaluation, the mock interview will be recorded using Kira. This will help us review your performance and provide personalized insights to enhance your interview skills.`}
            </p>
          </div>
          <div className="p-4 mb-6 bg-red-100 border border-red-300 rounded-lg">
            <h2 className="mb-4 text-xl font-bold">Important Note:</h2>
            <p>
              {` Please ensure you have a stable internet connection and access to a webcam for the Kira recording. Feel free to reach out if you have any questions or concerns before the mock interview. Good luck, and we look forward to seeing you shine in the simulation!`}
            </p>
          </div>
        </div>
      </div>

      {/* Additional Notes for Next Steps */}
      <div className="my-4 border-b"></div>
      <div className="prose">
        <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
          <h2 className="mb-4 text-xl font-bold">Notes:</h2>
          <p>
            {`Ideally link should go to our own recording feature (Max's tool).`}
            <br />
            {`Create another page for mock interviews.`}
            <br />
            {`In coding part, have link to leetcode and start a timer on the page (Very realistic, since employers will have u click on a link to another platform.) Add common coding platforms`}
            <br />
            {`Can also use leetcode's pre-existng create own code interview feature: https://interview.leetcode.com/interview/`}
            <br />
            {`Gamify the recording feature`}
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

      <div className="grid h-screen grid-cols-1 lg:grid-cols-12">
        <div className="hidden col-span-5 overflow-scroll lg:block">
          <InterviewPrepCourse />
        </div>
        <div className="col-span-7 p-4 overflow-scroll">{page}</div>
      </div>
    </div>
  );
};
