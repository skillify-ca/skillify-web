import React from "react";

export default function AudienceSelectSection() {
    return (
        <div id="stage" className="flex flex-col items-center justify-center w-full p-8 sm:p-16 bg-murkrow">

            {/* Section header */}
            <p className="text-3xl font-bold text-center text-white">Who are you here for?</p>
            <p className="text-center text-gray-400 mt-2 mb-10 max-w-xl">
                Choose your path - each one is built around your specific goals.
            </p>

            {/* Audience door cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">

                {/* K-12 / Parents */}
                <a href="/services/tutoring" className="flex flex-col h-full p-6 bg-white border-t-8 shadow-xl rounded-xl border-charmander hover:scale-105 transition-transform cursor-pointer no-underline">
                    <p className="text-3xl mb-3">👨‍👩‍👧</p>
                    <p className="text-xl font-bold text-gray-900">For Parents & K-12 Students</p>
                    <p className="text-gray-500 text-sm mt-2 flex-1">
                        Help your child build real confidence in math, science, and coding with an instructor who makes it click.
                    </p>
                    <p className="text-charmander font-semibold text-sm mt-4">See K-12 tutoring →</p>
                </a>

                {/* University / Job Seekers */}
                <a href="/services/career" className="flex flex-col h-full p-6 bg-white border-t-8 shadow-xl rounded-xl border-rattata hover:scale-105 transition-transform cursor-pointer no-underline">
                    <p className="text-3xl mb-3">🎓</p>
                    <p className="text-xl font-bold text-gray-900">For Students & Job Seekers</p>
                    <p className="text-gray-500 text-sm mt-2 flex-1">
                        From job applications to landing your first offer: resume help, interview prep, and salary coaching.
                    </p>
                    <p className="font-semibold text-sm mt-4 text-rattata">See career services →</p>
                </a>

                {/* Professionals / Builders */}
                <a href="/services/tech" className="flex flex-col h-full p-6 bg-white border-t-8 shadow-xl rounded-xl border-pikachu-500 hover:scale-105 transition-transform cursor-pointer no-underline">
                    <p className="text-3xl mb-3">💻</p>
                    <p className="text-xl font-bold text-gray-900">For Professionals & Builders</p>
                    <p className="text-gray-500 text-sm mt-2 flex-1">
                        Fix your app, build something new, or get a trusted tech advisor in your corner. Ask questions and get results.
                    </p>
                    <p className="font-semibold text-sm mt-4 text-pikachu-500">See tech services →</p>
                </a>

                {/* Schools / Admins */}
                <a href="/services/schools" className="flex flex-col h-full p-6 bg-white border-t-8 shadow-xl rounded-xl border-murkrow hover:scale-105 transition-transform cursor-pointer no-underline">
                    <p className="text-3xl mb-3">🏫</p>
                    <p className="text-xl font-bold text-gray-900">For Schools & Administrators</p>
                    <p className="text-gray-500 text-sm mt-2 flex-1">
                        Bring hands-on coding and technology workshops directly to your students. Curriculum-aligned and engaging.
                    </p>
                    <p className="font-semibold text-sm mt-4 text-murkrow">See school programs →</p>
                </a>

            </div>

            {/* Fallback CTA */}
            <p className="text-gray-400 text-sm mt-10">
                Not sure where to start?{" "}
                <a href="mailto:vithushan19@gmail.com" className="text-charmander underline">
                    Book a free 15-minute intro call.
                </a>
            </p>

        </div>
    )
}