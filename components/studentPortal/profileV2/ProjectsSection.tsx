import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import {
  FetchUserProjectsDataResponse,
  FETCH_USER_PROJECTS,
  UserProjectData,
} from "../../../graphql/studentPortal/profile/fetchUserProjects";
import { Button } from "../../ui/Button";

export type ProjectsSectionProps = {
  user: any;
};

export default function ProjectsSection({ user }: ProjectsSectionProps) {
  const [userProjects, setUserProjects] = useState<UserProjectData[]>([]);
  const { loading: userProjectsLoading } =
    useQuery<FetchUserProjectsDataResponse>(FETCH_USER_PROJECTS, {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {userProjects.map((it, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-center gap-4 p-4 m-4 border-2 rounded-xl"
              >
                <p className="font-bold">{it.name}</p>
                <img
                  src={it.image}
                  className="object-cover w-24 h-24 bg-white rounded-full"
                />
                <div className="flex justify-around w-full">
                  <a href={it.githubLink} target="_blank" rel="noreferrer">
                    <Button
                      label="Github"
                      backgroundColor="white"
                      textColor="text-orange-400"
                    />
                  </a>
                  <a href={it.projectLink} target="_blank" rel="noreferrer">
                    <Button label="Project" />
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
