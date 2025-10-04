import React from "react";
import JSIcon from "../../ui/JSIcon";
import ReactIcon from "../../ui/ReactIcon";
import { PaidSidebarItemProps } from "./PaidSidebarItem";

export const sideBarItemsData = (
  user,
  goalApproaching
): PaidSidebarItemProps[] => [
  {
    name: "Dashboard",
    link: "/studentPortal",
    page: "dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 mr-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    isDisabled: false,
  },
  {
    name: "Coaches",
    link: "/studentPortal/coaches",
    page: "coaches",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-6 h-6 mr-4`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
  },
  {
    name: "Profile",
    link: `/profile/${user?.uid}`,
    page: "profile",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 mr-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
      </svg>
    ),
    isDisabled: false,
  },
  {
    name: "Goals",
    notifications: goalApproaching,
    link: "/studentPortal/goals",
    page: "goals",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 mr-4"
      >
        <path d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" />
      </svg>
    ),
    isDisabled: false,
  },
];

// Vibe Coding Icon
const vibeCodingIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mr-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.745 3A23.933 23.933 0 0 0 3 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 0 1 1.105.402l2.402 7.206a.75.75 0 0 0 1.104.401l1.445-.889m-8.25.75.213.09a1.687 1.687 0 0 0 2.062-.617l4.45-6.676a1.688 1.688 0 0 1 2.062-.618l.213.09" />
    </svg>
  );
};

export const freeCourses: PaidSidebarItemProps[] = [
  {
    name: "Vibe Coding",
    link: "/studentPortal/courses/vibeCoding",
    page: "vibe_coding",
    icon: vibeCodingIcon(),
    isDisabled: false,
    isPremium: false,
  },
  {
    name: "Coding Basics",
    link: "/studentPortal/courses/codingBasics",
    page: "coding_basics",
    icon: <JSIcon />,
    isDisabled: false,
    isPremium: false,
  },
  {
    name: "Frontend Development",
    link: "/studentPortal/courses/frontend",
    page: "frontend_development",
    icon: <ReactIcon />,
    isDisabled: false,
    isPremium: false,
  },
];
