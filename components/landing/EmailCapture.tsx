import Link from "next/link";
import React from "react";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import ContactForms from "../ContactForms";
import Testimonial, { TestimonialProps } from "../landing/Testimonial";
import { Button } from "../ui/Button";

const EmailCapture = () => {
  return (
    <div>
      <div className="bg-email-capture bg-primary bg-blend-multiply bg-no-repeat">
        <div className="grid grid-cols-1 sm:grid-cols-2 m-4">
          <div className="bg-white rounded-2xl p-16 w-full my-40 grid grid-cols-1 sm:grid-cols-2">
            <div className="sm:text-center lg:text-left mb-2 col-span-2">
              <h1 className="tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl">
                <span className="">Get your </span>{" "}
                <span className=" text-primary">personalized</span>{" "}
                <p className="block text-gray-900">learning roadmap.</p>{" "}
              </h1>
            </div>

            <div className="gap-4 col-span-2 sm:col-span-1">
              <div>
                <input
                  id="bootcamper"
                  type="text"
                  autoComplete="off"
                  className={`text-left p-2 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md text-primary placeholder-primary w-full`}
                  placeholder="First Name"
                />
              </div>
            </div>
            <div>
              <div>
                <input
                  id="bootcamper"
                  type="text"
                  autoComplete="off"
                  className={`text-left p-2 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md text-primary placeholder-primary w-full`}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="mt-2 col-span-2">
              <input
                id="bootcamper"
                type="text"
                autoComplete="off"
                className={`text-left p-2 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md text-primary placeholder-primary w-full `}
                placeholder="Enter your email address"
              />
            </div>
            <div className="mt-2 col-span-2 flex justify-center">
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/courses"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-yellow-700 md:py-4 md:text-lg md:px-10"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="place-self-center p-5">
            <p className="text-white sm:text-5xl text-3xl px-10 align-middle">
              {" "}
              With free coding, design, and business courses, more people can
              get the skills they need to get hired fast.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCapture;
