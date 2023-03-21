import React, { useEffect, useState } from "react";
import LandingFooter from "../components/landingPage/LandingFooter";
import LandingNavbar from "../components/landingPage/LandingNavbar";
import LandingPage, {
  LandingPageCopy,
} from "../components/landingPage/LandingPage";
import SEO from "../components/SEO";

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

  const defaultCopy: LandingPageCopy = {
    headerText: [
      { text: "Coaching" },
      { text: "university graduates", highlight: true },
      { text: "to start a " },
      { text: "career", highlight: true },
      { text: "in tech" },
    ],
    description:
      "Get personalized and flexible training for high-paying remote jobs from Silicon Valley instructors. We customize our program to you and your unique interests.",
    credentialsText: "",
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
      { text: "for learning to code and starting a career in " },
      { text: "tech ", highlight: true },
    ],
    emailCaptureDescription:
      "Think learning to code is too hard? Drop us your email and we will send you our free guide on avoiding overhwhelm.",
  };

  const {
    headerText,
    description,
    credentialsText,
    benefitsText,
    benefits,
    emailCaptureText,
    emailCaptureDescription,
  } = defaultCopy;

  return (
    <div>
      <SEO
        title={"Skillify"}
        description={
          "Toronto's best coding academy for online learning! We teach high demand skills to help you get hired in the tech industry."
        }
        image={"https://www.skillify.ca/images/logo.svg"}
      />
      <LandingNavbar />
      <LandingPage
        headerText={headerText}
        description={description}
        credentialsText={credentialsText}
        benefitsText={benefitsText}
        benefits={benefits}
        emailCaptureText={emailCaptureText}
        emailCaptureDescription={emailCaptureDescription}
      />
      <div
        className={`sticky bottom-0 z-50 ${
          showNavBar ? "opacity-100" : "opacity-0 h-0"
        } overflow-hidden shadow-lg border-t-2 transform transition-all`}
      >
        <LandingFooter />
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
