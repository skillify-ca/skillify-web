import {
  BriefcaseIcon,
  CodeIcon,
  PencilAltIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { DashboardIcon } from "@radix-ui/react-icons";
import { BackpackIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CommandPalette from "react-command-palette";

export default function SkillifyCommandPalette() {
  const router = useRouter();

  const commands = [
    {
      name: "Dashboard",
      icon: <DashboardIcon className="w-4 h-4 mr-2" />,
      command() {
        router.push("/studentPortal");
      },
    },
    {
      name: "Profile",
      icon: <UserIcon className="w-4 h-4 mr-2" />,
      command() {
        router.push("/profile");
      },
    },
    {
      name: "Goals",
      icon: <PencilAltIcon className="w-4 h-4 mr-2" />,
      command() {
        router.push("/studentPortal/goals");
      },
    },
    {
      name: "Coaches",
      icon: <UserIcon className="w-4 h-4 mr-2" />,
      command() {
        router.push("/coaches");
      },
    },
    {
      name: "Job Board",
      icon: <BackpackIcon className="w-4 h-3 mr-2" />,
      command(){
        router.push("/studentPortal/jobs")
      }
    },
    {
      name: "Course: Coding Basics",
      icon: <BriefcaseIcon className="w-4 h-4 mr-2" />,
      command() {
        router.push("/studentPortal/courses/codingBasics");
      },
    },
    {
      name: "Course: Frontend Development",
      icon: <CodeIcon className="w-4 h-4 mr-2" />,
      command() {
        router.push("/studentPortal/courses/frontend");
      },
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  // CommandPalette.jsx
  useEffect(() => {
    const onKeydown = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    window.addEventListener("keydown", onKeydown);
    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, []);

  return (
    <div>
      <CommandPalette
        trigger={
          <div
            className={`flex flex-wrap items-center p-4 cursor-pointer hover:border-l-4 hover:border-charmander hover:text-charmander`}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 mr-4"
              >
                <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            Search ⌘K
          </div>
        }
        hotKeys={"command+k"}
        resetInputOnOpen={true}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        closeOnSelect={true}
        commands={commands}
        renderCommand={RenderCommand}
      />
    </div>
  );
}

function RenderCommand(suggestion) {
  // A suggestion object will be passed to your custom component for each command
  const { icon, name } = suggestion;
  return (
    <div className="flex">
      <div>{icon}</div>
      <p>{name}</p>
    </div>
  );
}
