import {
  CogIcon,
  DocumentSearchIcon,
  PlayIcon,
  StarIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";
import SkillifyCommandPalette from "./CommandPalette";

function ExperimentalSidebarSection({ userRole }) {
  return (
    <div>
      <div className="flex items-center justify-between p-4 ">
        <p className="font-bold">Experimental</p>
      </div>
      <SkillifyCommandPalette />

      <Link href="/studentPortal/games">
        <div className="flex p-4 shadow-sm cursor-pointer bg-backgroundPrimary hover:text-charmander hover:bg-backgroundHover">
          <PlayIcon className="w-6" />
          <p className="ml-3">Games</p>
        </div>
      </Link>
      <Link href="/studentPortal/challenges">
        <div className="flex p-4 shadow-sm cursor-pointer bg-backgroundPrimary hover:text-charmander hover:bg-backgroundHover">
          <StarIcon className="w-6" />
          <p className="ml-3">Challenges</p>
        </div>
      </Link>
      <Link href="/studentPortal/workshops">
        <div className="flex p-4 shadow-sm cursor-pointer bg-backgroundPrimary hover:text-charmander hover:bg-backgroundHover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
          </svg>
          <p>Workshops</p>
        </div>
      </Link>
      <Link href="/resources/mockInterview">
        <div className="flex p-4 shadow-sm cursor-pointer bg-backgroundPrimary hover:text-charmander hover:bg-backgroundHover">
          <CogIcon className="w-6 mr-4" />
          <p>Mock Interview Bot</p>
        </div>
      </Link>
      <Link href="/resources/jobExplorer/jobList">
        <div className="flex p-4 shadow-sm cursor-pointer bg-backgroundPrimary hover:text-charmander hover:bg-backgroundHover">
          <DocumentSearchIcon className="w-6 mr-4" />
          <p>Job Explorer</p>
        </div>
      </Link>
    </div>
  );
}

export default ExperimentalSidebarSection;
