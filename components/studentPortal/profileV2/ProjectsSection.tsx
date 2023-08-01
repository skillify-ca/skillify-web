import { useQuery } from "@apollo/client";
import { PencilAltIcon } from "@heroicons/react/outline";
import Link from "next/link";
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
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2">
          {userProjects.map((it, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-center gap-4 p-4 m-4 shadow bg-backgroundPrimary rounded-xl"
              >
                <div className="flex justify-between w-full">
                  {/* empty div to put the title and edit button at the center and middle respectively*/}
                  <div className="w-6"></div>
                  <p className="font-bold text-center">{it.name}</p>
                  <Link
                    href={"/resources/sideProjectHub/editProject/" + it.name}
                  >
                    <PencilAltIcon className="w-6 h-6 cursor-pointer hover:text-yellow-600" />
                  </Link>
                </div>
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
          {/* TODO: this should not be displayed for everyone */}
          <div className="flex justify-around items-center p-4 m-4 shadow bg-backgroundPrimary rounded-xl">
            <Link href={"/resources/sideProjectHub/addProject"}>
              <Button label="Add Project" size="large" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
