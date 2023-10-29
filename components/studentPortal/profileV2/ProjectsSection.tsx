import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import {
  FETCH_USER_PROJECTS,
  FetchUserProjectsDataResponse,
  UserProjectData,
} from "../../../graphql/studentPortal/profile/fetchUserProjects";
import { Button } from "../../ui/Button";

export type ProjectsSectionProps = {
  user: any;
};

export default function ProjectsSection({ user }: ProjectsSectionProps) {
  const [userProjects, setUserProjects] = useState<UserProjectData[]>([]);
  const {
    loading: userProjectsLoading,
  } = useQuery<FetchUserProjectsDataResponse>(FETCH_USER_PROJECTS, {
    variables: {
      userId: user,
    },

    onCompleted: (data: FetchUserProjectsDataResponse) => {
      setUserProjects(data.user_projects);
    },
  });
  return (
    <>
      {userProjectsLoading ? (
        <div>Loading...</div>
      ) : userProjects.length === 0 ? (
        <div className="col-span-3 p-8 text-center shadow-md">
          No Active Projects
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3">
          {userProjects.map((it, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-center gap-4 p-4 m-4 shadow bg-backgroundPrimary rounded-xl"
              >
                <p className="font-bold">{it.name}</p>
                <img
                  src={it.image}
                  className="object-cover w-24 h-24 bg-white rounded-full"
                />
                <div className="flex flex-col items-center w-full gap-4">
                  <a href={it.projectLink} target="_blank" rel="noreferrer">
                    <Button label="Project" />
                  </a>{" "}
                  <a href={it.githubLink} target="_blank" rel="noreferrer">
                    <Button
                      label="Github"
                      backgroundColor="white"
                      textColor="text-orange-400"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
