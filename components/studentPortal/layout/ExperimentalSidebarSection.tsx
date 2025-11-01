import {
  CashIcon,
  CogIcon,
  DocumentSearchIcon,
  GlobeIcon,
  LightBulbIcon,
  LightningBoltIcon,
  StarIcon,
} from "@heroicons/react/outline";
import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../ui/Collapsible";
import { PaidSidebarItemProps } from "./PaidSidebarItem";
import SidebarItem from "./SidebarItem";

const experimentalSidebarItems: PaidSidebarItemProps[] = [
  {
    name: "Challenges",
    page: "challenges",
    link: "/studentPortal/challenges",
    icon: <StarIcon className="w-6 mr-4" />,
    isPremium: true,
  },
  {
    name: "Mock Interview Bot",
    page: "mockInterview",
    link: "/resources/mockInterview",
    icon: <CogIcon className="w-6 mr-4" />,
    isPremium: true,
  },
  {
    name: "Job Board",
    page: "jobBoard",
    link: "/studentPortal/jobBoard",
    icon: <GlobeIcon className="w-6 mr-4" />,
    isPremium: true,
  },
  {
    name: "Job Explorer",
    page: "jobExplorer",
    link: "/resources/jobExplorer/jobList",
    icon: <DocumentSearchIcon className="w-6 mr-4" />,
    isPremium: true,
  },
  {
    name: "Interview Prep 1",
    link: "/studentPortal/courses/interviewPrep",
    page: "interviewPrep1",
    icon: <LightBulbIcon className="w-6 h-6 mr-4" />,
    isPremium: true,
  },
  {
    name: "Interview Prep 2",
    link: "/studentPortal/courses/interviewPrep2",
    page: "interviewPrep2",
    icon: <LightBulbIcon className="w-6 h-6 mr-4" />,
    isDisabled: false,
    isPremium: true,
  },
  {
    name: "Financial Literacy",
    link: "/studentPortal/courses/personalFinance",
    page: "financialLiteracy",
    icon: <CashIcon className="w-6 h-6 mr-4" />,
    isPremium: true,
  },
  {
    name: "Crypto and Web3",
    link: "/studentPortal/courses/crypto",
    page: "crypto",
    icon: <CashIcon className="w-6 h-6 mr-4" />,
    isPremium: true,
  },
  {
    name: "Accountability",
    link: "/studentPortal/accountability",
    page: "accountability",
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
    isPremium: true,
  },
  {
    name: "Admin",
    link: "/studentPortal/admin",
    page: "admin",
    icon: <LightningBoltIcon className="w-6 h-6 mr-4" />,
    isPremium: true,
  },
];

function ExperimentalSidebarSection({ userRole, closeSidebar }) {
  return (
    <div>
      <Collapsible className="group">
        <CollapsibleTrigger>
          <div className="flex items-center justify-between p-4 ">
            <span
              className={`group-data-[state=open]:rotate-180 transition-all rotate-90 mr-2`}
            >
              ▲
            </span>
            <p className="font-bold">Premium</p>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {experimentalSidebarItems.map((item) => (
            <SidebarItem
              key={item.name}
              it={item}
              userRole={userRole}
              closeSidebar={closeSidebar}
            />
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

export default ExperimentalSidebarSection;
