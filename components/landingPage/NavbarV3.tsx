import React, { useState } from "react";

const PAGES = [
    {
    id: "schools",
    title: "School Workshops"
  },
  {
    id: "career",
    title: "Career Coaching"
  },
  {
    id: "tech",
    title: "Tech Services"
  },
    {
    id: "tutoring",
    title: "K-12 Tutoring"
  },
  // {
  //   id: "app-directory",
  //   title: "App Directory"
  // },
  {
    id: "game-library",
    title: "Game Library"
  }
]

export default function NavbarV3({ currentPage }: { currentPage: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const unselectedStyle = "hover:text-charmander transition-colors"
  const selectedStyle = "text-charmander font-bold"

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function getNavbarLinkStyle(pageId) {
    console.log("Current page:", currentPage, "Checking against:", pageId);
    if (pageId == '' && currentPage === undefined) {
      return selectedStyle
    } 

    if (pageId === currentPage) {
      return selectedStyle
    }
    return unselectedStyle
  }

  return (
    <div className="w-full bg-white border-b-2 relative">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between w-full px-4 bg-white border-b-2 text-murkrow">
          <a href="/">
            <img src="/images/logo.svg" className="my-4 cursor-pointer w-40" alt="Skillify" />
          </a>
          <div className="flex gap-6 text-sm font-medium text-gray-600">
            {
              PAGES.map(page => (
                <a
                  key={page.id}
                  href={page.id ? "/services/" + page.id : "/"}
                  className={`${getNavbarLinkStyle(page.id)}`}
                >
                  {page.title}
                </a>
              ))
            }
          </div>
          <a
            href="mailto:vithushan19@gmail.com?subject=Learn More"
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-white border-b-2">
          <a href="/">
            <img src="/images/logo.svg" className="w-32 cursor-pointer" alt="Skillify" />
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-hidden"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out bg-white border-b-2 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col px-4 py-3 space-y-3">
            {
              PAGES.map(page => (
                <a
                  key={page.id}
                  href={page.id ? "/services/" + page.id : "/"}
                  className={`py-2 text-sm font-medium ${currentPage === page.id ? selectedStyle : unselectedStyle}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {page.title}
                </a>
              ))
            }
            <a
              href="mailto:vithushan19@gmail.com?subject=Learn More"
              className="block bg-orange-400 hover:bg-orange-500 text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors text-center mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}