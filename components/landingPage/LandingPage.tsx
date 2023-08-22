import { BenefitData } from "./Benefits";
import Credentials from "./Credentials";
import FAQ from "./FAQ";
import Hero, { HighlightableText } from "./Hero";
import StudentProjects from "./StudentProjects";
import SubscribeBanner from "./SubscribeBanner";
import TermsAndConditions from "./TermsAndConditions";
import TestimonialSect from "./TestimonialSect";
import WhatYouGet from "./WhatYouGet";
import WhoItsFor from "./WhoItsFor";

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
        <Hero headerText={headerText} description={description} />
        <WhoItsFor />
        <Credentials headerText={credentialsText} />
        <WhatYouGet />
        <StudentProjects />
        <TestimonialSect />
        <FAQ />
        <SubscribeBanner />
      </div>
      <TermsAndConditions />
    </div>
  );
}
