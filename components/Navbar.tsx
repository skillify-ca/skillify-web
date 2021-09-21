import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession()
  const [active, setActive] = useState(false);
  const [profieMenuActive, setProfileMenuActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const handleProfileClick = () => {
    setProfileMenuActive(!profieMenuActive);
  };

  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <nav className="bg-gray-800">
      <div className="mx-auto px-2 lg:px-6 lg:px-8">
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
          <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
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
            <div className="hidden lg:block lg:ml-6">
              <div className="flex space-x-4">
                <a
                  href="/practice"
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Student Portal
                </a>
                <a
                  href="/resources"
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  For Educators
                </a>

                <a
                  href="/contact"
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
            {/* <!-- Profile dropdown --> */}
            <div className="ml-3 relative">
              <div>
                <div>
                  {status === "loading"
                    ? ""
                    : !session && (
                        <>
                          <Link href="/welcome">
                            <p className="text-white cursor-pointer">Sign in</p>
                          </Link>
                        </>
                      )}
                  {session && (
                    <button
                      className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu"
                      aria-haspopup="true"
                      onClick={handleProfileClick}
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={session.user.image}
                        alt=""
                      />
                    </button>
                  )}
                </div>
              </div>
              {/* <!--
                Profile dropdown panel, show/hide based on dropdown state.
    
                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> */}
              <div className={`${profieMenuActive ? "block" : "hidden"} `}>
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Settings
                  </a>
                  <a
                    href="/api/auth/signout"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--
        Mobile menu, toggle classes based on menu state.
    
        Menu open: "block", Menu closed: "hidden"
      --> */}

      <div className={`${active ? "block" : "hidden"} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="/practice"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Student Portal
          </a>
          <a
            href="/resources"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            For Educators
          </a>
          <a
            href="/contact"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
