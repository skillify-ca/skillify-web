import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../../lib/authContext";

export type SidebarProps = {};
type SidebarPage = "dashboard" | "classroom" | "profile";

export const Sidebar: React.FC<SidebarProps> = ({}: SidebarProps) => {
  const { signOut, user } = useAuth();
  const dashboardIconRef = useRef<HTMLImageElement>();
  const classroomIconRef = useRef<HTMLImageElement>();
  const profileIconRef = useRef<HTMLImageElement>();
  const router = useRouter();
  const [activePage, setActivePage] = useState<SidebarPage>();

  console.log(router.pathname);

  useEffect(() => {
    if (router.pathname.startsWith("/classroom")) {
      setActivePage("classroom");
    } else if (router.pathname.startsWith("/profile")) {
      setActivePage("profile");
    } else {
      setActivePage("dashboard");
    }
  }, [router.pathname]);

  return (
    //Full width then restrict in page
    <div className="flex flex-col w-full h-full bg-gray-50 dark:bg-gray-900 dark:text-white">
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
          <div
            className={`flex flex-wrap items-center h-12 p-4 cursor-pointer hover:border-l-4 ${
              activePage === "dashboard"
                ? "border-charmander text-charmander"
                : ""
            } hover:border-charmander hover:text-charmander`}
            onMouseOver={(e) => {
              if (dashboardIconRef.current) {
                dashboardIconRef.current.src = "/images/dashBoardActive.svg";
              }
            }}
            onMouseLeave={() => {
              if (activePage !== "dashboard" && dashboardIconRef.current) {
                dashboardIconRef.current.src = "/images/dashboardInactive.svg";
              }
            }}
          >
            <img
              ref={dashboardIconRef}
              className="w-6 h-6 mr-4"
              src={
                activePage === "dashboard"
                  ? "/images/dashBoardActive.svg"
                  : "/images/dashboardInactive.svg"
              }
            />
            Dashboard
          </div>
        </Link>
        <Link href="/classroom">
          <div
            className={`flex flex-wrap items-center h-12 p-4 cursor-pointer hover:border-l-4 ${
              activePage === "classroom"
                ? "border-charmander text-charmander"
                : ""
            } hover:border-charmander hover:text-charmander`}
            onMouseOver={(e) => {
              if (classroomIconRef.current) {
                classroomIconRef.current.src = "/images/classroomActive.svg";
              }
            }}
            onMouseLeave={() => {
              if (activePage !== "classroom" && classroomIconRef.current) {
                classroomIconRef.current.src = "/images/classroomInactive.svg";
              }
            }}
          >
            <img
              ref={classroomIconRef}
              className="w-6 h-6 mr-4"
              src={
                activePage === "classroom"
                  ? "/images/classroomActive.svg"
                  : "/images/classroomInactive.svg"
              }
            />
            Classroom
          </div>
        </Link>
        <Link href="/profile">
          <div
            className={`flex flex-wrap items-center h-12 p-4 cursor-pointer hover:border-l-4 hover:border-charmander hover:text-charmander    
            ${
              activePage === "profile"
                ? "border-charmander text-charmander"
                : ""
            }`}
            onMouseOver={(e) => {
              if (profileIconRef.current) {
                profileIconRef.current.src = "/images/profileActive.svg";
              }
            }}
            onMouseLeave={() => {
              if (activePage !== "profile" && profileIconRef.current) {
                profileIconRef.current.src = "/images/profileInactive.svg";
              }
            }}
          >
            <img
              ref={profileIconRef}
              className="w-6 h-6 mr-4"
              src={
                activePage === "profile"
                  ? "/images/profileActive.svg"
                  : "/images/profileInactive.svg"
              }
            />
            Profile
          </div>
        </Link>
        <div>
          <div className="flex items-center justify-between p-4 ">
            <p className="font-bold">Courses</p>
            <Link href={"/courses"}>
              <div className="px-2 py-1 text-gray-400 border-2 border-gray-400 rounded-md cursor-pointer hover:bg-gray-50 hover:border-charmander hover:text-charmander">
                Add Course
              </div>
            </Link>
          </div>
          <div className="overflow-auto h-36">
            <Link href="/studentPortal/intro">
              <div className="flex p-4 bg-white shadow-sm cursor-pointer hover:text-charmander hover:bg-yellow-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <p className="ml-3">Coding Basics</p>
              </div>
            </Link>
            <Link href="/studentPortal/react">
              <div className="flex p-4 bg-white shadow-sm cursor-pointer hover:text-charmander hover:bg-yellow-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
                <p className="ml-3">Web Development</p>
              </div>
            </Link>
          </div>
        </div>
        <div
          className="flex flex-wrap p-4 mt-20 cursor-pointer"
          onClick={signOut}
        >
          <img className="w-8 h-8 mr-4" src="/images/logoutButton.svg" />
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
