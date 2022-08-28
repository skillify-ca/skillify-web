import Link from "next/link";
import React from "react";
import Benefits, { BenefitData } from "../../coding/landing/Benefits";
import EmailCapture from "../../coding/landing/EmailCapture";
import TestimonialSect from "../../coding/landing/TestimonialSect";
import SubscribeBanner from "../../coding/landing/SubscribeBanner";
import LandingFooter from "../../coding/landing/LandingFooter";
import Credentials from "../../coding/landing/Credentials";
import Hero, { HighlightableText } from "../../coding/landing/Hero";

export type LandingPageCopy = {
  headerText: HighlightableText[];
  description: string;
  bannerText: string;
  credentialsText: string;
  benefitsText: string;
  benefits: BenefitData[];
  emailCaptureText: HighlightableText[];
  emailCaptureDescription: string;
};
export default function LandingPage({
  headerText,
  description,
  bannerText,
  credentialsText,
  benefitsText,
  benefits,
  emailCaptureText,
}: LandingPageCopy) {
  return (
    <div>
      <div className="flex flex-col w-full bg-gray-100">
        <Hero headerText={headerText} description={description} />
        <Benefits headerText={benefitsText} benefits={benefits} />
        <Credentials headerText={credentialsText} />
        <EmailCapture headerText={emailCaptureText} description={""} />
        <TestimonialSect />
        <SubscribeBanner bannerText={bannerText} />
      </div>
      <LandingFooter />
    </div>
  );
}
