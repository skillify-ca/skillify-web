import Link from "next/link";
import React from "react";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import ContactForms from "../ContactForms";

const LandingPagev2 = () => {
  return (
    <div>
      <div className="flex flex-col w-full bg-gray-300">
        <div>Navigation</div>
        <div>Hero</div>
        <div className="bg-blue-900">
          <h1 className="text-white text-7xl text-center ml-32 my-3">
            {" "}
            Benefits
          </h1>
          <div className="flex flex-row justify-around ">
            <div className="flex flex-col">
              <div className="h-100 w-100 rounded-full bg-white place-self-center">
                <img src="/images/landingpage/code.svg" />
              </div>
              <p className="text-3xl text-yellow-600 place-self-center">
                Build Real Projects
              </p>
              <p className="place-self-center text-white w-1/2 align-middle">
                You will build real products to add to your portfolio or resume.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="h-100 w-100 rounded-full bg-white place-self-center">
                <img src="/images/community.svg" />
              </div>
              <p className="text-3xl text-yellow-600 place-self-center">
                Community of Learners
              </p>
              <p className="place-self-center text-white w-1/2 align-middle">
                Join a cohort-based course to learn with peers and keep each
                other accountable.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="h-100 w-100 rounded-full bg-white place-self-center">
                <img src="/images/experts.svg" />
              </div>
              <p className="text-3xl text-yellow-600 place-self-center">
                Industry Experts
              </p>
              <p className="place-self-center text-white w-1/2 align-middle">
                Learn from the best with our expert mentors
              </p>
            </div>
          </div>
        </div>

        <div>Email Capture</div>
        <div>Testimonials</div>
        <div>Email Capture 2</div>
        <div> Footer</div>
      </div>
    </div>
  );
};

export default LandingPagev2;
