import React from "react";
import LandingPagev2 from "../components/math/stories/LandingPagev2";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Facebook from "../components/Facebook";
import SEO from "../components/SEO";
import Link from "next/link";
import LandingNavbar from "../components/LandingNavbar";
import { Button } from "../components/ui/Button";

const navigation = [
  { name: "Student Portal", href: "/studentPortal/intro" },
  { name: "Blog", href: "/blog" },
];

const HomePage = () => {
  return (
    <div>
      <SEO
        title={"Skillify"}
        description={
          "Toronto's best coding bootcamp for online learning! We teach high demand skills to help you get hired in the tech industry."
        }
        image={"https://www.skillify.ca/images/logo.svg"}
      />
      <div className="sticky top-0 z-50">
        <LandingNavbar />
      </div>
      <div className="relative overflow-hidden bg-white">
        <Facebook />

        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
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
