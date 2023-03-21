import Head from "next/head";
import React from "react";
import Card from "../../components/blog/BlogCard";
import LandingNavbar from "../../components/landingPage/LandingNavbar";
export default function Blog() {
  return (
    <div>
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
      <h1 className="w-full p-4 text-5xl font-bold text-center ">Blog</h1>

      <div className="absolute w-full ">
        <div className="absolute top-0 w-full h-full p-8 md:p-16 opacity-5"></div>

        <div className="grid items-center w-full grid-cols-1 gap-16 p-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h4>February 20, 2023</h4>
            <Card
              title={"Switching to Software Engineering"}
              image={"/images/blog/make-the-leap/softwareeng.jpg"}
              description={
                "A Skillify Student's Account of Switching Careers from Actuarial Science to Software Engineering"
              }
              link={"/blog/making-the-leap-into-development"}
              color={0}
            />
          </div>
          <div>
            <h4>February 8, 2023</h4>
            <Card
              title={"Jest + Function Testing"}
              image={"/images/blog/jest-function-testing/software_testing.jpeg"}
              description={
                "A Creative & Cheap Approach to Testing Tailwind/CSS Classes"
              }
              link={"/blog/jest-function-testing"}
              color={3}
            />
          </div>
          <div>
            <h4>August 15, 2022</h4>
            <Card
              title={"How to learn to code in online?"}
              image={
                "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
              }
              description={"Our guide on how to learn to code online"}
              link={"/blog/learn-to-code-online"}
              color={2}
            />
          </div>

          <div>
            <h4>August 14, 2022</h4>
            <Card
              title={"How to learn to code in Java?"}
              image={
                "https://images.unsplash.com/photo-1588239034647-25783cbfcfc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
              }
              description={"Our guide on how to learn to code in Java"}
              link={"/blog/learn-to-code-in-java"}
              color={1}
            />
          </div>
          <div>
            <h4>August 13, 2022</h4>
            <Card
              title={"How to learn to code in Python?"}
              image={
                "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
              }
              description={"Our guide on how to learn to code in Python"}
              link={"/blog/learn-to-code-in-python"}
              color={0}
            />
          </div>
          <div>
            <h4>July 11, 2022</h4>
            <Card
              title={"How to stand out to coop employers?"}
              image={
                "https://images.unsplash.com/photo-1516659257916-7be846591235?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              }
              description={"An employers perspective to hiring coop students"}
              link={"/blog/how-to-stand-out-to-coop-employers"}
              color={3}
            />
          </div>
          <div>
            <h4>Apriil 13, 2022</h4>
            <Card
              title={"Do Product Manager Need Coding Skills?"}
              image={
                "https://www.gooddata.com/img/blog/_1200x630/project-manager-bg.jpg"
              }
              description={
                "We talk about whether product managers should learn how to code"
              }
              link={"/blog/do-product-managers-need-coding-skills"}
              color={2}
            />
          </div>
          <div>
            <h4>Apriil 2, 2022</h4>
            <Card
              title={"Are Toronto coding bootcamps worth it?"}
              image={
                "https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcnRoJTIwaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
              }
              description={
                "This resource lists the top coding bootcamps in Toronto"
              }
              link={"/blog/is-it-worth-paying-for-a-coding-bootcamp"}
              color={1}
            />
          </div>
          <div>
            <h4>March 30, 2022</h4>
            <Card
              title={"Where can I learn to code in Toronto?"}
              image={
                "https://i.pcmag.com/imagery/roundups/07tAycb2jrO6jKSb5RsGUFq-1..v1569492641.jpg"
              }
              description={
                "This resource lists the top coding bootcamps in Toronto"
              }
              link={"/blog/best-toronto-coding-bootcamps-2022"}
              color={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Blog.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
