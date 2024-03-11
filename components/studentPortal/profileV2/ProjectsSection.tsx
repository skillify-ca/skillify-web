import Link from "next/link";
import React from "react";
import { UserProjectData } from "../../../graphql/studentPortal/profile/fetchUserProjects";
import { Button } from "../../ui/Button";

export type ProjectsSectionProps = {
  userProjects: UserProjectData[];
};

export default function ProjectsSection({
  userProjects,
}: ProjectsSectionProps) {
  return (
    <>
      {userProjects.length === 0 ? (
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
      {/* this should be displayed only if the user is on their own profile page */}
      <Link href={"/profile/sideProjectHub/addProject"}>
        <div className="absolute flex items-center justify-center w-8 h-8 text-3xl text-center text-white rounded-full shadow cursor-pointer top-1 right-1 bg-brandPrimary hover:bg-pikachu-500">
          +
        </div>
      </Link>
    </>
  );
}
