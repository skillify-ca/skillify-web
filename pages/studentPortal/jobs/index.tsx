import { useMutation, useQuery } from "@apollo/client";
import moment from "moment";
import { useEffect, useState } from "react";
import React from "react";
import { useAuth } from "../../../lib/authContext";
import { UPDATE_USER } from "../../../graphql/studentPortal/users/updateUser";
import PageHeader from "../../../components/ui/PageHeader";
import { AllJobsData, FETCH_ALL_JOBS } from "../../../graphql/studentPortal/jobs/fetchAllJobs";


export default function JobBoardPage() {
  const { user } = useAuth();
  const [updateUser] = useMutation(UPDATE_USER);

  const [jobs, setJobs] = useState<AllJobsData[]>([]);

  useQuery(FETCH_ALL_JOBS, {
    onCompleted: (roleData) => {
        console.log(roleData)
      setJobs(roleData.jobs);
    },
  });


  useEffect(() => {
    // TODO save profile photos to firebase storage and allow users to edit photos
    updateUser({
      variables: {
        userId: user.uid,
        last_seen: new Date(),
        profile_image: user.photoURL,
      },
    });
  }, [user]);

  return (
    <div className="grid w-full grid-cols-12 ">
      <div className="flex flex-col h-screen col-span-12 px-4 pb-4 overflow-y-auto lg:col-span-8 sm:px-8 sm:pb-8">
        <PageHeader
          title={`Job Board`}
          description={moment().format("MMM Do YYYY")}
        />
        <div className="grid grid-cols-3 gap-4">
          {jobs.map((it, i) => (
            <div className="bg-orange-200 rounded-lg shadow-md p-6 w-80">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{it.company}</h2>
            <h4 className="text-xl text-gray-600 mb-4">{it.job_title}</h4>
            <p className="text-gray-700 mb-4">
              <p>Skills:</p> {it.skills.join(", ")}
            </p>
            <a
              href={it.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Apply
            </a>
          </div>
            
          ))}
        </div>
      </div>
    </div>
  );
}

JobBoardPage.auth = true;
