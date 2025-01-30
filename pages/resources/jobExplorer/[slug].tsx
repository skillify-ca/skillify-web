import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import JobExplorerJobComponent from "../../../components/resources/jobExplorer/JobExplorerJobComponent";
import { fetchJobDetailsData } from "../../api/resources/jobExplorer/fetchJobDetailsData";

export default function JobDetailsPage({ jobData }) {
  if (!jobData) {
    return (
      <div>
        <p className="font-bold">Job Not Found</p>
      </div>
    );
  }

  const { title, description, mandatorySkills, additionalSkills, project } =
    jobData;
  return (
    <div>
      <JobExplorerJobComponent
        title={title}
        description={description}
        mandatorySkills={mandatorySkills}
        additionalSkills={additionalSkills}
        project={project}
      />
    </div>
  );
}

JobDetailsPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};

// read the slug from the URL and fetch the data for the job
export async function getServerSideProps(context) {
  const { slug } = context.params;
  const jobData = await fetchJobDetailsData(slug);
  return {
    props: {
      jobData,
    },
  };
}
