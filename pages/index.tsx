import React from "react";
import LandingPagev2 from "../components/math/stories/LandingPagev2";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Facebook from "../components/Facebook";
import SEO from "../components/SEO";

const navigation = [
  { name: "Student Portal", href: "/studentPortal/intro" },
  { name: "Resources", href: "/resources" },
];

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Skillify</title>
      </Head>
      <SEO
        title={"Skillify"}
        description={
          "Toronto's best website for online learning! We teach high demand skills to help you get hired in the tech industry."
        }
        image={"https://www.skillify.ca/images/logo.svg"}
      />
      <div className="relative overflow-hidden bg-white">
        <Facebook />

        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Popover>
              <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="#">
                        <span className="sr-only">Skillify</span>
                        <img
                          className="w-auto h-8 sm:h-10"
                          src="/images/logo.svg"
                        />
                      </a>
                      <div className="flex items-center -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="w-6 h-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="font-medium text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>

              <div>
                <Popover.Panel
                  focus
                  className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
                >
                  <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                    <div className="flex items-center justify-between px-5 pt-4">
                      <div>
                        <img
                          className="w-auto h-8"
                          src="/images/logo.svg"
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                          <span className="sr-only">Close main menu</span>
                          <XIcon className="w-6 h-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </div>
            </Popover>

            <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="">Learn new </span>{" "}
                  <span className="text-yellow-600 ">skills</span>{" "}
                  <span className="">to </span>{" "}
                  <div className="text-yellow-600 ">start a career</div>{" "}
                  <span className="">in tech.</span>{" "}
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Get access to a personalized roadmap, industry mentors and a
                  community of learners.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="/studentPortal/intro"
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-yellow-600 border border-transparent rounded-md hover:bg-yellow-700 md:py-4 md:text-lg md:px-10"
                    >
                      Start Learning
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/images/landingPage/cuate.svg"
            alt=""
          />
        </div>
      </div>
      <LandingPagev2 />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
