import Link from "next/link";
import React from "react";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import ContactForms from "../ContactForms";
import Testimonial, { TestimonialProps } from "./Testimonial";
import { Button } from "../ui/Button";

const LandingFooter = () => {
  return (
    <div className="bg-gray-900 text-white border-t-4 border-primary">
      <div className="grid sm:grid-cols-12 grid-cols-1 justify-between justify-items-start p-4">
        <div className="sm:col-span-2">Legal</div>
        <div className="sm:col-span-2">Privacy Policy</div>
        <div className="sm:col-span-2">Login</div>
        <div className="sm:col-span-6 justify-self-end">
          <div> © 2022 All rights reserved. </div>
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
