import React, { useEffect, useMemo, useState } from "react";
import SEO from "../components/SEO";
import LandingNavbarV2 from "../components/landingPage/LandingNavbarV2";
import LandingPage, {
  LandingPageCopy,
} from "../components/landingPage/LandingPage";

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

    const coachingCopy: LandingPageCopy = {
    copyType: "coaching",
    headerText: [
      { text: "Helping unemployed" },
      { text: "university graduates", highlight: true },
      { text: "in " },
      {
        text: coachingAnimatedWords[animatedWordIndex],
        highlight: true,
        animated: true,
      },
    ],
    description:
      "Get personalized and practical coaching to help you find a job, stand out in interviews, and grow your career with confidence. We tailor every plan to your goals, strengths, and real-world opportunities.",
    credentialsText: "",
    benefitsText: "Grow without limits",
    benefits: [
      {
        title: "Expert Mentors",
        descripton:
          "Get personalized learning plans from our expert tutors. Our tutoring is aligned to Ontario curriculum standards.",
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
      "Think learning to code is too hard? Drop us your email and we will send you our free guide on avoiding overwhelmed.",
  };

  const lifeCoachingCopy: LandingPageCopy = {
    copyType: "lifeCoaching",
    headerText: [
      { text: "Coaching " },
      { text: "young adults", highlight: true },
      { text: "in " },
      {
        text: lifeCoachingAnimatedWords[animatedWordIndex],
        highlight: true,
        animated: true,
      },
    ],
    description:
      "Get personalized and supportive coaching to help you build healthy habits, manage money, and navigate adulthood with clarity and confidence. We customize our guidance to your values, challenges, and long-term goals.",
    credentialsText: "",
    benefitsText: "Grow without limits",
    benefits: [
      {
        title: "Expert Mentors",
        descripton:
          "Get personalized learning plans from our expert tutors. Our tutoring is aligned to Ontario curriculum standards.",
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
      "Think learning to code is too hard? Drop us your email and we will send you our free guide on avoiding overwhelmed.",
  };

  const tutoringCopy: LandingPageCopy = {
    copyType: "tutoring",
    headerText: [
      { text: "Private Tutoring for" },
      { text: "K-12 students", highlight: true },
      { text: "in " },
      {
        text: k12animatedWords[animatedWordIndex],
        highlight: true,
        animated: true,
      },
    ],
    description:
      "Whether it's homework help or test prep, get unstuck with personalized tutoring from a real human tutor via Zoom or in-person in Toronto.",
    credentialsText: "",
    benefitsText: "Grow without limits",
    benefits: [
      {
        title: "Expert Mentors",
        descripton:
          "Get personalized learning plans from our expert tutors. Our tutoring is aligned to Ontario curriculum standards.",
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
      "Think learning to code is too hard? Drop us your email and we will send you our free guide on avoiding overwhelmed.",
  };

  const defaultCopy: LandingPageCopy = {
      headerText: [   
        { text: "Python and SQL for Beginners", highlight: false },        
      ],
      
      description: "Confidently learn to code and analyze data with Python and SQL. Master the basic concepts and build your own projects.",
      
      credentialsText: "Our program is built by former CEMC medalists and Waterloo students who scored 80+ on Euclid and placed nationally on CCC. We've helped students improve their scores by an average of 18 points.",
      
      benefitsText: "Transform your contest performance and strengthen your Waterloo application in just 8 weeks:",
      
      benefits: [
        {
          title: "Contest-Specific Problem Patterns",
          descripton: "Learn the 12 question types that appear on 80% of Euclid exams—not generic math review"
        },
        {
          title: "Live Expert Coaching",
          descripton: "Weekly sessions with Waterloo Math/CS students who've mastered these contests"
        },
        {
          title: "Strategic Score Maximization",
          descripton: "Know when to skip, when to guess, and how to earn partial marks efficiently"
        },
        {
          title: "10 Years of Past Papers",
          descripton: "Work through actual CEMC contests with detailed solutions and common pitfalls"
        },
        {
          title: "Admission Edge Package",
          descripton: "Stand out in Waterloo's holistic review with scores that put you in the top 25%"
        }
      ],
      
      emailCaptureText: [
        { text: "Ready to ", highlight: false },
        { text: "Compete at Your Highest Level", highlight: true },
        { text: "?", highlight: false }
      ],
      
      emailCaptureDescription: "Limited spots for our Spring 2026 cohort. Euclid is April 9th—start preparing now with our free strategy guide and sample problem set.",
      
      copyType: "tutoring"
    }

const currentCopy = useMemo(() => {
  switch (copyType) {
    case "coaching":
      return coachingCopy;
    case "lifeCoaching":
      return lifeCoachingCopy;
    case "tutoring":
      return defaultCopy;
    default:
      return defaultCopy;
  }
}, [copyType, animatedWordIndex]);


  function handleSetCurrentCopy(type: "tutoring" | "coaching" | "lifeCoaching") {
  setCopyType(type);
}


  const {
    headerText,
    description,
    credentialsText,
    benefitsText,
    benefits,
    emailCaptureText,
    emailCaptureDescription,
  } = currentCopy;

  return (
    <div>
      <SEO
        title={"Skillify - Online Python and SQL Course for Beginners"}
        description={
          "Online Python and SQL Course for Beginners. Learn to code and analyze data with Python and SQL. Master the basic concepts and build your own projects."
        }
        image={"https://www.skillify.ca/images/logo.svg"}
      />
      <LandingNavbarV2 />
      <LandingPage
        headerText={headerText}
        description={description}
        copyType={copyType}
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
        {/* <LandingFooter /> */}
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
