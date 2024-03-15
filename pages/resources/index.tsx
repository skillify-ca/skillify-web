import Head from "next/head";
import React from "react";
import SEO from "../../components/SEO"; // Assuming this is for the quiz page
import Card from "../../components/blog/BlogCard";
import LandingNavbar from "../../components/landingPage/LandingNavbar";
export default function Quiz() {
  return (
    <div className="h-full">
      <Head>
        <title>{"Quizzes"}</title>
        <meta
          name="description"
          content={"Articles and resources about Toronto coding bootcamps"}
        />
        <meta property="og:title" content={"Skillify Quiz"} />
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

      {/* Assuming this is the SEO component for the quiz page */}
      <SEO
        title={"Skillify Resources"}
        description={
          "These resources will help you figure out a roadmap for your tech journey."
        }
        image={"https://melv1n.com/img/learn-to-code-how-to-start.png"}
      />

      <LandingNavbar />

      <div className="w-full pt-0 pb-16 mx-auto bg-slate-50 max-w-7xl">
        <div className="p-0 mb-8 sm:p-8">
          <h1 className="p-8 text-5xl font-bold text-center text-white bg-murkrow ">
            Resources
          </h1>
        </div>

        <div className="grid items-center w-full grid-cols-1 gap-16 px-8 sm:px-16 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Card
              date={""}
              title={"Guide to Learning to Code"}
              image={
                "https://images.unsplash.com/photo-1490698900541-76d9b74bdcac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              description={
                "Use this guide to understand common mistakes to avoid and how to overcome feeling overwhelmed."
              }
              link={"/resources/guide"}
              color={3}
            />
          </div>
          <div>
            <Card
              date={""}
              title={"Job Tracker"}
              image={
                "https://images.unsplash.com/photo-1569230919100-d3fd5e1132f4?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              description={
                "Explore our job tracker to see our recommendations and observations on the job market."
              }
              link={"/resources/jobTracker"}
              color={0}
            />
          </div>
          <div>
            <Card
              date={""}
              title={"Webinar Training"}
              image={
                "https://images.unsplash.com/photo-1629115928899-bd61fea564c5?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              description={
                "How University Graduates Can Learn Coding And Become A Software Developer using the Skillify Blueprint In Just 6 Months"
              }
              link={"/resources/webinar"}
              color={1}
            />
          </div>
          <div>
            <Card
              date={""}
              title={"Learning Path"}
              image={
                "https://images.unsplash.com/photo-1439396874305-9a6ba25de6c6?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              description={
                "The Skillify Learning Path is a guide to help you figure out a personalized roadmap for your tech journey."
              }
              link={"/resources/learning-path"}
              color={2}
            />
          </div>
          <div>
            <Card
              date={""}
              title={"Competitor Map"}
              image={
                "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              description={
                "Our competitor map aims to help you figure out the options for schools that will help you achieve your learning goals."
              }
              link={"/resources/competitor-map"}
              color={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Quiz.getLayout = function getLayout(page) {
  return <div className="theme-default">{page}</div>;
};
