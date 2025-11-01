import moment from "moment";
import React from "react";
import { Button } from "../../../components/ui/Button";
import PageHeader from "../../../components/ui/PageHeader";
import { AllJobsData } from "../../../graphql/studentPortal/jobs/fetchAllJobs";
import { useAllJobs } from "./useAllJobs";

export default function JobBoardPage() {
  const { data: jobsData } = useAllJobs();
  const jobs: AllJobsData[] = jobsData?.jobs || [];

  return (
    <div className="grid w-full grid-cols-12 ">
      <div className="flex flex-col h-screen col-span-12 px-4 pb-4 overflow-y-auto lg:col-span-8 sm:px-8 sm:pb-8">
        <PageHeader
          title={`Job Board`}
          description={moment().format("MMM Do YYYY")}
        />
        <div className="grid grid-cols-3 gap-4">
          {jobs.map((it, i) => (
            <div
              key={i}
              className="grid grid-cols-1 p-6 rounded-lg shadow-md bg-backgroundSecondary"
            >
              <h2 className="mb-2 text-2xl font-bold text-gray-800">
                {it.company}
              </h2>
              <h4 className="h-16 mb-4 text-xl text-gray-600">
                {it.job_title}
              </h4>
              <p className="mb-4 text-gray-700">
                <p>Skills:</p> {it.skills.join(", ")}
              </p>
              <a href={it.link} target="_blank" rel="noopener noreferrer">
                <Button label="Apply" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

JobBoardPage.auth = true;
