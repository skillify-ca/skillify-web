import React from "react";

export default function BrandHero() {
    return (
        <div className="w-full bg-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-2">

                <div>
                    {/* Guarantee note */}
                    <div className="flex items-start gap-2 mt-6 max-w-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-charmander shrink-0 mt-0.5">
                            <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm text-gray-500">
                            All courses covered by the{" "}
                            <span className="font-semibold text-gray-700">Skillify Guarantee</span>
                            {" "}- full refund within the first two weeks.
                        </p>
                    </div>

                </div>

                {/* Right column — keep your existing image */}
                <div>
                    <img
                        className="object-cover w-full h-full md:h-160"
                        src="/images/landingPage/tutoring-hero.png"
                        alt="Skillify instructor and student"
                    />
                </div>

            </div>
        </div>
    )
}