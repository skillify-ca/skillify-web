import React from 'react';
import LandingNavbar from '../../../components/landingPage/LandingNavbar';
import Link from 'next/link';

export default Lesson3Page;

function Lesson3Page() {
  const rubricData = [
    {
      criteria: 'Communication Skills',
      gradeA: 'Excellent',
      gradeB: 'Good',
      gradeC: 'Satisfactory',
      gradeD: 'Needs Improvement',
    },
    {
      criteria: 'Technical Knowledge',
      gradeA: 'Excellent',
      gradeB: 'Good',
      gradeC: 'Satisfactory',
      gradeD: 'Needs Improvement',
    },
    {
      criteria: 'Problem-Solving Ability',
      gradeA: 'Excellent',
      gradeB: 'Good',
      gradeC: 'Satisfactory',
      gradeD: 'Needs Improvement',
    },
    // Add more criteria and grades as needed
  ];

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div className="flex items-center justify-between mb-6">
        <Link href="./lesson2">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2">
            Back
          </button>
        </Link>
        <h1 className="text-3xl font-bold mx-4">{`Employer's Expectations`}</h1>
        <Link href="./assign1">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Next
          </button>
        </Link>
      </div>
      <div className="border-b my-4"></div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            <th className="py-4 px-6 font-semibold border">Criteria</th>
            <th className="py-4 px-6 font-semibold border">Grade A</th>
            <th className="py-4 px-6 font-semibold border">Grade B</th>
            <th className="py-4 px-6 font-semibold border">Grade C</th>
            <th className="py-4 px-6 font-semibold border">Grade D</th>
          </tr>
        </thead>
        <tbody>
          {rubricData.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              <td className="py-2 px-4 border">{row.criteria}</td>
              <td className="py-2 px-4 border">{row.gradeA}</td>
              <td className="py-2 px-4 border">{row.gradeB}</td>
              <td className="py-2 px-4 border">{row.gradeC}</td>
              <td className="py-2 px-4 border">{row.gradeD}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Explanation of the differences between grades */}
      {rubricData.map((row, index) => (
        <div key={index} className="mt-8">
          <h2 className="text-xl font-semibold mb-2">{row.criteria}:</h2>
          <ul>
            <li>
              <strong>Excellent:</strong>{' '}
              {`Candidates with "Excellent" grade demonstrate superior skills in ${row.criteria.toLowerCase()}, exceeding employer expectations in every aspect. They stand out as exceptional candidates for the position.`}
            </li>
            <li>
              <strong>Good:</strong>{' '}
              {`Candidates with "Good" grade have strong skills in ${row.criteria.toLowerCase()}, meeting most of the employer's expectations. They are capable of performing well in the position.`}
            </li>
            <li>
              <strong>Satisfactory:</strong>{' '}
              {`Candidates with "Satisfactory" grade meet the basic requirements in ${row.criteria.toLowerCase()} but may have some areas that need improvement to meet employer expectations fully.`}
            </li>
            <li>
              <strong>Needs Improvement:</strong>{' '}
              {`Candidates with "Needs Improvement" grade have significant challenges in ${row.criteria.toLowerCase()} and require substantial improvement to meet employer expectations.`}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

Lesson3Page.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
