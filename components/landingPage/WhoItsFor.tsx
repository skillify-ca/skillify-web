import React from "react";

// ── WHO IT'S FOR ──────────────────────────────────────────────────────────────

const WhoItsForCopy: Record<string, string[]> = {
  tutoring: [
    "I want my child to perform well on a Waterloo Math or Coding contest to get into university.",
    "Homework time is stressful for our whole family.",    
    "I worry my child isn't building a strong foundation for the future.",
    "I want my child to feel confident and capable at school.",
    "My child is falling behind and needs extra support in school.",
    "Classroom sizes are too big and don't fit how my child learns.",
  ],
  coaching: [
    "I'm not sure what career path I should take based on my skills.",
    "I graduated with a degree but I can't find a job.",
    "I'm not sure how to get more interviews.",
    "I'm not sure how to stand out in a competitive job market.",
    "I lack confidence in my interview skills and job search strategies.",
    "I have a job offer but I'm not sure if I'm leaving money on the table.",
    "I'm not sure how to sell my skills and experiences effectively.",
    "Personalized career guidance matters — I need a plan built around my goals.",
  ],
  lifeCoaching: [
    "I feel unprepared for adulthood and real-life responsibilities.",
    "Work and daily stress leave little time for relationships and self-care.",
    "Money is stressful, and I don't feel in control of my finances.",
    "I see others thriving and feel unsure how to catch up.",
    "School never taught me the skills I actually need.",
    "Long-term stability feels uncertain and overwhelming.",
    "Building habits and routines is hard without support.",
    "I want more balance, freedom, and purpose in my life.",
    "Personalized coaching matters — I need guidance that fits my life.",
  ],
  career: [
    "You're struggling with a university math or CS course",
    "You've been applying for months with no callbacks",
    "You're using AI in your job search but not getting results",
    "You have an interview coming up and feel underprepared",
    "You got an offer but don't know if the number is fair",
    "You want real feedback from someone who's been in the industry"
  ],
  tech: [
    "I have an app that is broken and I have no idea how to fix it.",
    "I need a website or app built but I don't know where to start.",
    "I'm paying a developer and I have no way to tell if I'm getting a fair deal.",
    "I built something with AI tools and now it's a mess I can't maintain.",
    "I need someone to explain my own tech stack to me in plain English.",
    "I want to make smart technology decisions before they get expensive to undo.",
    "I'm a founder who needs a technical person in my corner without hiring full time.",
  ],
  schools: [
    "Your students are curious about coding but you don't have a specialist on staff.",
    "Your teachers feel unequipped to teach coding or AI concepts confidently.",
    "You're looking for curriculum-aligned workshops that require zero prep from your teachers.",
    "You want students to learn from someone who's actually built products used by millions.",
    "You need an engaging guest speaker who can hold the attention of 30 students.",
  ]
};

// ── WHO IT'S NOT FOR ──────────────────────────────────────────────────────────

const WhoItsNotForCopy: Record<string, string[]> = {
  tutoring: [
    "You're looking for a quick fix the night before an exam.",
    "You want someone to just do the homework for your child.",
    "Your child isn't willing to put in effort between sessions.",
    "You're looking for a full school replacement or homeschool program.",
  ],
  coaching: [
    "You want someone to hand you a job — coaching requires your effort too.",
    "You're looking for a recruiter or job placement service.",
    "You need help outside of career strategy, resumes, or interview prep.",
    "You're not open to honest feedback on your materials or approach.",
  ],
  lifeCoaching: [
    "You're looking for therapy or licensed mental health support.",
    "You want someone to make decisions for you.",
    "You're not ready to take action between sessions.",
    "You need highly specialized financial or legal advice.",
  ],
  career: [
    "You're looking for a full certification or degree program",
    "You want a long-term ongoing mentor relationship",
    "You need help outside of math, coding, or career prep",
    "You're not willing to put in work between sessions",
  ],
  tech: [
    "You're a developer looking for a coding partner or peer review.",
    "You want someone to build your app and disappear — we make sure you understand what was built.",
    "You need enterprise-level infrastructure or a large engineering team.",
    "You're not willing to be involved in decisions about your own product.",
  ],
  schools: [
    "You're looking for a full-time coding teacher or long-term classroom replacement.",
    "You expect teachers to handle technical setup or curriculum planning before the workshop.",
    "You want a pre-recorded video series instead of a live facilitator.",
    "You're not willing to provide basic classroom supervision during the session.",
    "You need a multi-month coding bootcamp integrated into your daily schedule."
  ]
};

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function WhoItsFor({
  copyType,
}: {
  copyType: "tutoring" | "coaching" | "lifeCoaching" | "career" | "tech" | "schools";
}) {
  const forItems = WhoItsForCopy[copyType];
  const notForItems = WhoItsNotForCopy[copyType];

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 sm:p-8 bg-murkrow">
      <h2 className="p-4 text-2xl font-bold text-white text-center">
        Is Skillify right for you?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-7xl">

        {/* ── WHO IT'S FOR ── */}
        <div className="flex flex-col p-8 bg-slate-200 rounded-xl">
          <p className="font-bold text-gray-900 text-lg mb-4">✅ This is for you if...</p>
          {forItems.map((item) => (
            <div
              key={item}
              className="flex items-center transition-all hover:scale-105 hover:font-bold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 shrink-0 text-charmander"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
              <p className="w-full p-4 text-lg">{item}</p>
            </div>
          ))}
        </div>

        {/* ── WHO IT'S NOT FOR ── */}
        <div className="flex flex-col p-8 bg-slate-700 rounded-xl">
          <p className="font-bold text-gray-300 text-lg mb-4">🚫 This is probably not for you if...</p>
          {notForItems.map((item) => (
            <div
              key={item}
              className="flex items-center transition-all hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 shrink-0 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <p className="w-full p-4 text-lg text-gray-300">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}