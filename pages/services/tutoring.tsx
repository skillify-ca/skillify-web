import React from "react";
import Credentials from "../../components/landingPage/Credentials";
import { TutoringHero } from "../../components/landingPage/Hero";
import NavbarV3 from "../../components/landingPage/NavbarV3";
import WhoItsFor from "../../components/landingPage/WhoItsFor";

const SERVICES = [
  {
    title: "Private Tutoring",
    price: "$85 / hr",
    outcome: "The courses that decide your university options. Let's make them count.",
    description:
      "High school is where the stakes get real. We work through the exact units giving you trouble, fix gaps before they show up on your final exam, and build the kind of understanding that holds up under pressure. Delivered in-person in downtown Toronto or virtually using Zoom.",
    note: "Add additional students to the same session for $25 per student per hour.",
    border: "border-charmander",
    tag: "For students in grades 9 to 12",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Vithushan helped my kids feel confident preparing for school tests. He was flexible in tutoring both of my kids together at an afforadable rate.",
    name: "Nisha R",
    school: "Parent of a 6th and 8th grader",
    outcome: "Overcame math anxiety",
    img: "",
    border: "border-charmander",
  },
  {
    quote:
      "Vithushan taught my son how to build a basic website and mobile application. He sparked a passion for technology in my son.",
    name: "Vino T",
    school: "Parent of an 11th grader",
    outcome: "Navigated career paths",
    img: "",
    border: "border-rattata",
  },

];

const COURSES = [
  {
    "grade": "Grade 9",
    "courses": [
      { "title": "Math", "code": "MFM1W" },
      { "title": "Science", "code": "SNC1W" }
    ]
  },
  {
    "grade": "Grade 10",
    "courses": [
      { "title": "Math", "code": "MPM2D" },
      { "title": "Science", "code": "SNC2D" }
    ]
  },
  {
    "grade": "Grade 11",
    "courses": [
      { "title": "Functions", "code": "MCF3M" },
      { "title": "Physics", "code": "SPH3U" }
    ]
  },
  {
    "grade": "Grade 12",
    "courses": [
      { "title": "Advanced Functions", "code": "MHF4U" },
      { "title": "Calculus & Vectors", "code": "MCV4U" },
      { "title": "AP Calculus", "code": "" },
      { "title": "Data Management", "code": "MDM4U" },
      { "title": "Physics", "code": "SPH4U" }
    ]
  }
]

export default function K12Page() {
  return (
    <div className="w-full bg-white">
      <NavbarV3 currentPage="tutoring" />
      <TutoringHero />

      {/* SERVICES */}
      <div id="stage" className="flex flex-col items-center justify-center w-full p-8 sm:p-12 bg-slate-200">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
          What we offer
        </h2>
        <p className="text-gray-500 text-center text-xl mb-10 max-w-xl">
          All sessions are one-on-one and built around your child's
          school material or university Math contests
        </p>

        <div className="flex flex-col gap-6 w-full max-w-3xl">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className={`flex flex-col sm:flex-row bg-white border-t-8 shadow-xl rounded-xl overflow-hidden ${service.border}`}
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                      {service.tag}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">{service.title}</h3>
                  </div>
                  <span className="text-3xl font-bold text-charmander shrink-0">{service.price}</span>
                </div>
                <p className="text-md text-gray-500 flex-1 font-bold mt-2">Note: {service.note}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-gray-900 text-center mt-10 mb-6">
          Supported Courses
        </h2>

        <div className="flex flex-col items-start justify-center gap-2 mt-2 px-4 rounded-lg w-full max-w-4xl">
          {
            COURSES.map((course) => (
              <div key={course.grade} className="flex flex-col w-full mb-4 rounded-lg text-xl bg-white p-4 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{course.grade}</h3>
                <div className="flex flex-wrap gap-2">
                  {course.courses.map((c) => (
                    <span key={c.code} className="px-4 py-2 bg-slate-300 rounded-full text-gray-700 font-semibold">
                      {c.title} {c.code.length > 0 ? `(${c.code})` : ""}
                    </span>
                  ))}
                </div>
              </div>
            ))
          }
        </div>

      </div>

      <WhoItsFor copyType={"tutoring"} />


      <Credentials title="Tutor" />

      {/* TESTIMONIALS */}
      <div className="flex flex-col justify-center p-4 bg-murkrow sm:p-8">
        <p className="text-3xl font-semibold text-center text-white">What parents say</p>
        <p className="text-center text-gray-400 mt-1 mb-8">
          Real results from real people who started exactly where your child is now.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className={`flex flex-col h-full p-4 bg-white border-t-8 shadow-xl w-full sm:w-96 rounded-xl ${t.border}`}
            >
              <span className="text-xs uppercase tracking-widest font-bold text-charmander mb-3">
                🏆 {t.outcome}
              </span>

              <p className="sm:h-24 text-gray-700">{t.quote}</p>

              <div className="flex py-3">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src="/images/landingPage/star.svg" className=" w-4 h-4" alt="star" />
                ))}
              </div>

              <div className="grid grid-cols-6 py-3">
                {t.img && <img src={t.img} alt={t.name} className="rounded-full w-10 h-10 object-cover mr-4" />}
                <div className="flex flex-col justify-center col-span-5">
                  <p className="text-lg font-bold">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="flex flex-col items-center justify-center w-full p-8 sm:p-16 bg-murkrow text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Ready to get your child on track?</h2>
        <p className="text-gray-400 max-w-md mb-8">
          Book a first session and see the difference. Not sure where to start?
          Send me an email and we can discuss exactly what your child needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:vithushan@skillify.ca?subject=Book a K-12 tutoring session"
            className="bg-linear-to-b px-8 font-bold border-b-4 rounded-lg py-3
              bg-orange-400 hover:bg-orange-500 border-orange-600
              active:border-b-2 cursor-pointer text-white text-center"
          >
            Contact Us
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

K12Page.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};