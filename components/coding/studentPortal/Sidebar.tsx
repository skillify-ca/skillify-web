import Link from "next/link";
import React, { useRef, useState } from "react";
import { useAuth } from "../../../lib/authContext";

export type SidebarProps = {};

export const Sidebar: React.FC<SidebarProps> = ({}: SidebarProps) => {
  const { signOut, user } = useAuth();
  const classroomIconRef = useRef<HTMLImageElement>();
  const profileIconRef = useRef<HTMLImageElement>();

  return (
    //Full width then restrict in page
    <div className="flex flex-col w-full h-full bg-white dark:bg-gray-900 dark:text-white">
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
            <div className="w-full">
              <p className="w-full ml-4 font-bold">{user.displayName}</p>
              <p className="ml-4 font-medium">Student</p>
            </div>
          )}
        </div>
        <Link href="/studentPortal/intro">
          <div className={`"border-charmander text-charmander"`}>
            <div
              className={`p-4 border-l-4 border-charmander text-charmander cursor-pointer`}
            >
              <div className="flex flex-wrap">
                <img
                  className="w-6 h-6 mr-4"
                  src="/images/dashBoardActive.svg"
                />
                Dashboard
              </div>
            </div>
          </div>
        </Link>
        <Link href="/classroom">
          <div
            className="flex flex-wrap items-center h-12 p-4 cursor-pointer hover:border-l-4 hover:border-charmander hover:text-charmander"
            onMouseOver={(e) => {
              if (classroomIconRef.current) {
                classroomIconRef.current.src = "/images/classroomActive.svg";
              }
            }}
            onMouseLeave={() => {
              if (classroomIconRef.current) {
                classroomIconRef.current.src = "/images/classroomInactive.svg";
              }
            }}
          >
            <img
              ref={classroomIconRef}
              className="w-6 h-6 mr-4"
              src="/images/classroomInactive.svg"
            />
            Classroom
          </div>
        </Link>
        <Link href="/profile">
          <div
            className="flex flex-wrap items-center h-12 p-4 cursor-pointer hover:border-l-4 hover:border-charmander hover:text-charmander"
            onMouseOver={(e) => {
              if (profileIconRef.current) {
                profileIconRef.current.src = "/images/profileActive.svg";
              }
            }}
            onMouseLeave={() => {
              if (profileIconRef.current) {
                profileIconRef.current.src = "/images/profileInactive.svg";
              }
            }}
          >
            <img
              ref={profileIconRef}
              className="w-6 h-6 mr-4"
              src="/images/profileInactive.svg"
            />
            Profile
          </div>
        </Link>
        <div className="flex flex-wrap p-4 cursor-pointer" onClick={signOut}>
          <img className="w-8 h-8 mr-4" src="/images/logoutButton.svg" />
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
