import { supabase } from "../../../lib/supabase";

export async function fetchAllJobs() {
  const { data, error } = await supabase
    .from("jobs")
    .select(`
      id,
      company,
      job_title,
      skills,
      link
    `);

  if (error) {
    throw error;
  }

  return data;
}

export type FetchAllJobs = {
    jobs: Array<AllJobsData>;
  };
  
  export type AllJobsData = {
    company: string;
    job_title: string;
    skills: [string]
    link: string;
  };


