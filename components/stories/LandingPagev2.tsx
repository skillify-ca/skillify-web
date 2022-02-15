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

const LandingPagev2 = () => {
  const testimonialData: TestimonialProps[] = [
    {
      text: "Skillify has been an excellent axperience! It allowed me to reskill and learn modern coding frameworks that makes me competitive to get hired in software engineering.",
    },
    {
      text: "I joined Skillify and learned so much about front end web development that I was able to get interviews from big tech companies and start-ups. I feel more confident getting interviews after taking the Skillify course",
    },
  ];
  return (
    <div>
      <div className="flex flex-col w-full bg-gray-300">
        <div>Navigation</div>
        <div>Hero</div>
        <div>Features</div>
        <div>Email Capture</div>
        <div>
          Testimonials
          <div className="flex gap-4">
            {testimonialData.map((it) => (
              <Testimonial text={it.text} />
            ))}
          </div>
        </div>
        <div>Email Capture 2</div>
        <div> Footer</div>
      </div>
    </div>
  );
};

export default LandingPagev2;
