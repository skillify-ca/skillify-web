import React from "react";
import { BenefitData } from "./Benefits";
import { HighlightableText } from "./Hero";

export type LandingPageCopy = {
  headerText: HighlightableText[];
  description: string;
  credentialsText: string;
  benefitsText: string;
  benefits: BenefitData[];
  emailCaptureText: HighlightableText[];
  emailCaptureDescription: string;
};
export default function LandingPage({
  headerText,
  description,
  credentialsText,
}: LandingPageCopy) {
  return (
    <div>
      <div className="flex flex-col items-center w-full bg-gray-100">
        {/* <Hero headerText={headerText} description={description} /> */}
        {/* <WhoItsFor /> */}
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
