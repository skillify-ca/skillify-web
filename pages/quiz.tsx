import Head from "next/head";
import React from "react";
import SEO from "../components/SEO"; // Assuming this is for the quiz page
import Card from "../components/blog/BlogCard";
import LandingNavbar from "../components/landingPage/LandingNavbar";
export default function Quiz() {
  return (
    <div>
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
        title={"Skillify Tech Personality Quizzes"}
        description={
          "These quizzes will help you figure out a roadmap for your tech journey."
        }
        image={"https://melv1n.com/img/learn-to-code-how-to-start.png"}
      />

      <LandingNavbar />
      <h1 className="w-full p-4 text-5xl font-bold text-center ">Quizzes</h1>

      <div className="absolute w-full ">
        <div className="absolute top-0 w-full h-full p-8 md:p-16 opacity-5"></div>

        <div className="grid items-center w-full grid-cols-1 gap-16 p-16 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Card
              date={""}
              title={"Discover Your First Programming Language!"}
              image={
                "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              }
              description={
                "Use this quiz to pick a language that's right for you."
              }
              link={"/resources/quizzes/firstProgrammingLanguage"}
              color={3}
            />
          </div>
          <div>
            <Card
              date={""}
              title={"Which Career in tech is Meant for You?"}
              image={
                "https://images.unsplash.com/photo-1459180129673-eefb56f79b45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
              }
              description={
                "Narrow down a career in tech that suits your personality!"
              }
              link={"/resources/quizzes/careerQuiz"}
              color={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Quiz.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
