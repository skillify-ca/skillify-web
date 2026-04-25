import React from "react";

const PAGES = [
  {
    id: "",
    title: "Home"
  },
  {
    id: "tutoring",
    title: "K-12 Tutoring"
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
    id: "schools",
    title: "School Workshops"
  }
]

export default function NavbarV3({ currentPage }: { currentPage: string }) {
  const unselectedStyle = "hover:text-charmander transition-colors"
  const selectedStyle = "text-charmander font-bold"
  return (
    <div className="w-full bg-white border-b-2">
      <div className="hidden w-full md:flex md:flex-col">
        <div className="grid items-center justify-between w-full grid-cols-1 px-4 bg-white border-b-2 md:flex place-items-center text-murkrow">
          <a href="/">
            <img src="/images/logo.svg" className="mt-4 cursor-pointer md:mt-0 md:p-4 w-28 sm:w-40" alt="Skillify" />
          </a>
          <div className="flex gap-6 text-sm font-medium text-gray-600">
            {
              PAGES.map(page => <a href={"/" + page.id} className={`${currentPage === page.id ? selectedStyle : unselectedStyle}`}>{page.title}</a>)
            }
          </div>
          <a
            href="mailto:vithushan19@gmail.com?subject=Book a session"
            className="hidden md:block bg-orange-400 hover:bg-orange-500 text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors"
          >
            Book a session
          </a>
        </div>
      </div>
    </div>
  )
}