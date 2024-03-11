import { CogIcon, PlayIcon, StarIcon } from "@heroicons/react/outline";
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

      <Link href="/studentPortal/messageRepository">
        <div className="flex p-4 shadow-sm cursor-pointer bg-backgroundPrimary hover:text-charmander hover:bg-backgroundHover ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
              clipRule="evenodd"
            />
          </svg>
          <p className="ml-3">Message Repository</p>
        </div>
      </Link>

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
    </div>
  );
}

export default ExperimentalSidebarSection;
