import Link from "next/link";
import React from "react";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
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
        "Practice skills from our infinite set of questions. Prove mastery by unlocking badges.",
      icon: GlobeAltIcon,
    },
    {
      name: "Multiplayer Games",
      description:
        "Connect with friends online with our competitive and coopeartive games.",
      icon: ScaleIcon,
    },
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
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
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
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPagev2;
