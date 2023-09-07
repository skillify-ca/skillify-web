import React from "react";

type Feature = {
  title: string;
  description: string | string[];
};

export default function WhatYouGet() {
  const features: Feature[] = [
    {
      title: "Access To World Class Tech Professionals",
      description:
        "Our incredible Coaching Team of Accountability Coaches & Coding Experts trained directly by me personally who have mastered the entire Skillify Success Path...",
    },
    {
      title: "Comprehensive Program Onboarding",
      description:
        "Coding Coaching Profile Assessment, Plus a Hand-Picked Coach for you based on your specific career goals, Getting Started video orientation, and 1:1 Kick off Call to get you moving forward.",
    },
    {
      title: "Direct Feedback and Guidance",
      description: [
        "Private community group with lots of personal attention",
        "Get real-time answers to your questions by our team of Coding Experts & Coaches",
        "Model best industry practices and access proven strategies to get fast results - including Skillify exclusive frameworks",
      ],
    },
    {
      title: "1:1 Accountability Coaching",
      description: [
        "Private monthly ongoing 1-on-1 calls",
        "Work directly with your Coach to create goals, develop a clear plan to achieve them, and work through any obstacles",
        "Accelerate your success with a dedicated Coach that helps measure your progress and holds you accountable",
      ],
    },
    {
      title: "Success Path Group Coaching, Training & Networking",
      description: [
        "Success Path Small Group Calls: work with other members at a similar stage in the success path to benefit from more time with a Coach in a smaller group setting",
        "Group Training Calls are balanced mix of Teaching + Implementation + Q&A each month, led by me, our coaching team, and hand-picked industry-leading experts.",
      ],
    },
    {
      title: "FULL Library of Skillify Digital Trainings",
      description:
        "Access to ALL of our digital training including web development, artifical intelligence, VR/AR, cyber security, game development, blockchain development, algorithms, interviewing & MORE!...",
    },
    {
      title: "FREE Skillify Academy Events",
      description:
        "Get FREE access to our Skillify Academy Events that cost $100 - $500 to attend! Including micro-trainings for UX/UI Design, Agile Methodology, Product Management and Digital Marketing",
    },
    {
      title: "Annual Live Virtual 2-3 Day Hackathons",
      description:
        "Get access to Cutting Edge Training from Vithushan, the Skillify Faculty, and special subject matter experts on the most impactful practices that are used by Skillify and our most successful students. These events give you the chance to make HUGE progress in just a few days with guided learning, implementation sessions, and real time direct support",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-4 max-w-7xl ">
      <h2 className="w-full px-2 my-8 text-3xl font-bold text-center sm:p-4">
        Everything You Get as a Member of the Skillify Coding Academy
      </h2>
      <FeaturesSection
        features={features.slice(0, 2)}
        image="/images/landingPage/new.svg"
      />

      <FeaturesSection
        features={features.slice(2, 4)}
        image="/images/landingPage/new1.svg"
        isReversed={true}
      />

      <FeaturesSection
        features={features.slice(4, 6)}
        image="/images/landingPage/new2.svg"
      />
      <FeaturesSection
        features={features.slice(6, 8)}
        isReversed={true}
        image="/images/landingPage/new3.svg"
      />
      {/* <BonusSection /> */}
    </div>
  );
}

type FeaturesSectionProps = {
  features: Feature[];
  image: string;
  isReversed?: boolean;
};
function FeaturesSection({
  features,
  image,
  isReversed,
}: FeaturesSectionProps) {
  return (
    <div
      className={`flex flex-col ${
        isReversed ? "flex-col" : "flex-col-reverse"
      } md:grid md:grid-cols-2  w-full max-w-7xl place-items-center`}
    >
      <div className="flex flex-col w-full p-4 m-4 text-white max-w-7xl bg-murkrow rounded-xl">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col m-4">
            <p className="text-xl font-bold ">{item.title}</p>
            
            <Description description={item.description} />
            {/* <p className="mb-2 text-xl ">{item.description}</p> */}
          </div>
        ))}
      </div>
      <div className={`${isReversed ? "order-first" : ""} p-4`}>
        <img
          className={`transition-all transform hover:scale-110 `}
          src={image}
        />
      </div>
    </div>
  );
}

type DescriptionProps = {
  description: string | string[];
};

const Description = ({ description }: DescriptionProps) => {
  if (Array.isArray(description)) {
    return (
      <div className="space-y-2">
        <ul className="ml-4 list-disc">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  return <ul className="mb-2 text-xl">{description}</ul>;
};
