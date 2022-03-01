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

const SubscribeBanner = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 bg-secondary-third my-8 p-4 sm:p-16 mx-8">
        <p className="text-primary font-medium text-4xl p-4">
          Don't believe your college's marketing? In one project-based class you
          can learn the fundamentals of coding.
        </p>

        <div className=" grid grid-cols-4 items-center gap-4">
          <div className="items-center rounded-lg col-span-3 p-4">
            <input
              id="bootcamper"
              type="text"
              autoComplete="off"
              className={`text-left p-2 mb-4 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md text-primary placeholder-yellow-700 w-full `}
              placeholder="Email"
            />
          </div>
          <div className="sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="/courses"
                className="w-full flex items-center justify-center p-4 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-yellow-700 md:py-2 md:text-lg md:px-10"
              >
                Enroll Now
              </a>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default SubscribeBanner;
