import React from "react";
import AudienceSelectSection from "./AudienceSelectSection";
import Credentials from "./Credentials";
import TestimonialSect from "./TestimonialSect";

export default function LandingPage() {
  return (
    <div>
      <div className="flex flex-col items-center w-full bg-gray-100">
        {/* <Hero headerText={headerText} description={description} heroImageUrl={heroImageUrl} /> */}
        <AudienceSelectSection />
        {/* <WhoItsFor copyType={copyType} /> */}
        <Credentials/>
        {/* <WhatYouGet /> */}
        <TestimonialSect />
        {/* <FAQ /> */}
        {/* <SubscribeBanner /> */}
      </div>
      {/* <TermsAndConditions /> */}
    </div>
  );
}
