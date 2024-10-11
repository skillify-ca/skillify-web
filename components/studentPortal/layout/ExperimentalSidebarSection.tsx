import {
  CameraIcon,
  CashIcon,
  CogIcon,
  DocumentSearchIcon,
  LightBulbIcon,
  LightningBoltIcon,
  LockClosedIcon,
  PlayIcon,
  StarIcon,
} from "@heroicons/react/outline";
import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../ui/Collapsible";
import SkillifyCommandPalette from "./CommandPalette";
import { PaidSidebarItemProps } from "./PaidSidebarItem";
import SidebarItem from "./SidebarItem";

const experimentalSidebarItems: PaidSidebarItemProps[] = [
  {
    name: "Games",
    link: "/studentPortal/games",
    page: "games",
    icon: <PlayIcon className="w-6 mr-4" />,
    isPremium: true,
  },
  {
    name: "Challenges",
    page: "challenges",
    link: "/studentPortal/challenges",
    icon: <StarIcon className="w-6 mr-4" />,
    isPremium: true,
  },
  {
    name: "Workshops",
    page: "workshops",
    link: "/studentPortal/workshops",
    icon: <CameraIcon className="w-6 mr-4" />,
    isPremium: true,
  },
  {
    name: "Mock Interview Bot",
    page: "",
    link: "/resources/mockInterview",
    icon: <CogIcon className="w-6 mr-4" />,
    isPremium: true,
  },
  {
    name: "Job Explorer",
    page: "",
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
    link: "/studentPortal/",
    page: "financialLiteracy",
    icon: <LockClosedIcon className="w-6 h-6 mr-4" />,
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
    name: "Admin",
    link: "/studentPortal/admin",
    page: "admin",
    icon: <LightningBoltIcon className="w-6 h-6 mr-4" />,
    isPremium: true,
  },
  {
    name: "Skillify AI",
    link: "/studentPortal/skillifyAI",
    page: "skillifyAI",
    icon: <CogIcon className="w-6 h-6 mr-4" />,
    isPremium: true,
  },
  {
    name: "Virtual Hangout",
    link: "/studentPortal/virtualHangout",
    page: "virtualHangout",
    icon: <CameraIcon className="w-6 h-6 mr-4" />,
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
            <p className="font-bold">Experimental</p>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SkillifyCommandPalette />

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
