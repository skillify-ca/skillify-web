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
      <div className="w-full mx-auto bg-charmander h-full max-w-7xl">
        <div className="sm:p-8 ">
          <img
            src="/images/quoteCalculator/person-studying-online.png"
            className="h-1/4 w-1/2"
          ></img>
          <p> We're thrilled you want to learn with Skillify</p>
          <p> Complete our brief questionnaire to receive a quote.</p>
          <button>Start</button>
          <p>
            Due to the personalized nature of our program, please note that the
            prices generated are an estimate.
          </p>
        </div>
      </div>
    </div>
  );
}

Quote.getLayout = function getLayout(page) {
  return <div className=" theme-default">{page}</div>;
};
