import React, { useState } from "react";
import { Button } from "../../ui/Button";

function HeroHome({ title, description }) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        {/* Hero content */}
        <div className="pt-16 pb-12 md:pt-16 md:pb-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-4 text-5xl font-extrabold tracking-tighter md:text-6xl leading-tighter"
              data-aos="zoom-y-out"
            >
              Learn{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
                {title}
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="mb-8 text-xl text-gray-600"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                {description}
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="w-full p-4 mb-4 text-white rounded-md btn sm:w-auto sm:mb-0"
                    href="mailto:admin@vithushan.ca?subject=Learn to Code"
                  >
                    <Button backgroundColor="blue" label="Pre-order Now" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div
              className="relative flex justify-center mb-4"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <div className="flex flex-col justify-center">
                <img
                  className="mx-auto"
                  src={
                    "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                  }
                  width="768"
                  height="432"
                  alt="Hero"
                />
                <svg
                  className="absolute inset-0 h-auto max-w-full mx-auto md:max-w-none"
                  width="768"
                  height="432"
                  viewBox="0 0 768 432"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g fill="none" fillRule="evenodd">
                    <circle
                      fillOpacity=".04"
                      fill="url(#hero-ill-a)"
                      cx="384"
                      cy="216"
                      r="128"
                    />
                    <circle
                      fillOpacity=".16"
                      fill="url(#hero-ill-b)"
                      cx="384"
                      cy="216"
                      r="96"
                    />
                    <g fillRule="nonzero">
                      <use fill="#000" xlinkHref="#hero-ill-d" />
                      <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                    </g>
                  </g>
                </svg>
              </div>
              <button
                className="absolute flex items-center p-4 font-medium transform -translate-y-1/2 bg-white rounded-full shadow-lg top-full group"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setVideoModalOpen(true);
                }}
                aria-controls="modal"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-400 fill-current group-hover:text-blue-600"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className="ml-3">Watch the full video (2 min)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
