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
      <div className="grid grid-cols-1 p-4 sm:m-8 sm:p-8 sm:rounded-md sm:grid-cols-2 bg-murkrow">
        <p className="mb-4 text-xl text-charmander">
          Universities and bootcamps leave you in debt and unprepared for
          finding a real job. With our project-based courses, you can learn the
          fundamentals of coding and get hired.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row ">
          <input
            id="bootcamper"
            type="text"
            autoComplete="off"
            className={`text-left rounded-lg p-2 sm:mb-0 mb-4 border shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md text-charmander placeholder-yellow-700 sm:w-80 w-full `}
            placeholder="Email"
          />

          <div className="flex items-center justify-center p-4 text-center text-white rounded-md shadow sm:w-36 bg-charmander hover:bg-yellow-700 ">
            <Link href="/studentPortal/intro">Enroll Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeBanner;
