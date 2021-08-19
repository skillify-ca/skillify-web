import Link from "next/link";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import practiceTrackerImg from "../../public/images/landingPage/practiceTracker.png";
import Image from "next/dist/client/image";

const LandingPagev2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  const features = [
    {
      name: "Practice Tracker",
      description:
        "Practice skills from our infinite set of questions. Unlock badges to prove",
      icon: GlobeAltIcon,
    },
    {
      name: "Multiplayer Games",
      description:
        "Connect with friends online with our competitive and coopeartive games.",
      icon: ScaleIcon,
    },
  ];
  const features2 = [
    {
      name: "Interactive Lessons",
      description:
        "Use our videos, puzzles and lessons to introduce new math concepts to your child.",
      icon: AnnotationIcon,
    },
    {
      name: "Weekly Progress Reports",
      description:
        "Stay in the know with weekly reports sent straight to your inbox to your inbox.",
      icon: LightningBoltIcon,
    },
  ];

  return (
    <div>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              K-12 Math Activities and Quizzes
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Motivate your child to become a self-learner
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Help your child become confident with numbers with content aligned
              to the Canadian curriculum
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
              <Image src={practiceTrackerImg} alt="Practice Tracker" />
            </dl>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-8 w-full">
          <div
            id="steps"
            className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between"
          >
            <div id="step1" className="bg-white rounded-lg p-8 shadow-lg">
              {/* <p className="font-bold"></p> */}
              <p className="font-bold  text-lg mb-4">
                Step 1: Assess your child
              </p>
              <p>
                During this quick assessment, your child will answer 12
                questions from the Ontario curriculum.
              </p>
              <div className="justify-center items-center bg-white p-8">
                <div className="">
                  <Slider {...settings}>
                    <div className="justify-center items-center outline-none">
                      <img src="/images/wordProblem1.png"></img>
                    </div>
                    <div className="justify-center items-center outline-none">
                      <img src="/images/equalGroups.png"></img>
                    </div>
                    <div className="justify-center items-center outline-none">
                      <img src="/images/multiArrays.png"></img>
                    </div>
                    <div className="justify-center items-center outline-none">
                      <img src="/images/trueFalse.png"></img>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
            <div id="step2" className="bg-white rounded-lg p-8 shadow-lg">
              {/* <p className="font-bold"></p> */}
              <p className="font-bold text-lg mb-4">
                Step 2: Support your child's independence{" "}
              </p>
              <p>
                Your child can select from various modes and activities aligned
                with the Ontario curriculum to help them learn, practice, and
                self-assess.
              </p>
              <div className="flex flex-col justify-center items-center bg-white p-8 ">
                <div className="mt-12">
                  <img src="/images/step2.png" />
                </div>
              </div>
            </div>
            <div id="step3" className="bg-white rounded-lg p-8 shadow-lg">
              {/* <p className="font-bold"></p> */}
              <p className="font-bold  text-lg mb-4">
                Step 3: Get your personalized reports
              </p>
              <p>
                Your customized Math Champ report will give you weekly insights
                and the supplemental resources you need for your child.
              </p>
              <div className="flex flex-col justify-center items-center bg-white mt-8">
                <div className="sm:w-full items-center">
                  <img
                    src="/diagnostic/diagnostic-sample-report.gif"
                    className="sm:rounded-r-lg rounded-tr-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPagev2;
