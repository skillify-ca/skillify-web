import React from "react";

const SERVICES = [
    {
        "url": "/tech",
        "icon": "💻",
        "title": "For Professionals & Builders",
        "description": "Fix your app, build something new, or get a trusted tech advisor in your corner. Ask questions and get results.",
        "colour": "charmander",
        "learnMore": "See tech services →"
    },
    {
        "url": "/career",
        "icon": "🎓",
        "title": "For New Grads & Job Seekers",
        "description": "From job applications to landing your first offer: resume help, interview prep, and salary coaching.",
        "colour": "rattata",
        "learnMore": "See career services →"
    },
    {
        "url": "/tutoring",
        "icon": "👨‍👩‍👧",
        "title": "For Parents & K-12 Students",
        "description": "Help your child build real confidence in math, science, and coding with an instructor who makes it click.",
        "colour": "gray-700",
        "learnMore": "See tutoring services →"
    },
    {
        "url": "/schools",
        "icon": "🏫",
        "title": "For School Boards",
        "description": "Bring hands-on coding workshops directly to your students. Curriculum-aligned and engaging.",
        "colour": "pikachu",
        "learnMore": "See school workshops →"
    }
]

export default function AudienceSelectSection() {
    return (
        <div id="stage" className="flex flex-col items-center justify-center w-full p-8 sm:p-16 bg-blue-950">

            {/* Section header */}
            <p className="text-3xl font-bold text-center text-white">Who are you here for?</p>
            <p className="text-center text-gray-400 mt-2 mb-10 max-w-xl">
                Choose your path - each one is built around your specific goals.
            </p>

            {/* Audience door cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">

                {SERVICES.map((service) => (
                    <a
                        key={service.url}
                        href={service.url}
                        className={`flex flex-col h-full p-6 bg-white border-t-8 shadow-xl rounded-xl border-${service.colour} hover:scale-105 transition-transform cursor-pointer no-underline`}
                    >
                        <p className="text-3xl mb-3">{service.icon}</p>
                        <p className="text-xl font-bold text-gray-900">{service.title}</p>
                        <p className="text-gray-500 text-sm mt-2 flex-1">{service.description}</p>
                        <p className={`font-semibold text-sm mt-4 text-${service.colour}`}>{service.learnMore}</p>
                    </a>
                ))}
            </div>

            {/* Fallback CTA */}
            <p className="text-gray-400 text-sm mt-10">
                Not sure where to start?{" "}
                <a href="https://calendly.com/vithushan19/intro" className="text-charmander underline">
                    Book a free 30-minute intro call.
                </a>
            </p>

        </div>
    )
}