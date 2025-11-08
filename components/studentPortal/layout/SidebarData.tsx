import React from "react";
import JSIcon from "../../ui/JSIcon";
import ReactIcon from "../../ui/ReactIcon";
import { PaidSidebarItemProps } from "./PaidSidebarItem";

function HTMLIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      fill="currentColor"
      className="w-6 h-6 mr-4"
      viewBox="0 0 50 50"
    >
      <path d="M 45.273438 2.324219 C 45.085938 2.117188 44.816406 2 44.535156 2 L 5.464844 2 C 5.183594 2 4.914063 2.117188 4.726563 2.324219 C 4.535156 2.53125 4.441406 2.808594 4.46875 3.089844 L 7.988281 42.515625 C 8.023438 42.929688 8.3125 43.273438 8.710938 43.390625 L 24.722656 47.960938 C 24.808594 47.988281 24.902344 48 24.996094 48 C 25.089844 48 25.183594 47.988281 25.269531 47.960938 L 41.292969 43.390625 C 41.691406 43.273438 41.980469 42.929688 42.015625 42.515625 L 45.535156 3.089844 C 45.5625 2.808594 45.464844 2.53125 45.273438 2.324219 Z M 36.847656 15.917969 L 18.035156 15.917969 L 18.484375 21.007813 L 36.394531 21.007813 L 35.050781 36.050781 L 24.992188 38.867188 L 24.894531 38.839844 L 14.953125 36.046875 L 14.410156 29.917969 L 19.28125 29.917969 L 19.492188 32.296875 L 25.050781 33.460938 L 30.507813 32.296875 L 31.089844 25.859375 L 14.046875 25.859375 L 12.722656 11.054688 L 37.28125 11.054688 Z"></path>
    </svg>
  );
}
function CSSIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      fill="currentColor"
      className="w-6 h-6 mr-4"
      viewBox="0 0 50 50"
    >
      <path
        fill-rule="evenodd"
        d="M 44 4 L 40 42 L 25 47 L 10 42 L 6 4 Z M 15.5 29 L 20.5 29 L 20.6 31.8 L 25 33.4 L 29.4 31.8 L 29.8 27 L 19.2 27 L 18.9 22.5 L 30.1 22.5 L 30.5 18 L 14.5 18 L 14 13 L 36 13 L 35.3 23 L 34.4 35.5 L 25 38.5 L 15.6 35.5 Z"
      ></path>
    </svg>
  );
}

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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-6 mr-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.745 3A23.933 23.933 0 0 0 3 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 0 1 1.105.402l2.402 7.206a.75.75 0 0 0 1.104.401l1.445-.889m-8.25.75.213.09a1.687 1.687 0 0 0 2.062-.617l4.45-6.676a1.688 1.688 0 0 1 2.062-.618l.213.09"
      />
    </svg>
  );
};

const technologyAndMentalHealthIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-6 mr-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
      />
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
    name: "Mental Health",
    link: "/studentPortal/courses/technologyAndMentalHealth",
    page: "technology_and_mental_health",
    icon: technologyAndMentalHealthIcon(),
    isDisabled: false,
    isPremium: false,
  },
  {
    name: "HTML Basics",
    link: "/studentPortal/courses/html",
    page: "html",
    icon: <HTMLIcon />,
    isDisabled: false,
    isPremium: false,
  },
  {
    name: "CSS Basics",
    link: "/studentPortal/courses/css",
    page: "css",
    icon: <CSSIcon />,
    isDisabled: false,
    isPremium: false,
  },
  {
    name: "JavaScript Basics",
    link: "/studentPortal/courses/javascript",
    page: "javascript",
    icon: <JSIcon />,
    isDisabled: false,
    isPremium: false,
  },
  {
    name: "Frontend Web",
    link: "/studentPortal/courses/frontend",
    page: "frontend_development",
    icon: <ReactIcon />,
    isDisabled: false,
    isPremium: false,
  },
];
