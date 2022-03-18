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
    <nav className="bg-white w-full border-b-2 border-gray-200">
      <div className="mx-auto px-2 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
          <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-center">
            <a href="/">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="/images/logo.svg"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="/images/logo.svg"
                  alt="Workflow"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
