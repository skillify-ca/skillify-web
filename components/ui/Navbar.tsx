import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../lib/authContext";

export default function Navbar({
  active = false,
  setActive = (val: boolean) => {},
}) {
  const handleClick = () => {
    setActive(!active);
  };

  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <nav className="w-full h-full bg-white border-b-2 border-gray-200 dark:bg-gray-900">
      <div className="flex items-center justify-center h-full px-2 mx-auto lg:px-8 ">
        <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
          {/* <!-- Mobile menu button--> */}
          <button
            className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded="false"
            onClick={handleClick}
          >
            <span className="sr-only">Open main menu</span>
            {/* <!-- Icon when menu is closed. --> */}
            {/* <!--
                Heroicon name: outline/menu
    
                Menu open: "hidden", Menu closed: "block"
              --> */}
            <svg
              className={`${active ? "hidden" : "block"} h-6 w-6"`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* <!-- Icon when menu is open. --> */}
            {/* <!--
                Heroicon name: outline/x
    
                Menu open: "block", Menu closed: "hidden"
              --> */}
            <svg
              className={`${active ? "block" : "hidden"} h-6 w-6"`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-center flex-1 lg:items-stretch lg:justify-center">
          <Link href="/">
            <div className="flex items-center flex-shrink-0">
              <img
                className="block w-auto h-8 lg:hidden"
                src="/images/logo.svg"
                alt="Workflow"
              />
              <img
                className="hidden w-auto h-8 lg:block"
                src="/images/logo.svg"
                alt="Workflow"
              />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
