import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "../../../lib/authContext";

export type SidebarProps = {};

export const Sidebar: React.FC<SidebarProps> = ({}: SidebarProps) => {
  // const { signOut, user } = useAuth();

  return (
    //Full width then restrict in page
    <div className="dark:text-white flex flex-col">
      <div className="grid grid-rows-4">
        <div className="p-4 flex">
          {false && (
            <img
              className="h-12 w-12 rounded-full"
              src={"user.photoURL"}
              alt=""
            />
          )}
          <div>
            <p className="font-bold ml-4">{"user.displayName"}</p>
            <p className="font-medium ml-4">Student</p>
          </div>
        </div>
        <a className={``} href="/studentPortal">
          <div className={`"border-charmander text-charmander"`}>
            <div className={`p-4 border-l-4 border-charmander text-charmander`}>
              <div className="flex flex-wrap">
                <img
                  className="w-8 h-8 mr-4"
                  src="/images/dashBoardActive.svg"
                />
                Dashboard
              </div>
            </div>
          </div>
        </a>
        <a className={`p-4 border-l-4`} href="/classroom">
          <div className="flex flex-wrap">
            <img className="w-8 h-8 mr-4" src="/images/classroomInactive.svg" />
            Classroom
          </div>
        </a>

        <a
          className={`p-4 border-l-4
            `}
          href="/math/profile"
        >
          <div className="flex flex-wrap">
            <img className="w-8 h-8 mr-4" src="/images/profileInactive.svg" />
            Profile
          </div>
        </a>
      </div>
      <div className="flex flex-col justify-end p-4">
        <div className="flex flex-wrap ">
          <img className="w-8 h-8 mr-4" src="/images/logoutButton.svg" />
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
