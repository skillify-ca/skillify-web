import React from "react";
import { BenefitData } from "./Benefits";
import Hero, { HighlightableText } from "./Hero";
import WhoItsFor from "./WhoItsFor";

export type LandingPageCopy = {
  headerText: HighlightableText[];
  description: string;
  credentialsText: string;
  benefitsText: string;
  benefits: BenefitData[];
  emailCaptureText: HighlightableText[];
  emailCaptureDescription: string;
  copyType: "tutoring" | "coaching" | "lifeCoaching";
};
export default function LandingPage({
  headerText,
  description,
  copyType,
}: LandingPageCopy) {
  return (
    <div>
      <div className="flex flex-col items-center w-full bg-gray-100">
        <Hero headerText={headerText} description={description} />
        <WhoItsFor copyType={copyType} />
        {/* <Credentials headerText={credentialsText} /> */}
        {/* <WhatYouGet /> */}
        {/* <TestimonialSect /> */}
        {/* <FAQ /> */}
        {/* <SubscribeBanner /> */}
      </div>
      {/* <TermsAndConditions /> */}
    </div>
  );
}
