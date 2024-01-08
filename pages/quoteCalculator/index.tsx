import Head from "next/head";
import React from "react";
import LandingNavbar from "../../components/landingPage/LandingNavbar";
export default function Quote() {
  return (
    <div className="bg-charmander h-full">
      <Head>
        <title>{"Quote Calculator"}</title>
        {/* Add meta tags for SEO if needed */}
      </Head>
      <LandingNavbar />
      <div className="w-full mx-auto bg-charmander text-white text-center h-screen max-w-7xl">
        <div className="sm:p-8 flex flex-col space-y-4 ">
          <img
            src="/images/quoteCalculator/person-studying-online.png"
            className="py-4"
          ></img>
          <h1 className="text-2xl font-bold">
            {" "}
            We're thrilled you want to learn with Skillify
          </h1>
          <p> Complete our brief questionnaire to receive a quote.</p>
          <button>Start</button>
        </div>{" "}
        <p className="justify-end text-xs">
          Due to the personalized nature of our program, please note that the
          prices generated are an estimate.
        </p>
      </div>
    </div>
  );
}

Quote.getLayout = function getLayout(page) {
  return <div className=" theme-default">{page}</div>;
};
