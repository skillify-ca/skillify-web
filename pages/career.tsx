import React from "react";
import NavbarV3 from "../components/landingPage/NavbarV3";
import WhoItsFor from "../components/landingPage/WhoItsFor";

const SERVICES = [
  {
    step: "02",
    title: "Resume Workshop",
    price: "$50 / hr",
    outcome: "A resume that actually gets opened.",
    description:
      "Most resumes are ignored in under 10 seconds. We'll rewrite yours to lead with impact, speak to what hiring managers actually look for, and pass the ATS filters standing between you and an interview.",
    for: ["graduating", "hunting"],
    border: "border-rattata",
    tag: "For job seekers",
  },
  {
    step: "03",
    title: "Interview Prep & Coaching",
    price: "$75 / hr",
    outcome: "Walk in confident. Not just prepared.",
    description:
      "Mock interviews, real feedback, and the frameworks that top candidates use. We cover behavioural questions, technical screens, and the parts nobody tells you — like how to handle silence.",
    for: ["graduating", "hunting"],
    border: "border-pikachu-500",
    tag: "For job seekers",
  },
  {
    step: "04",
    title: "Salary Negotiation",
    price: "$100 / hr",
    outcome: "One conversation. Potentially thousands more per year.",
    description:
      "Most people accept the first number they're given. We'll figure out your market value, build your case, and rehearse the exact conversation so you can ask for what you're worth without second-guessing yourself.",
    for: ["graduating", "hunting"],
    border: "border-murkrow",
    tag: "For job seekers",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Vithushan helped me develop my technical skills in Typescript, Kotlin, Python and SQL. Developing these skills helped me land a new job!",
    name: "Lakshman H",
    school: "University of Waterloo — Actuarial Science",
    outcome: "Landed a new job",
    img: "/images/landingPage/lakshman.jpg",
    border: "border-rattata",
  },
  {
    quote:
      "Skillify was an excellent experience! Vithushan helped me reskill and learn modern coding frameworks that got me hired as a software engineer.",
    name: "Mayu G",
    school: "York University — Mechanical Engineering",
    outcome: "Hired as a Software Engineer",
    img: "/images/landingPage/mayu.png",
    border: "border-pikachu-500",
  },
  {
    quote:
      "This course gave me a better understanding of coding and data analysis which helped me land a better job as a product manager!",
    name: "Brian L",
    school: "McMaster University — Chemical Engineering",
    outcome: "Promoted to Product Manager",
    img: "/images/landingPage/brian.jpg",
    border: "border-charmander",
  },
];

export default function StudentsPage() {

  const visibleServices = SERVICES.filter((s) => s.for.includes("hunting"));

  return (
    <div className="w-full bg-white">

     <NavbarV3 currentPage="career" />

      {/* ── HERO ── */}
      <div className="flex flex-col items-center w-full bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
          <div className="p-8 lg:p-16 flex flex-col justify-center md:text-center lg:text-left">

            <p className="text-sm uppercase tracking-widest text-charmander font-semibold mb-4">
              Career Coaching · Interview Prep · Salary Negotiation
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              You're qualified. Now let's make sure{" "}
              <span className="text-charmander">
                everyone else can see it.
              </span>
            </h1>

            <p className="my-4 text-base text-gray-500 sm:text-lg md:text-xl max-w-xl">
                Ace your techincal and behavioural interviews, then land your first offer. Skillify gives you the coaching and prep to succeed at every stage.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="#stage"
                className="max-w-full bg-gradient-to-b px-6 font-bold border-b-4 rounded-lg py-3
                  bg-orange-400 hover:bg-orange-500 border-orange-600
                  active:border-b-2 cursor-pointer text-white text-center"
              >
                Find your path
              </a>
              <a
                href="mailto:vithushan19@gmail.com?subject=Free intro call"
                className="max-w-full px-6 font-bold border-b-4 border-gray-300 rounded-lg py-3
                  bg-white hover:bg-gray-50 active:border-b-2 cursor-pointer text-gray-700 text-center"
              >
                Free 15-min intro call
              </a>
            </div>

            <div className="flex items-start gap-2 mt-6 max-w-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-charmander shrink-0 mt-0.5">
                <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-gray-500">
                Covered by the{" "}
                <span className="font-semibold text-gray-700">Skillify Guarantee</span>
                {" "}- full refund within the first two weeks.
              </p>
            </div>
          </div>

          <div>
            <img
              className="object-cover w-full h-full md:h-160"
              src="/images/landingPage/tutoring-hero.png"
              alt="Skillify student session"
            />
          </div>
        </div>
      </div>

      <WhoItsFor copyType={"career"} />

      {/* ── SERVICES ── */}
      <div className="flex flex-col items-center justify-center w-full p-8 sm:p-12 bg-slate-100">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
          Your path, step by step
        </h2>
        <p className="text-gray-500 text-center mb-10 max-w-lg">
          These services follow the natural sequence from job application to offer letter.          
        </p>

        <div className="flex flex-col gap-6 w-full max-w-3xl">
          {visibleServices.map((service) => (
            <div
              key={service.step}
              className={`flex flex-col sm:flex-row bg-white border-t-8 shadow-xl rounded-xl overflow-hidden ${service.border}`}
            >
              {/* Step number */}
              <div className="flex items-center justify-center bg-gray-50 p-6 sm:p-8 sm:w-24 shrink-0">
                <span className="text-3xl font-extrabold text-gray-200">{service.step}</span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                      {service.tag}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">{service.title}</h3>
                  </div>
                  <span className="text-lg font-bold text-charmander shrink-0">{service.price}</span>
                </div>

                <p className="text-sm font-semibold text-gray-700 mb-2 italic">
                  "{service.outcome}"
                </p>
                <p className="text-sm text-gray-500 flex-1">{service.description}</p>

                <a
                  href={`mailto:vithushan19@gmail.com?subject=Book: ${service.title}`}
                  className="mt-4 self-start bg-gradient-to-b px-5 py-2 font-bold border-b-4 rounded-lg
                    bg-orange-400 hover:bg-orange-500 border-orange-600
                    active:border-b-2 cursor-pointer text-white text-sm"
                >
                  Book this session
                </a>
              </div>
            </div>
          ))}
        </div>

        {visibleServices.length === 0 && (
          <p className="text-gray-400 text-center mt-4">
            Select your stage above to see relevant services.
          </p>
        )}
      </div>

      {/* ── TESTIMONIALS ── */}
      <div className="flex flex-col justify-center p-4 bg-murkrow sm:p-8">
        <p className="text-3xl font-semibold text-center text-white">Results from real students</p>
        <p className="text-center text-gray-400 mt-1 mb-8">
          People who were exactly where you are now.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className={`flex flex-col h-full p-4 bg-white border-t-8 shadow-xl w-full sm:w-96 rounded-xl ${t.border}`}
            >
              {/* Outcome pulled out as a label */}
              <span className="text-xs uppercase tracking-widest font-bold text-charmander mb-3">
                🏆 {t.outcome}
              </span>

              <p className="sm:h-24 text-gray-700">{t.quote}</p>

              <div className="flex py-3">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src="/images/landingPage/star.svg" className="hue-rotate-45 w-4 h-4" alt="star" />
                ))}
              </div>

              <div className="grid grid-cols-6 py-3">
                <img src={t.img} alt={t.name} className="rounded-full w-10 h-10 object-cover" />
                <div className="flex flex-col justify-center col-span-5 ml-4">
                  <p className="text-lg font-bold">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ROI PRICING NOTE ── */}
      <div className="flex flex-col items-center justify-center w-full p-8 sm:p-16 bg-slate-200">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Invest in humans not just AI</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            One salary negotiation session at{" "}
            <span className="font-bold text-gray-900">$100</span> could recover thousands
            in your first year. One interview prep session at{" "}
            <span className="font-bold text-gray-900">$50</span> could be the difference
            between an offer and another rejection. The cost of not being prepared is
            almost always higher.
          </p>
        </div>
      </div>

      {/* ── FINAL CTA ── */}
      <div className="flex flex-col items-center justify-center w-full p-8 sm:p-16 bg-murkrow text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Ready to move forward?</h2>
        <p className="text-gray-400 max-w-md mb-8">
          Book your first session and get started. Not sure which one you need?
          Start with a free intro call.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:vithushan19@gmail.com?subject=Book a session"
            className="bg-gradient-to-b px-8 font-bold border-b-4 rounded-lg py-3
              bg-orange-400 hover:bg-orange-500 border-orange-600
              active:border-b-2 cursor-pointer text-white text-center"
          >
            Book your first session
          </a>
          <a
            href="mailto:vithushan19@gmail.com?subject=Free intro call"
            className="px-8 font-bold border-b-4 border-gray-600 rounded-lg py-3
              bg-transparent hover:bg-gray-800 active:border-b-2
              cursor-pointer text-white text-center border-2"
          >
            Free 15-min intro call
          </a>
        </div>

        <div className="flex items-center gap-2 mt-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-charmander shrink-0">
            <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
          </svg>
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-white">Skillify Guarantee</span>
            {" "}- full refund within the first two weeks. No questions asked.
          </p>
        </div>
      </div>

    </div>
  );
}

StudentsPage.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
