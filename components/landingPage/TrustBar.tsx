import React from "react";

export default function TrustBar() {
    return (
        <div className="w-full bg-white border-b-2 border-t-2 py-6 px-4 sm:px-8">

            <div className="flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto gap-6">

                {/* Left: the stat that earns the most trust */}
                <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold whitespace-nowrap">
                    Trusted by 100+ students
                </p>

                {/* Divider — hidden on mobile */}
                <div className="hidden sm:block w-px h-8 bg-gray-200" />

                {/* Company logos */}
                <div className="flex items-center gap-6 flex-wrap justify-center">
                <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold whitespace-nowrap">
                    10 years of teaching experience
                </p>
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-px h-8 bg-gray-200" />

                {/* Right: social proof signal */}
                <div className="flex items-center gap-1">
                    <img src="/images/landingPage/star.svg" className="w-4 h-4 hue-rotate-45" alt="" />
                    <img src="/images/landingPage/star.svg" className="w-4 h-4 hue-rotate-45" alt="" />
                    <img src="/images/landingPage/star.svg" className="w-4 h-4 hue-rotate-45" alt="" />
                    <img src="/images/landingPage/star.svg" className="w-4 h-4 hue-rotate-45" alt="" />
                    <img src="/images/landingPage/star.svg" className="w-4 h-4 hue-rotate-45" alt="" />
                    <p className="text-sm text-gray-500 ml-2 whitespace-nowrap">5.0 across all courses</p>
                </div>

            </div>

        </div>
    )
}