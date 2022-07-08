import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../../lib/authContext";

export type SidebarProps = {};
type SidebarPage = "dashboard" | "classroom" | "profile" | "labs" | "goals";

export const Sidebar: React.FC<SidebarProps> = ({}: SidebarProps) => {
  const { signOut, user } = useAuth();
  const dashboardIconRef = useRef<HTMLImageElement>();
  const classroomIconRef = useRef<HTMLImageElement>();
  const profileIconRef = useRef<HTMLImageElement>();
  const labsIconRef = useRef<HTMLImageElement>();
  const goalsIconRef = useRef<HTMLImageElement>();

  const router = useRouter();
  const [activePage, setActivePage] = useState<SidebarPage>();

  console.log(router.pathname);

  useEffect(() => {
    if (router.pathname.startsWith("/classroom")) {
      setActivePage("classroom");
    } else if (router.pathname.startsWith("/profile")) {
      setActivePage("profile");
    } else if (router.pathname.startsWith("/studentPortal/labs")) {
      setActivePage("labs");
    } else if (router.pathname.startsWith("/studentPortal/goals")) {
      setActivePage("goals");
    } else {
      setActivePage("dashboard");
    }
  }, [router.pathname]);

  return (
    //Full width then restrict in page
    <div className="flex flex-col w-full h-full bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="grid grid-rows-5">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 mr-4`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            Classroom
          </div>
        </Link>

        <Link href="/studentPortal/labs">
          <div
            className={`flex flex-wrap items-center h-12 p-4 cursor-pointer hover:border-l-4 hover:border-charmander hover:text-charmander    
            ${
              activePage === "labs" ? "border-charmander text-charmander" : ""
            }`}
            onMouseOver={(e) => {
              if (labsIconRef.current) {
                labsIconRef.current.src = "/images/labsActive.svg";
              }
            }}
            onMouseLeave={() => {
              if (activePage !== "labs" && labsIconRef.current) {
                labsIconRef.current.src = "/images/labsInactive.svg";
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 mr-4`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                clip-rule="evenodd"
              />
            </svg>
            Labs
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
            Profile
          </div>
        </Link>
        <Link href="/goals">
          <div
            className={`flex flex-wrap items-center h-12 p-4 cursor-pointer hover:border-l-4 hover:border-charmander hover:text-charmander    
            ${
              activePage === "goals" ? "border-charmander text-charmander" : ""
            }`}
            onMouseOver={(e) => {
              if (goalsIconRef.current) {
                goalsIconRef.current.src = "/images/profileActive.svg";
              }
            }}
            onMouseLeave={() => {
              if (activePage !== "goals" && goalsIconRef.current) {
                goalsIconRef.current.src = "/images/profileInactive.svg";
              }
            }}
          >
            <svg
              className="w-6 h-6 mr-4"
              fill="currentColor"
              stroke="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              ></path>
            </svg>
            Goals
          </div>
        </Link>
        <div>
          <div className="flex items-center justify-between p-4 ">
            <p className="font-bold">Courses</p>
            <Link href={"/courses"}>
              <div className="px-2 py-1 text-gray-400 border-2 border-gray-400 rounded-md cursor-pointer hover:bg-gray-50 hover:border-charmander hover:text-charmander dark:hover:bg-gray-800">
                Add Course
              </div>
            </Link>
          </div>
          <div className="overflow-auto h-36">
            <Link href="/studentPortal/intro">
              <div className="flex p-4 bg-white shadow-sm cursor-pointer dark:bg-gray-900 hover:text-charmander hover:bg-yellow-50 dark:hover:bg-gray-800">
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
              <div className="flex p-4 bg-white shadow-sm cursor-pointer dark:bg-gray-900 hover:text-charmander hover:bg-yellow-50 dark:hover:bg-gray-800">
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
          className="flex flex-wrap p-4 cursor-pointer hover:text-charmander hover:bg-yellow-50 dark:hover:bg-gray-800"
          onClick={signOut}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
