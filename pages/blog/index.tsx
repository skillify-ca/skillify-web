import { Head } from "next/document";
import React from "react";
import BlogCard from "../../components/blog/BlogCard";
import BlogPost from "../../components/blog/BlogPost";
import LandingNavbar from "../../components/landingPage/LandingNavbar";

interface BlogCard {
  date: string;
  title: string;
  image: string;
  description: string;
  link: string;
  color: number;
}

export default function Blog() {
  const featuredPosts = [
    {
      date: "November 30, 2023",
      title: "Where can I learn to code in Toronto?",
      image:
        "https://i.pcmag.com/imagery/roundups/07tAycb2jrO6jKSb5RsGUFq-1..v1569492641.jpg",
      description: "This resource lists the top coding bootcamps in Toronto",
      link: "/blog/best-toronto-coding-bootcamps-2024",
      color: 0,
    },
    {
      date: "September 19, 2023",
      title: "What is a good tech salary in Canada?",
      image: "https://images.unsplash.com/photo-1641932971241-df935a6d16e1",
      description: "A summary of tech interview stats and salaries in Canada",
      link: "/resources/jobTracker",
      color: 2,
    },
  ];

  const blogCards = [
    {
      date: "April 13, 2023",
      title: "Coding Academy Survival Guide",
      image: "/images/blog/jest-function-testing/software_testing.jpeg",
      description:
        "18 Relevant and helpful tips for exceling in your coding academy or engineering internship",
      link: "/blog/coding-academy-tips",
      color: 3,
    },
    {
      date: "February 20, 2023",
      title: "Switching to Software Engineering",
      image: "/images/blog/make-the-leap/softwareeng.jpg",
      description:
        "A Skillify Student's Account of Switching Careers from Actuarial Science to Software Engineering",
      link: "/blog/making-the-leap-into-development",
      color: 0,
    },
    {
      date: "August 15, 2022",
      title: "How to learn to code online?",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
      description: "Our guide on how to learn to code online",
      link: "/blog/learn-to-code-online",
      color: 2,
    },
    {
      date: "August 14, 2022",
      title: "How to learn to code in Java?",
      image:
        "https://images.unsplash.com/photo-1588239034647-25783cbfcfc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      description: "Our guide on how to learn to code in Java",
      link: "/blog/learn-to-code-in-java",
      color: 1,
    },
    {
      date: "August 13, 2022",
      title: "How to learn to code in Python?",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
      description: "Our guide on how to learn to code in Python",
      link: "/blog/learn-to-code-in-python",
      color: 0,
    },
    {
      date: "July 11, 2022",
      title: "How to stand out to coop employers?",
      image:
        "https://images.unsplash.com/photo-1516659257916-7be846591235?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      description: "An employers perspective to hiring coop students",
      link: "/blog/how-to-stand-out-to-coop-employers",
      color: 3,
    },
    {
      date: "April 13, 2022",
      title: "Do Product Manager Need Coding Skills?",
      image:
        "https://www.gooddata.com/img/blog/_1200x630/project-manager-bg.jpg",
      description:
        "We talk about whether product managers should learn how to code",
      link: "/blog/do-product-managers-need-coding-skills",
      color: 2,
    },
    {
      date: "April 2, 2022",
      title: "Are Toronto coding bootcamps worth it?",
      image:
        "https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcnRoJTIwaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
      description: "This resource lists the top coding bootcamps in Toronto",
      link: "/blog/is-it-worth-paying-for-a-coding-bootcamp",
      color: 1,
    },
  ];

  return (
    <div className="bg-white">
      <Head>
        <title>{"Skillify Blog"}</title>
        <meta
          name="description"
          content={"Articles and resources about Toronto coding bootcamps"}
        />
        <meta property="og:title" content={"Skillify Blog"} />
        <meta
          property="og:image"
          content={"https://www.skillify.ca/images/images/logo.png"}
        />
        <meta
          property="og:description"
          content={"Articles and resources about Toronto coding bootcamps"}
        />
        <meta property="og:url" content="https://skillify.ca/" />
        <meta property="og:type" content="website" />
      </Head>
      <LandingNavbar />
      <div className="w-full mx-auto bg-slate-50 max-w-7xl">
        <div className="p-8 ">
          <h1 className="p-8 text-5xl font-bold text-center text-white bg-murkrow ">
            Blog
          </h1>
        </div>
        <h2 className="w-full px-4 my-8 text-3xl font-bold text-center">
          Featured Posts
        </h2>
        <div className="grid items-center w-full grid-cols-1 gap-16 px-16 pb-16 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((blogCard, index) => {
            return (
              <BlogCard
                key={index}
                title={blogCard.title}
                date={blogCard.date}
                image={blogCard.image}
                description={blogCard.description}
                link={blogCard.link}
                color={blogCard.color}
              />
            );
          })}
        </div>
        <h2 className="w-full px-4 mb-8 text-3xl font-bold text-center">
          All Posts
        </h2>
        <div className="grid items-center w-full grid-cols-1 gap-8 px-16 pb-16">
          {blogCards.map((blogCard, index) => {
            return (
              <BlogPost
                key={index}
                title={blogCard.title}
                date={blogCard.date}
                image={blogCard.image}
                description={blogCard.description}
                link={blogCard.link}
                color={blogCard.color}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

Blog.getLayout = function getLayout(page) {
  return <div className=" theme-default">{page}</div>;
};
