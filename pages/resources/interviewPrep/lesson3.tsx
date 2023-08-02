import Link from "next/link";
import { InterviewPrepCourse } from ".";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";

export default Lesson3Page;

function Lesson3Page() {
  const rubricData = [
    {
      criteria: "Communication Skills",
      gradeA: "Excellent",
      gradeB: "Good",
      gradeC: "Satisfactory",
      gradeD: "Needs Improvement",
    },
    {
      criteria: "Technical Knowledge",
      gradeA: "Excellent",
      gradeB: "Good",
      gradeC: "Satisfactory",
      gradeD: "Needs Improvement",
    },
    {
      criteria: "Problem-Solving Ability",
      gradeA: "Excellent",
      gradeB: "Good",
      gradeC: "Satisfactory",
      gradeD: "Needs Improvement",
    },
    // Add more criteria and grades as needed
  ];

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div className="flex items-center justify-between mb-6">
        <Link href="./lesson2">
          <button className="px-4 py-2 mr-2 text-white bg-gray-500 rounded-lg">
            Back
          </button>
        </Link>
        <h1 className="mx-4 text-3xl font-bold">{`Employer's Expectations`}</h1>
        <Link href="./assign1">
          <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">
            Next
          </button>
        </Link>
      </div>
      <div className="my-4 border-b"></div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-gray-800 bg-gray-200">
            <th className="px-6 py-4 font-semibold border">Criteria</th>
            <th className="px-6 py-4 font-semibold border">Grade A</th>
            <th className="px-6 py-4 font-semibold border">Grade B</th>
            <th className="px-6 py-4 font-semibold border">Grade C</th>
            <th className="px-6 py-4 font-semibold border">Grade D</th>
          </tr>
        </thead>
        <tbody>
          {rubricData.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="px-4 py-2 border">{row.criteria}</td>
              <td className="px-4 py-2 border">{row.gradeA}</td>
              <td className="px-4 py-2 border">{row.gradeB}</td>
              <td className="px-4 py-2 border">{row.gradeC}</td>
              <td className="px-4 py-2 border">{row.gradeD}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Explanation of the differences between grades */}
      {rubricData.map((row, index) => (
        <div key={index} className="mt-8">
          <h2 className="mb-2 text-xl font-semibold">{row.criteria}:</h2>
          <ul>
            <li>
              <strong>Excellent:</strong>{" "}
              {`Candidates with "Excellent" grade demonstrate superior skills in ${row.criteria.toLowerCase()}, exceeding employer expectations in every aspect. They stand out as exceptional candidates for the position.`}
            </li>
            <li>
              <strong>Good:</strong>{" "}
              {`Candidates with "Good" grade have strong skills in ${row.criteria.toLowerCase()}, meeting most of the employer's expectations. They are capable of performing well in the position.`}
            </li>
            <li>
              <strong>Satisfactory:</strong>{" "}
              {`Candidates with "Satisfactory" grade meet the basic requirements in ${row.criteria.toLowerCase()} but may have some areas that need improvement to meet employer expectations fully.`}
            </li>
            <li>
              <strong>Needs Improvement:</strong>{" "}
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

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="hidden h-screen col-span-5 -mb-16 overflow-scroll lg:block">
          <InterviewPrepCourse />
        </div>
        <div className="h-screen col-span-7 p-4 overflow-scroll">{page}</div>
      </div>
    </div>
  );
};
