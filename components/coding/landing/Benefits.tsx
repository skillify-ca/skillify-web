import Link from "next/link";
import React from "react";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import ContactForms from "../../ContactForms";
import Testimonial, { TestimonialProps } from "./Testimonial";
import { Button } from "../../ui/Button";

interface BenefitProps {
  image: string;
  title: string;
  description: string;
}
const Benefit = ({ image, title, description }: BenefitProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-24 h-24 bg-white rounded-full place-self-center">
        <img src={image} />
      </div>
      <p className="text-xl font-bold text-center text-charmander">{title}</p>
      <p className="text-center text-white">{description}</p>
    </div>
  );
};
const Benefits = () => {
  return (
    <div className="p-4 sm:p-16 bg-murkrow">
      <h1 className="mb-4 text-5xl font-bold text-center text-white sm:mb-16">
        {" "}
        Benefits
      </h1>
      <div className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-3">
        <Benefit
          image="/images/landingPage/code.svg"
          title="Build Real Projects"
          description="You will build real products to add to your portfolio or resume."
        />
        <Benefit
          image="/images/landingPage/community.svg"
          title="Community of Learners"
          description="Join a cohort-based course to learn with peers and keep each other
            accountable."
        />
        <Benefit
          image="/images/landingPage/experts.svg"
          title="Industry Experts"
          description="Learn from the best with our expert mentors"
        />
      </div>
    </div>
  );
};

export default Benefits;
