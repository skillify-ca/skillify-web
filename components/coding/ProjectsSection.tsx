import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import {
  FetchUserProjectsDataResponse,
  FETCH_USER_PROJECTS,
  UserProjectData,
} from "../../graphql/fetchUserProjects";
import { Button } from "../ui/Button";

export type ProjectsSectionProps = {
  user: any;
};

export default function ProjectsSection({ user }: ProjectsSectionProps) {
  const [userProjects, setUserProjects] = useState<UserProjectData[]>([]);
  const { loading: userProjectsLoading } =
    useQuery<FetchUserProjectsDataResponse>(FETCH_USER_PROJECTS, {
      variables: {
        userId: user.uid,
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
        <div className="col-span-3 p-8 text-center shadow-md bg-slate-300 dark:bg-slate-900">
          No Active Projects
        </div>
      ) : (
        userProjects.map((it) => {
          return (
            <div className="flex flex-col items-center gap-4 p-4 bg-slate-300 dark:bg-slate-900">
              <p className="font-bold">{it.name}</p>
              <img src={it.image} className="w-24 h-24 bg-white rounded-full" />
              <div className="flex justify-around w-full">
                <a href={it.githubLink} target="_blank">
                  <Button label="Github" backgroundColor="green" />
                </a>
                <a href={it.projectLink} target="_blank">
                  <Button label="Project" backgroundColor="purple" />
                </a>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}
