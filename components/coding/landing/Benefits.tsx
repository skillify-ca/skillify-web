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
  image: React.ReactNode;
  title: string;
  description: string;
}
const Benefit = ({ image, title, description }: BenefitProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-24 h-24 bg-white rounded-full place-self-center">
        {image}
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
        Grow without limits
      </h1>
      <div className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-3">
        <Benefit
          image={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 h-24 p-4 text-charmander"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
          }
          title="Expert Mentors"
          description="Get tailored coaching from our industry experts. Our trainers walk alongside you to help you confidently take the next step."
        />
        <Benefit
          image={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 h-24 p-4 text-charmander"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z" />
              <path
                fillRule="evenodd"
                d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z"
                clipRule="evenodd"
              />
            </svg>
          }
          title="Job Search Support"
          description="We will help you get hired with access to resume critiques, mock coding interviews as well as exclusive internship opportunities."
        />

        <Benefit
          image={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 h-24 p-4 text-charmander"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          }
          title="Community of Learners"
          description="Join a cohort-based course to learn with peers and keep each other
            accountable."
        />
      </div>
    </div>
  );
};

export default Benefits;
