import React from "react";
import LandingNavbar from "../components/landingPage/LandingNavbar";
import PlansCard from "../components/studentPortal/freemium/PlansCard";

export type PlanCard = {
  planName: "freeTrial" | "premium";
  title: string;
  description: string;
  price: string;
  buttonLabel: string;
  planCardRow: Array<{ icon: string; description: string }>;
};

const Plans = (props: { planCardData: PlanCard[] }) => {
  const { planCardData } = props;

  return (
    <div>
      <LandingNavbar />
      <div className="flex flex-col items-center justify-center py-8 space-y-2">
        <h1 className="mt-4 text-4xl font-bold text-center text-charmander">
          Pick the plan that is right for you
        </h1>
        <p className="text-xl font-bold">Reserve your spot today!</p>
      </div>
      <div className="flex flex-wrap justify-center my-16 space-x-0 align-items-stretch md:space-x-10">
        {planCardData.map((card, index) => (
          <div key={card.title} className="mb-16 last:mb-0 sm:mb-0">
            <PlansCard key={index} planCard={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const planCardData: PlanCard[] = [
    {
      planName: "freeTrial",
      title: "Free",
      description: "No credit card required",
      price: "$0",
      buttonLabel: "Start Learning",
      planCardRow: [
        {
          icon: "../../images/freemium/greenCheck.svg",
          description: "Unlimited access to our Coding Basics course",
        },
        {
          icon: "../../images/freemium/greenCheck.svg",
          description:
            "Unlimited access to the first section of our Web Development course",
        },
        {
          icon: "../../images/freemium/greenCheck.svg",
          description:
            "Personalized feedback on ONE website assignment or project",
        },
        {
          icon: "../../images/freemium/redX.svg",
          description:
            "Build digital products under the guidance of ex-Spotify engineers",
        },
        {
          icon: "../../images/freemium/redX.svg",
          description:
            "1-on-1 mentorship, student community and small group coaching",
        },
        {
          icon: "../../images/freemium/redX.svg",
          description: "Job hunting support and career guidance",
        },
      ],
    },
    {
      planName: "premium",
      title: "Premium",
      description: "Contact us to learn more. Limited scholarships available.",
      price: "$2000 / month",
      buttonLabel: "Book a Call",
      planCardRow: [
        {
          icon: "../../images/freemium/greenCheck.svg",
          description: "Unlimited access to our Coding Basics course",
        },
        {
          icon: "../../images/freemium/greenCheck.svg",
          description: "Unlimited access to our Web Development Course",
        },
        {
          icon: "../../images/freemium/greenCheck.svg",
          description: "Personalized feedback for ALL assignments",
        },
        {
          icon: "../../images/freemium/greenCheck.svg",
          description:
            "Build digital products under the guidance of ex-Spotify engineers",
        },
        {
          icon: "../../images/freemium/greenCheck.svg",
          description:
            "1-on-1 mentorship, student community and small group coaching",
        },
        {
          icon: "../../images/freemium/greenCheck.svg",
          description: "Job hunting support and career guidance",
        },
      ],
    },
  ];
  return {
    props: {
      planCardData: planCardData,
    },
  };
}

export default Plans;

Plans.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
