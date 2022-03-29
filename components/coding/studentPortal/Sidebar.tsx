import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "../../../lib/authContext";

export type SidebarProps = {};

export const Sidebar: React.FC<SidebarProps> = ({}: SidebarProps) => {
  const { signOut, user } = useAuth();

  return (
    //Full width then restrict in page
    <div className="flex flex-col w-full h-full dark:text-white">
      <div className="grid grid-rows-4">
        <div className="flex p-4">
          {user && (
            <img
              className="w-12 h-12 rounded-full"
              src={user.photoURL}
              alt=""
            />
          )}

          {user && (
            <div>
              <p className="ml-4 font-bold">{user.displayName}</p>
              <p className="ml-4 font-medium">Student</p>
            </div>
          )}
        </div>
        <a className={``} href="/studentPortal/intro">
          <div className={`"border-charmander text-charmander"`}>
            <div className={`p-4 border-l-4 border-charmander text-charmander`}>
              <div className="flex flex-wrap">
                <img
                  className="w-6 h-6 mr-4"
                  src="/images/dashBoardActive.svg"
                />
                Dashboard
              </div>
            </div>
          </div>
        </a>
        <a className={`p-4`} href="/classroom">
          <div className="flex flex-wrap">
            <img className="w-6 h-6 mr-4" src="/images/classroomInactive.svg" />
            Classroom
          </div>
        </a>
        <div className="flex flex-wrap p-4 cursor-pointer" onClick={signOut}>
          <img className="w-8 h-8 mr-4" src="/images/logoutButton.svg" />
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
