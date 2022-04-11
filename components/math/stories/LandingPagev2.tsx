import React from "react";
import Benefits from "../../coding/landing/Benefits";
import EmailCapture from "../../coding/landing/EmailCapture";
import TestimonialSect from "../../coding/landing/TestimonialSect";
import SubscribeBanner from "../../coding/landing/SubscribeBanner";
import LandingFooter from "../../coding/landing/LandingFooter";
import Credentials from "../../coding/landing/Credentials";
import Courses from "../../coding/landing/Courses";

const LandingPagev2 = () => {
  return (
    <div>
      <div className="flex flex-col w-full bg-gray-100">
        <Courses />
        <Credentials />
        <Benefits />
        <TestimonialSect />
        <SubscribeBanner />
      </div>
      <LandingFooter />
    </div>
  );
};

export default LandingPagev2;
