import React from "react";

export default function PremiumFeatures() {
  return (
    <div>
      <div className="flex flex-row space-x-4 p-8 justify-center">
        <img src="/images/freemium/circleLock.svg" />
        <h1 className="text-3xl font-bold text-white">
          Premium Skillify Features
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-8 items-start">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="bg-white rounded-full p-4 h-48 w-48">
            <img className="" src="/images/freemium/buildRealProjects.svg" />
          </div>
          <p className="text-charmander text-xl font-bold">
            Build Real Projects
          </p>
          <p className="text-white">
            You will build real products to add to your portfolio and resume,
            and work on an engineering team with product owners and designers.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="bg-white rounded-full p-4 h-48 w-48">
            <img className="" src="/images/freemium/communityOfLearners.svg" />
          </div>
          <p className="text-charmander text-xl font-bold">
            Community of Learners
          </p>
          <p className="text-white">
            Join a cohort-based course to learn with peers and keep each other
            accountable.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="bg-white rounded-full p-4 h-48 w-48">
            <img className="" src="/images/freemium/industryExperts.svg" />
          </div>
          <p className="text-charmander text-xl font-bold">Industry Experts</p>
          <p className="text-white">
            Learn from the best with our coaches who are experts in the field.
          </p>
        </div>
      </div>
    </div>
  );
}
