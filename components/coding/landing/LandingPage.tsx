import Link from "next/link";
import React from "react";
import Benefits, { BenefitData } from "./Benefits";
import EmailCapture from "./EmailCapture";
import TestimonialSect from "./TestimonialSect";
import SubscribeBanner from "./SubscribeBanner";
import LandingFooter from "./LandingFooter";
import Credentials from "./Credentials";
import Hero, { HighlightableText } from "./Hero";
import WhoItsFor from "./WhoItsFor";
import LeadMagnets from "./LeadMagnets";
import WhatYouGet from "./WhatYouGet";

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
      <div className="flex flex-col w-full bg-gray-100">
        <Hero headerText={headerText} description={description} />
        <Credentials headerText={credentialsText} />
        <WhatYouGet />
        <TestimonialSect />
        <SubscribeBanner />
      </div>
      <LandingFooter />
    </div>
  );
}
