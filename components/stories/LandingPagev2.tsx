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

const LandingPagev2 = () => {
  const testimonialData: TestimonialProps[] = [
    {
      studentName: "Mayu Ganesathas",
      img: "/images/landingPage/mayu.png",
      text: "“Skillify has been an excellent axperience! It allowed me to reskill and learn modern coding frameworks that makes me competitive to get hired in software engineering.”",
    },
    {
      studentName: "Ajevan Mahadaya",
      img: "/images/landingPage/ajevan.png",
      text: "“I joined Skillify and learned so much about front end web development that I was able to get interviews from big tech companies and start-ups. I feel more confident getting interviews after taking the Skillify course”",
    },
    {
      studentName: "Mithulan ",
      img: "/images/landingPage/goldMedal.svg",
      text: "The team at Skillify did an excellent job in this course to facilitate the fundamentals and give each student the confidence to succeed in the field of coding. Thank you to Vithushan and his team for a wonderful experience.",
    },
  ];
  return (
    <div>
      <div className="flex flex-col w-full bg-gray-100">
        <div className="bg-secondary-third pb-5">
          <h1 className="text-white text-7xl text-center my-3"> Benefits</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 justify-center gap-4">
            <div className="flex flex-col gap-4">
              <div className="h-100 w-100 rounded-full bg-white place-self-center">
                <img src="/images/landingPage/code.svg" />
              </div>
              <p className="text-3xl text-primary place-self-center">
                Build Real Projects
              </p>
              <p className="place-self-center text-white text-center">
                You will build real products to add to your portfolio or resume.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="h-100 w-100 rounded-full bg-white place-self-center">
                <img src="/images/landingPage/community.svg" />
              </div>
              <p className="text-3xl text-primary place-self-center">
                Community of Learners
              </p>
              <p className="place-self-center text-white text-center">
                Join a cohort-based course to learn with peers and keep each
                other accountable.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="h-100 w-100 rounded-full bg-white place-self-center">
                <img src="/images/landingPage/experts.svg" />
              </div>
              <p className="text-3xl text-primary place-self-center">
                Industry Experts
              </p>
              <p className="place-self-center text-white w-1/2 text-center">
                Learn from the best with our expert mentors
              </p>
            </div>
          </div>
        </div>
        <div className="bg-email-capture bg-primary bg-blend-multiply bg-no-repeat">
          <div className="grid grid-cols-1 sm:grid-cols-2 m-4">
            <div className="bg-white rounded-2xl p-8 w-full my-40 grid grid-cols-1 sm:grid-cols-2">
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
        <div className="flex justify-center flex-col p-4">
          <div className="">
            <p className="text-3xl font-semibold "> Testimonials</p>
            <p className=" text-xl my-8">
              {" "}
              Read what our previous students have to say about their experience
              at Skillify.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {testimonialData.map((it) => (
                <div>
                  <Testimonial
                    text={it.text}
                    img={it.img}
                    studentName={it.studentName}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-secondary-third my-4">
          <div className="p-4">
            <p className="text-primary font-medium text-4xl">
              Don't believe your college's marketing? In one project-based class
              you can learn the fundamentals of coding.
            </p>
          </div>

          <div className="items-center grid sm:grid-cols-2 grid-cols-1 gap-4 p-4">
            <div className="bg-white flex sm:flex-row items-center rounded-lg sm:cols-span-2 sm: col-span-1">
              <input
                id="bootcamper"
                type="text"
                autoComplete="off"
                className={`text-left p-2 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md text-primary placeholder-yellow-700 w-full sm:w-96`}
                placeholder="Email"
              />
            </div>
            <div>
              <div className="sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/courses"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-yellow-700 md:py-2 md:text-lg md:px-10"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white pt-6 border-t-4 border-primary">
        <div className="grid grid-cols-6 sm:grid-cols-12 p-8">
          <div className="col-span-3">
            <h1 className="text-2xl">About us</h1>
            <ol>
              <li>
                <a
                  className="hover:text-yellow-500"
                  href="https://www.skillify.ca/courses"
                >
                  Courses
                </a>
              </li>
              <li>
                <a className="hover:text-yellow-500">Mission</a>
              </li>
            </ol>
          </div>
          <div className="col-span-3">
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
          <div className="col-span-3">
            <h1 className="text-2xl">Community</h1>
            <ol>
              <li>
                <a className="hover:text-yellow-500">Slack</a>
              </li>
            </ol>
          </div>
          <div className="col-span-3">
            <h1 className="text-2xl">Languages</h1>
            <ol>
              <li>
                <a
                  className="hover:text-yellow-500"
                  href="https://www.skillify.ca//course/coding/unit/HTML/1"
                >
                  HTML
                </a>
              </li>
              <li>
                <a
                  className="hover:text-yellow-500"
                  href="https://www.skillify.ca//course/coding/unit/CSS/1"
                >
                  CSS
                </a>
              </li>
              <li>
                <a
                  className="hover:text-yellow-500"
                  href="https://www.skillify.ca//course/coding/unit/Javascript/1"
                >
                  Javascript
                </a>
              </li>
              <li>
                <a
                  className="hover:text-yellow-500"
                  href="https://www.skillify.ca//course/coding/unit/React/1"
                >
                  React
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div className="flex flex-row justify-between px-8 mt-8">
          <div>Legal</div>
          <div>Privacy Policy</div>
          <div> Login</div>
        </div>
        <div className="flex flex-row justify-between pl-8 mt-3 bg-primary p-3">
          <div> © 2022 All rights reserved. </div>
          <div className="gap-x-2 flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
              className="h-6 w-6"
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
              className="h-6 w-6"
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
