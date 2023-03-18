import React from "react";

export default function PremiumFeatures() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row space-x-4 md:p-8 p-2 justify-center">
        <img src="/images/freemium/circleLock.svg" />
        <h1 className="md:text-3xl text-md font-bold text-white">
          Premium Skillify Features
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4 items-start w-full md:max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-2 md:space-y-6">
          <div className="bg-white rounded-full md:p-4 p-1 md:w-3/4 w-1/4">
            <img className="" src="/images/freemium/buildRealProjects.svg" />
          </div>
          <p className="text-charmander md:text-xl text-md font-bold">
            Build Real Projects
          </p>
          <p className="text-white text-center md:text-left md:block hidden">
            You will build real products to add to your portfolio and resume,
            and work on an engineering team with product owners and designers.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 md:space-y-6">
          <div className="bg-white rounded-full md:p-4 p-1 md:w-3/4 w-1/4">
            <img className="" src="/images/freemium/communityOfLearners.svg" />
          </div>
          <p className="text-charmander md:text-xl text-md font-bold">
            Community of Learners
          </p>
          <p className="text-white text-center md:text-left md:block hidden">
            Join a cohort-based course to learn with peers and keep each other
            accountable.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 md:space-y-6">
          <div className="bg-white rounded-full md:p-4 p-1 md:w-3/4 w-1/4">
            <img className="" src="/images/freemium/industryExperts.svg" />
          </div>
          <p className="text-charmander md:text-xl text-md font-bold">
            Industry Experts
          </p>
          <p className="text-white text-center md:text-left md:block hidden">
            Learn from the best with our coaches who are experts in the field.
          </p>
        </div>
      </div>
    </div>
  );
}
