import { gql } from "@apollo/client";
export const FETCH_ALL_JOBS = gql`
query fetchAllJobs {
    jobs {
        id
        company
        job_title
        skills
        link
    }
  }
`;

export type FetchAllJobs = {
    jobs: Array<AllJobsData>;
  };
  
  export type AllJobsData = {
    company: string;
    job_title: string;
    skills: [string]
    link: string;
  };


