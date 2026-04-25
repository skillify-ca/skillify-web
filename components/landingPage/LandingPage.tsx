import React from "react";
import AudienceSelectSection from "./AudienceSelectSection";
import { BenefitData } from "./Benefits";
import BrandHero from "./BrandHero";
import Credentials from "./Credentials";
import { HighlightableText } from "./Hero";
import TestimonialSect from "./TestimonialSect";
import TrustBar from "./TrustBar";

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
  credentialsText,
}: LandingPageCopy) {
  const heroImageUrl = "/images/landingPage/tutoring-hero.png";

  return (
    <div>
      <div className="flex flex-col items-center w-full bg-gray-100">
        {/* <Hero headerText={headerText} description={description} heroImageUrl={heroImageUrl} /> */}
        <BrandHero />
        <AudienceSelectSection />
        <TrustBar />
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
