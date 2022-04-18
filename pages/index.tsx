import React, { useEffect, useState } from "react";
import LandingPagev2 from "../components/math/stories/LandingPagev2";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Facebook from "../components/Facebook";
import SEO from "../components/SEO";
import Link from "next/link";
import LandingNavbar from "../components/LandingNavbar";
import { Button } from "../components/ui/Button";

const HomePage = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  useEffect(() => {
    const onScroll = (e) => {
      if (e.target.documentElement.scrollTop > 400) {
        setShowNavBar(true);
      } else {
        setShowNavBar(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div>
      <SEO
        title={"Skillify"}
        description={
          "Toronto's best coding bootcamp for online learning! We teach high demand skills to help you get hired in the tech industry."
        }
        image={"https://www.skillify.ca/images/logo.svg"}
      />

      <div
        className={`sticky top-0 z-50 ${
          showNavBar ? "opacity-100" : "opacity-0 h-0"
        } overflow-hidden transform transition-all`}
      >
        <LandingNavbar />
      </div>

      <div className="relative overflow-hidden bg-white">
        <Facebook />
        <div className="grid grid-cols-1 sm:grid-cols-2 h-160">
          <div className="p-4 lg:p-16 sm:text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="">Learn new </span>{" "}
              <span className="text-yellow-600 ">skills</span>{" "}
              <span className="">to </span>{" "}
              <div className="text-yellow-600 ">start a career</div>{" "}
              <span className="">in tech.</span>{" "}
            </h1>
            <p className="my-4 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Get access to a personalized roadmap, industry mentors and a
              community of learners.
            </p>
            <Button label={"Start Learning"} size="large" />
          </div>
          <div className="h-3/4">
            <img
              className="object-cover w-full -mt-28"
              src="/images/landingPage/cuate.svg"
              alt=""
            />
          </div>
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
