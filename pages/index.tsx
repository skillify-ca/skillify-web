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
        } overflow-hidden shadow-lg transform transition-all`}
      >
        <LandingNavbar />
      </div>
      <Facebook />
      <LandingPagev2 />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
