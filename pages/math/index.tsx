import React from "react";
import HeroHome from "../../components/coding/landing/HeroHome";
import Navbar from "../../components/Navbar";
import LandingPagev3 from "../../components/stories/LandingPagev3";

export default function Math(props) {
  const pages = [
    { title: "Practice Tracker", description: "Our online practice tracker lets you master math skills at your own pace.", link: "/math/practiceTracker" },
    { title: "Ask an Expert", description: "Ask one of our math tutors for help on any math questions.", link: "mailto:admin@vithushan.ca?subject=Math Question" },
  ];

  return (
    <div><LandingPagev3 pages={pages} /></div>
  );
}
