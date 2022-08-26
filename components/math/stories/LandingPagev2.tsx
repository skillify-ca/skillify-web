import Link from "next/link";
import React from "react";
import Benefits, { BenefitData } from "../../coding/landing/Benefits";
import EmailCapture from "../../coding/landing/EmailCapture";
import TestimonialSect from "../../coding/landing/TestimonialSect";
import SubscribeBanner from "../../coding/landing/SubscribeBanner";
import LandingFooter from "../../coding/landing/LandingFooter";
import Credentials from "../../coding/landing/Credentials";
import Hero, { HighlightableText } from "../../coding/landing/Hero";

const LandingPagev2 = () => {
  type LandingPageCopy = {
    headerText: HighlightableText[];
    description: string;
    bannerText: string;
    credentialsText: string;
    benefitsText: string;
    benefits: BenefitData[];
    emailCaptureText: HighlightableText[];
    emailCaptureDescription: string;
  };
  const productManagerCopy: LandingPageCopy = {
    headerText: [
      { text: "Coding courses" },
      { text: "for" },
      { text: "product managers.", highlight: true },
    ],
    description: "Hands-on experience taught by expert coaches.",
    bannerText:
      "Traditional universities and coding bootcamps leave you in debt and unprepared in the workforce. With our project-based courses, you can learn the fundamentals of coding and stand out amongst your peers.",
    credentialsText: "Learn to effectively communicate with engineers",
    benefitsText: "Become technical and advance your career",
    benefits: [
      {
        title: "Expert Mentors",
        descripton:
          "Get tailored coaching from our industry experts. Our coaches walk alongside you to help you confidently take the next step.",
      },
      {
        title: "Bring Your Own Project",
        descripton:
          "Have an idea you've always wanted to build? We train you to build and ship your own products.",
      },
      {
        title: "Community of Learners",
        descripton:
          "Join a cohort-based course to learn with peers and keep each other accountable.",
      },
    ],
    emailCaptureText: [
      { text: "Get our" },
      { text: "top 12 secret tips ", highlight: true },
      { text: "on learning to code as a " },
      { text: "product manager ", highlight: true },
    ],
    emailCaptureDescription:
      "Think learning to code is too hard? Drop us your email and we will send you our free guide on avoiding overhwhelm.",
  };

  const minoritiesCopy: LandingPageCopy = {
    headerText: [
      { text: "Helping" },
      { text: "minorities", highlight: true },
      { text: "start a " },
      { text: "career", highlight: true },
      { text: "in tech" },
    ],
    description: "Hands-on experience taught by expert coaches.",
    bannerText:
      "Traditional universities and coding bootcamps leave you in debt and unprepared for finding a real job. With our project-based courses, you can learn the fundamentals of coding and get hired.",
    credentialsText: "Learn to effectively communicate with engineers",
    benefitsText: "Grow without limits",
    benefits: [
      {
        title: "Expert Mentors",
        descripton:
          "Get tailored coaching from our industry experts. Our coaches walk alongside you to help you confidently take the next step.",
      },
      {
        title: "Job Search Support",
        descripton:
          "We will help you get hired with access to resume critiques, mock coding interviews as well as exclusive internship opportunities.",
      },
      {
        title: "Community of Learners",
        descripton:
          "Join a cohort-based course to learn with peers and keep each other accountable.",
      },
    ],
    emailCaptureText: [
      { text: "Get our" },
      { text: "top 12 secret tips ", highlight: true },
      { text: "learning to code as and starting a career in " },
      { text: "tech ", highlight: true },
    ],
    emailCaptureDescription:
      "Think learning to code is too hard? Drop us your email and we will send you our free guide on avoiding overhwhelm.",
  };

  const {
    headerText,
    description,
    bannerText,
    credentialsText,
    benefitsText,
    benefits,
    emailCaptureText,
  } = minoritiesCopy;
  return (
    <div>
      <div className="flex flex-col w-full bg-gray-100">
        <Hero headerText={headerText} description={description} />
        <Benefits headerText={benefitsText} benefits={benefits} />
        <Credentials headerText={credentialsText} />
        <EmailCapture headerText={emailCaptureText} description={""} />
        <TestimonialSect />
        <SubscribeBanner bannerText={bannerText} />
      </div>
      <LandingFooter />
    </div>
  );
};

export default LandingPagev2;
