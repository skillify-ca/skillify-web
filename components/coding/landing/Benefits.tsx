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

const Benefits = () => {
  return (
    <div>
      <div className="p-10 bg-murkrow">
        <h1 className="text-white text-7xl text-center my-3 p-5"> Benefits</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 justify-center gap-4 sm:p-24">
          <div className="flex flex-col gap-4">
            <div className="h-100 w-100 rounded-full bg-white place-self-center">
              <img src="/images/landingPage/code.svg" />
            </div>
            <p className="text-3xl text-charmander text-center">
              Build Real Projects
            </p>
            <p className="w-1/2 place-self-center text-white text-center">
              You will build real products to add to your portfolio or resume.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-100 w-100 rounded-full bg-white place-self-center">
              <img src="/images/landingPage/community.svg" />
            </div>
            <p className="text-3xl text-charmander text-center">
              Community of Learners
            </p>
            <p className=" w-1/2 place-self-center text-white text-center">
              Join a cohort-based course to learn with peers and keep each other
              accountable.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-100 w-100 rounded-full bg-white place-self-center">
              <img src="/images/landingPage/experts.svg" />
            </div>
            <p className="text-3xl text-charmander text-center">
              Industry Experts
            </p>
            <p className="w-2/5 place-self-center text-white text-center">
              Learn from the best with our expert mentors
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
