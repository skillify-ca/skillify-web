import React from "react";
import Benefit from "./Benefit";

export type BenefitData = {
  title: string;
  descripton: string;
};

type BenefitsProps = {
  headerText: string;
  benefits: BenefitData[];
};

const Benefits = ({ headerText, benefits }: BenefitsProps) => {
  return (
    <div className="p-4 sm:p-16 bg-murkrow">
      <h1 className="mb-4 text-5xl font-bold text-center text-white sm:mb-16">
        {" "}
        {headerText}
      </h1>
      <div className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-3">
        {benefits.map((benefitData) => (
          <Benefit
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-24 h-24 p-4 text-charmander"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            }
            title={benefitData.title}
            description={benefitData.descripton}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
