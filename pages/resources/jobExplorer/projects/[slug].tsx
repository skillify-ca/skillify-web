import React from "react";
import LandingNavbar from "../../../../components/landingPage/LandingNavbar";
import JobExplorerProject from "../../../../components/resources/jobExplorer/JobExplorerProject";
import {
  getJobExplorerProjectData,
  JobExplorerProjectData,
} from "../../../api/resources/jobExplorer/getJobExplorerProjectData";

type JobExplorerProjectPageProps = {
  projectData: JobExplorerProjectData;
};

export default function JobExplorerProjectPage(
  props: JobExplorerProjectPageProps
) {
  return (
    <div>
      <JobExplorerProject {...props.projectData} />
    </div>
  );
}

// getServerSideProps function is used to fetch data at runtime before rendering the page
export async function getServerSideProps(context) {
  const slug = context.params.slug;
  // getJobExplorerProjectData function is used to fetch project data based on the slug
  const projectData = getJobExplorerProjectData(slug);
  return {
    props: { projectData },
  };
}

JobExplorerProjectPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
