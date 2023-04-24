import router from "next/router";
import React, { useState } from "react";
import LandingNavbar from "../components/landingPage/LandingNavbar";
import PlansCard from "../components/studentPortal/freemium/PlansCard";
import SignInPage from "../components/welcomePage/SignInPage";

const Plans = ({ plansCardData }) => {
  const [showSignInPage, setShowSignInPage] = useState(false);

  const handlePremium = () => {
    router.push(plansCardData[1].onClick);
  };

  const handleTrial = () => {
    setShowSignInPage(true);
  };

  return (
    <div>
      {showSignInPage ? (
        <SignInPage />
      ) : (
        <div>
          <LandingNavbar />
          <div className="flex flex-col items-center justify-center space-y-2 mb-8">
            <h1 className="text-charmander text-3xl font-bold text-center p-4">
              Pick the Plan That's Right For You
            </h1>
            <p>Reserve your spot today!</p>
          </div>
          <div className="flex flex-wrap justify-center align-items-stretch md:space-x-10 space-x-0">
            {plansCardData.map((card) => (
              <PlansCard
                key={card.title}
                title={card.title}
                description={card.description}
                price={card.price}
                buttonLabel={card.buttonLabel}
                onClick={
                  card.onClick === "/sign-up" ? handleTrial : handlePremium
                }
                planRowData={card.planRowData}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const plansCardData = [
    {
      title: "Free 14-day Trial",
      description: "No credit card required",
      price: "$0",
      buttonLabel: "Sign Up",
      onClick: "/sign-up",
      planRowData: [
        {
          icon: "../../images/freemium/greenCheck.svg",
          description: "Two weeks access to our Coding Basics course",
        },
        {
          icon: "../../images/freemium/greenCheck.svg",
          description:
            "Two weeks access to the first section of our Web Development course",
        },
        {
          icon: "../../images/freemium/greenCheck.svg",
          description: "Receive personalized feedback on one assignment",
        },
        {
          icon: "../../images/freemium/redX.svg",
          description: "1:1 mentorship and small group coaching",
        },
        {
          icon: "../../images/freemium/redX.svg",
          description: "Mentorship from our experienced coaches",
        },
        {
          icon: "../../images/freemium/redX.svg",
          description: "Job hunting support and career guidance",
        },
      ],
    },
    {
      title: "Premium",
      description: "Contact us for pricing",
      price: "Custom",
      buttonLabel: "Book a Call",
      onClick: "https://joinskillify.com/call",
      planRowData: [
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
          description: "Receive personalized feedback for assignments",
        },
        {
          icon: "../../images/freemium/greenCheck.svg",
          description:
            "Build digital products under the leadership of ex-Spotify engineers",
        },
        {
          icon: "../../images/freemium/greenCheck.svg",
          description: "Mentorship from our experienced coaches",
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
      plansCardData: plansCardData,
    },
  };
}

export default Plans;

Plans.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
