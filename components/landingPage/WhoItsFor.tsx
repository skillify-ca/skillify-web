import React from "react";

export default function WhoItsFor({copyType}: {copyType: "tutoring" | "coaching" | "lifeCoaching"}) {

const K12Copy = [
  "My child is falling behind and needs extra support in school.",
  "Homework time is stressful for our whole family.",
  "School expectations keep increasing, and it feels overwhelming.",
  "Other parents are getting tutors, and I don't want my child left behind.",
  "Classrooms move too fast and don't fit how my child learns.",
  "I worry my child isn't building a strong foundation for the future.",
  "Some subjects feel intimidating, and my child needs patient guidance.",
  "I want my child to feel confident and capable at school.",
  "Personalized tutoring matters — my child needs support tailored to how they learn.",
];

const CareerCoachingCopy = [
  "I'm not sure what career path I should take based on my skills.",
  "I graduated with a degree but I can't find a job.",
  "I'm not sure how to get more interviews.",
  "I'm not sure how to stand out in a competitive job market.",
  "I lack confidence in my interview skills and job search strategies.",
  "I have a job offer but I'm not sure if I'm leaving money on the table.",
  "I'm not sure how to sell my skills and experiences effectively.",
  "Personalized career guidance matters — I need a plan built around my goals.",
];

const LifeSkillsCopy = [
  "I feel unprepared for adulthood and real-life responsibilities.",
  "Work and daily stress leave little time for relationships and self-care.",
  "Money is stressful, and I don't feel in control of my finances.",
  "I see others thriving and feel unsure how to catch up.",
  "School never taught me the skills I actually need.",
  "Long-term stability feels uncertain and overwhelming.",
  "Building habits and routines is hard without support.",
  "I want more balance, freedom, and purpose in my life.",
  "Personalized coaching matters — I need guidance that fits my life.",
];

  let listItemsMap: { [key: string]: string[] } = {
    tutoring: K12Copy,
    coaching: CareerCoachingCopy,
    lifeCoaching: LifeSkillsCopy,
  };

  const listItems = listItemsMap[copyType];


  return (
    <div className="flex flex-col items-center justify-center w-full p-4 sm:p-8 bg-murkrow">
      <h2 className="p-4 text-2xl font-bold text-charmander">
        If any of this strikes a chord, then it’s time to learn with Skillify...
      </h2>
      <div className="flex flex-col items-start w-full p-8 m-4 lg:items-center max-w-7xl bg-slate-200 rounded-xl">
        {listItems && listItems.map((item) => (
          <div
            key={item}
            className="flex items-center transition-all hover:scale-110 hover:font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
            <p className="w-full p-4 text-xl">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
