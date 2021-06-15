import Link from "next/link";
import { useState } from "react";
import { signIn, useSession } from "next-auth/client";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [profieMenuActive, setProfileMenuActive] = useState(false);
  const [session, loading] = useSession();

  const handleClick = () => {
    setActive(!active);
  };

  const handleProfileClick = () => {
    setProfileMenuActive(!profieMenuActive);
  };

  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <nav className="bg-gray-800">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
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
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <a href="/">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="/images/logo.png"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="/images/logo.png"
                  alt="Workflow"
                />
                <span className="text-white pl-2">Math Champ</span>
              </div>

            </a>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="/diagnostic"
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Assessment
                </a>
                <a
                  href="/resources"
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Resources
                </a>
                <a
                  href="/tools"
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Tools
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--
        Mobile menu, toggle classes based on menu state.
    
        Menu open: "block", Menu closed: "hidden"
      --> */}

      <div className={`${active ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <a
            href="/diagnostic"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Assessment
          </a>
          <a
            href="/resources"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Resources
          </a>
          <a
            href="/tools"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Tools
          </a>
        </div>
      </div>
    </nav>
  );
}
