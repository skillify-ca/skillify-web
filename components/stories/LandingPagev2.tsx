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
      </div>
      <div className="bg-gray-900 text-white pt-6">
        <div className="grid grid-cols-12 gap-x-36">
          <div></div>
          <div className="col-span-2">
            <h1 className="text-2xl">About us</h1>
            <ol>
              <li>
                <a className="hover:text-yellow-500">Courses</a>
              </li>
              <li>
                <a className="hover:text-yellow-500">Mission</a>
              </li>
            </ol>
          </div>
          <div className="col-span-2">
            <h1 className="text-2xl">Resources</h1>
            <ol>
              <li>
                <a className="hover:text-yellow-500">Link</a>
              </li>
              <li>
                <a className="hover:text-yellow-500">Link</a>
              </li>
              <li>
                <a className="hover:text-yellow-500">Link</a>
              </li>
              <li>
                <a className="hover:text-yellow-500"> Link</a>
              </li>
            </ol>
          </div>
          <div className="col-span-2">
            <h1 className="text-2xl">Community</h1>
            <ol>
              <li>
                <a className="hover:text-yellow-500">Slack</a>
              </li>
            </ol>
          </div>
          <div>
            <h1 className="text-2xl">Languages</h1>
            <ol>
              <li>
                <a className="hover:text-yellow-500">HTML</a>
              </li>
              <li>
                <a className="hover:text-yellow-500">CSS</a>
              </li>
              <li>
                <a className="hover:text-yellow-500">Javascript</a>
              </li>
              <li>
                <a className="hover:text-yellow-500">React</a>
              </li>
            </ol>
          </div>
        </div>
        <div className="w-1/3 flex flex-row justify-around mt-8">
          <div>Legal</div>
          <div>Privacy Policy</div>
          <div> Login</div>
        </div>
        <div className="w-11/12 flex flex-row justify-between mt-3 bg-yellow-600 p-3">
          <div> © 2022 All rights reserved. </div>
          <div className="gap-x-2 flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPagev2;
