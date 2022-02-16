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
        <div className="bg-blue-900">
          <h1 className="text-white text-7xl text-center ml-32 my-3">
            {" "}
            Benefits
          </h1>
          <div className="flex flex-col md:flex-row justify-around ">
            <div className="flex flex-col">
              <div className="h-100 w-100 rounded-full bg-white place-self-center">
                <img src="/images/landingpage/code.svg" />
              </div>
              <p className="text-3xl text-yellow-600 place-self-center">
                Build Real Projects
              </p>
              <p className="place-self-center text-white w-1/2 text-center">
                You will build real products to add to your portfolio or resume.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="h-100 w-100 rounded-full bg-white place-self-center">
                <img src="/images/landingpage/community.svg" />
              </div>
              <p className="text-3xl text-yellow-600 place-self-center">
                Community of Learners
              </p>
              <p className="place-self-center text-white w-1/2 text-center">
                Join a cohort-based course to learn with peers and keep each
                other accountable.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="h-100 w-100 rounded-full bg-white place-self-center">
                <img src="/images/landingpage/experts.svg" />
              </div>
              <p className="text-3xl text-yellow-600 place-self-center">
                Industry Experts
              </p>
              <p className="place-self-center text-white w-1/2 text-center">
                Learn from the best with our expert mentors
              </p>
            </div>
          </div>
        </div>

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
