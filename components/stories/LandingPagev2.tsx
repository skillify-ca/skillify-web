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
        <div>Features</div>
        <div>Email Capture</div>
        <div>Testimonials</div>
        <div>Email Capture 2</div>
        <div> Footer</div>
      </div>
    </div>
  );
};

export default LandingPagev2;
