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

const EmailCapture = () => {
  return (
    <div>
      <div className="bg-email-capture bg-charmander bg-blend-multiply bg-no-repeat sm:p-40 h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="bg-white rounded-2xl p-16 w-full grid grid-cols-1 sm:grid-cols-2">
            <div className="sm:text-center lg:text-left mb-2 col-span-2">
              <h1 className="tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl">
                <span className="">Get your </span>{" "}
                <span className=" text-charmander">personalized</span>{" "}
                <p className="block text-gray-900">learning roadmap.</p>{" "}
              </h1>
            </div>

            <div className="gap-4 col-span-2 sm:col-span-1">
              <div>
                <input
                  id="bootcamper"
                  type="text"
                  autoComplete="off"
                  className={`text-left p-4 border mt-2 rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md text-charmander placeholder-charmander w-full`}
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
                  className={`text-left p-4 mt-2 md:ml-6 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md text-charmander placeholder-charmander w-full`}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="mt-8 col-span-2">
              <input
                id="bootcamper"
                type="text"
                autoComplete="off"
                className={`text-left p-4 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md text-charmander placeholder-charmander w-full `}
                placeholder="Enter your email address"
              />
            </div>
            <div className="mt-16 col-span-2 flex justify-center">
              <div className="sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md">
                  <a
                    href="/courses"
                    className="w-full p-4 flex items-center justify-center text-base font-medium rounded-md text-white bg-charmander hover:bg-yellow-700 md:text-lg "
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 p-12 sm:p-8">
            <p className="text-white sm:text-5xl text-3xl">
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
