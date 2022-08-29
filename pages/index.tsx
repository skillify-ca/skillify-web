import React, { useEffect, useState } from "react";
import Facebook from "../components/Facebook";
import SEO from "../components/SEO";
import LandingNavbar from "../components/LandingNavbar";
import LandingPage, {
  LandingPageCopy,
} from "../components/math/stories/LandingPage";

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
    emailCaptureDescription,
  } = minoritiesCopy;

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
      <LandingPage
        headerText={headerText}
        description={description}
        bannerText={bannerText}
        credentialsText={credentialsText}
        benefitsText={benefitsText}
        benefits={benefits}
        emailCaptureText={emailCaptureText}
        emailCaptureDescription={emailCaptureDescription}
      />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
