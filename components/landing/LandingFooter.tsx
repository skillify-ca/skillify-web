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
      <div className="grid grid-cols-10 justify-between pr-36 pl-3 pb-3 pt-14 mt-8 justify-items-start">
        <div className="col-span-2">Legal</div>
        <div className="col-span-2">Privacy Policy</div>
        <div className="col-span-2"> Login</div>
        <div className="col-span-2 justify-self-end">
          <div> © 2022 All rights reserved. </div>
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
