import Link from "next/link";
import React from "react";
import { Theme } from "../../redux/themeSlice";

type LandingNavbarProps = {
  theme?: Theme;
};

const NavbarOptions = () => {
  return (
    <>
      {/* <Link href={"/tutoring"} legacyBehavior target="_blank">
        <div className="p-4 rounded-lg cursor-pointer hover:bg-indigo-200">
        <p>K-12 Tutoring</p>
        </div>
      </Link> */}
      {/* <Link href={"/studentPortal"} legacyBehavior target="_blank">
        <div className="p-4 rounded-lg cursor-pointer hover:bg-indigo-200">
          <p>Log In</p>
        </div>
      </Link> */}


      {/* <div className="p-4 rounded-lg cursor-pointer hover:bg-indigo-200" onClick={() => {
                onSetCurrentCopy("coaching");
              }}>
                <p>Career Coaching</p>
              </div> */}

      {/* <div className="p-4 rounded-lg cursor-pointer hover:bg-indigo-200" onClick={() => {
              onSetCurrentCopy("lifeCoaching");
            }}>
              <p>Life Skills</p>
            </div> */}
    </>
  );
};

export default function LandingNavbarV2({  
  theme = Theme.DEFAULT,
}: LandingNavbarProps) {
  const [active, setActive] = React.useState(false);

  const handleMenuIconClick = () => {
    setActive(!active);
  };
  return (
    <div className="w-full bg-white border-b-2">
      <div className="md:hidden">
        <div className="z-20 grid w-full h-16 grid-cols-3 p-4 md:hidden ">
          <div
            className="cursor-pointer text-textPrimary"
            onClick={handleMenuIconClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            </svg>
          </div>
          <div className="cursor-pointer">
            <Link href={"/"} legacyBehavior>
              {theme === Theme.DEFAULT ? (
                <img className="h-8 w-28 " src="/images/logo.svg" />
              ) : theme === Theme.DRACULA ? (
                <img className="h-8 w-28" src="/images/logo-dark.svg" />
              ) : null}
            </Link>
          </div>
          <div />
        </div>

        <div
          className={`z-10 w-full flex flex-col justify-between overflow-hidden transition-all transform bg-white bg-backgroundSecondary ${active ? "h-[7rem]" : "h-0"
            } duration-500 ease-in-out md:hidden`}
        >
          <div className="flex-col md:hidden gap-4">
            <NavbarOptions />
          </div>
          <div className="hidden items-center gap-4 p-4">
            <div className="">
              <a
                href={"https://www.linkedin.com/in/vithushan/"}
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/landingPage/linkedin.svg" className="w-8" />
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden w-full md:flex md:flex-col">
        <div className="grid items-center justify-between w-full grid-cols-1 px-4 bg-white border-b-2 md:flex place-items-center text-murkrow">
          <Link href={"/"} legacyBehavior>
            <img
              src="/images/logo.svg"
              className="mt-4 cursor-pointer md:mt-0 md:p-4 w-28 sm:w-40"
            />
          </Link>
          <div className="flex gap-4">
            <NavbarOptions />
          </div>
          <div className="hidden items-center gap-4 p-4">
            <div className="">
              <a
                href={"https://www.linkedin.com/in/vithushan/"}
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/landingPage/linkedin.svg" className="w-8" />
              </a>{" "}
            </div>
            <div className="">
              <a
                href={"https://www.instagram.com/skillifyca/"}
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/landingPage/ig.png" className="w-8" />
              </a>{" "}
            </div>
            <div className="">
              <a
                href={"https://www.tiktok.com/@skillify.ca"}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/landingPage/tiktok.png"
                  className="w-8 rounded"
                />
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
