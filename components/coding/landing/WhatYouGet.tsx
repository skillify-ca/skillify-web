import BonusSection from "./BonusSection";

type Feature = {
  title: string;
  value: string;
  description: string;
};

export default function WhatYouGet() {
  const features: Feature[] = [
    {
      title: "Access To World Class Tech Professionals",
      value: "$25,000 Value",
      description:
        "Our incredible Coaching Team of Accountability Coaches & Coding Experts trained directly by me personally who have mastered the entire Skillify Success Path...",
    },
    {
      title: "Comprehensive Program Onboarding",
      value: "$1,500 Value",
      description:
        "Coding Coaching Profile Assessment, Plus a Hand-Picked Coach for you based on your specific careeer goals, Getting Started video orientation, and 1:1 Kick off Call to get you moving forward.",
    },
    {
      title: "Direct Feedback and Guidance",
      value: "$5,000 Value",
      description:
        "Private community group with lots of personal attention, Get real-time answers to your questions by our team of Coding Experts & Coaches, Model best industry practices and access proven strategies to get fast results - including Skillify exclusive frameworks",
    },
    {
      title: "1:1 Accountability Coaching",
      value: "$3,000 Value",
      description:
        "Private monthly ongoing 1-on-1 calls, Work directly with your Coach to create goals, develop a clear plan to achieve them, and work through any obstacles, Accelerate your success as your Coach helps you measure and track progress, and keeps you accountable for following through",
    },
    {
      title: "Success Path Group Coaching, Training & Networking",
      value: "$4,500 Value",
      description:
        "Success Path Small Group Calls, Work with other members at a similar stage in the success path to benefit from more time with a Coach in a smaller group setting, Group Training Calls are balanced mix of Teaching + Implementation + Q&A each month, led by me, our coaching team, and hand-picked industry-leading experts.",
    },
    {
      title: "FULL Library of Skillify Digital Trainings",
      value: "$8,000 Value",
      description:
        "Access to ALL of our digital training including web development, artifical intelligence, VR/AR, cyber security, game development, blockchain development, algorithms, interviewing & MORE!...",
    },
    {
      title: "FREE Skillify Bootcamp Events",
      value: "$500+ Value",
      description:
        "Get FREE access to our Skillify Bootcamp Events that cost $1,00 - $5,00 to attend! Including micro-trainings for UX/UI Design, Agile Methodology, Product Management and Digital Marketing",
    },
    {
      title: "Quarterly Live Virtual 2-3 Day Hackathons",
      value: "$2,000 Value",
      description:
        "Get access to Cutting Edge Training from Vithushan, the Skillify Faculty, and special subject matter experts on the most impactful practices that are used by Skillify and our most successful students. These events give you the chance to make HUGE progress in just a few days with guided learning, implementation sessions, and real time direct support",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-4 max-w-7xl ">
      <h2 className="w-full px-2 my-8 text-3xl font-bold text-center sm:p-4">
        Here's Everything You Get as a Member of the Skillify Coding Academy
      </h2>
      <FeaturesSection
        features={features.slice(0, 2)}
        image="/images/landingPage/features-1.png"
      />

      <FeaturesSection
        features={features.slice(2, 4)}
        image="/images/landingPage/features-2.png"
        isReversed={true}
      />

      <FeaturesSection
        features={features.slice(4, 6)}
        image="/images/landingPage/features-3.png"
      />
      <FeaturesSection
        features={features.slice(6, 8)}
        isReversed={true}
        image="/images/landingPage/features-4.png"
      />
      <BonusSection />
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
        {features.map((item) => (
          <div className="flex flex-col m-4">
            <p className="text-xl font-bold ">{item.title}</p>
            <p className="mb-2 text-xl text-charmander">({item.value})</p>
            <p className="mb-2 text-xl ">{item.description}</p>
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
