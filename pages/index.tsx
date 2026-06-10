import React, { useEffect, useState } from "react";
import SEO from "../components/SEO";
import ServicesLayout from "./services/layout";
import SchoolsPage from "./services/schools";

const HomePage = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const k12animatedWords = ["Math", "Coding", "English", "Science"];
  const coachingAnimatedWords = ["getting interviews", "landing job offers", "negotiating salaries"];
  const lifeCoachingAnimatedWords = ["Mental Health and Addiction", "Personal Finance and Entrepreneurship", "Leadership and Communication", "Civic Engagement"];
  const [animatedWordIndex, setAnimatedWordIndex] = useState(0);

  const [copyType, setCopyType] = useState<
    "tutoring" | "coaching" | "lifeCoaching"
  >("tutoring");

  useEffect(() => {
    const interval = setInterval(() => {
      const animatedWords =
        copyType === "coaching"
          ? coachingAnimatedWords
          : copyType === "lifeCoaching"
            ? lifeCoachingAnimatedWords
            : k12animatedWords;
      setAnimatedWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [copyType]);

  useEffect(() => {
    setAnimatedWordIndex(0);
  }, [copyType]);

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
        title={"Skillify - Online Courses and Tech Services for Everyone"}
        description={
          "Skillify offers online courses and tech services for everyone. Whether you're a student looking for tutoring, a professional seeking coaching, or looking to build an app, Skillify has you covered with expert guidance and support."
        }
        image={"https://www.skillify.ca/images/logo.svg"}
      />
      <SchoolsPage />
      <div
        className={`sticky bottom-0 z-50 ${showNavBar ? "opacity-100" : "opacity-0 h-0"
          } overflow-hidden shadow-lg border-t-2 transform transition-all`}
      >
        {/* <LandingFooter /> */}
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <ServicesLayout>{page}</ServicesLayout>;
};
