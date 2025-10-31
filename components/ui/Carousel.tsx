import React, { useState } from "react";

function ChevronLeft() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" >
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
}


function ChevronRight() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" >
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

}


export default function Carousel({ items }: { items: { text: string; image: string }[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);


    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };
    return <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-lg">
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-full px-2 sm:px-4"
                        >
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                                {/* Image Section */}
                                <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-gray-200">
                                    <img
                                        src={item.image}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="p-4 sm:p-6 md:p-8">
                                    <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons - Hidden on very small screens, visible on sm+ */}
            <button
                onClick={prevSlide}
                className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 bg-white rounded-full p-2 lg:p-3 shadow-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 items-center justify-center"
                aria-label="Previous slide"
            >
                <ChevronLeft />
            </button>

            <button
                onClick={nextSlide}
                className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 bg-white rounded-full p-2 lg:p-3 shadow-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 items-center justify-center"
                aria-label="Next slide"
            >
                <ChevronRight />
            </button>

            {/* Mobile Navigation Buttons - Only visible on xs screens */}
            <div className="flex sm:hidden justify-between mt-4 gap-4">
                <button
                    onClick={prevSlide}
                    className="flex-1 bg-white rounded-lg p-3 shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center"
                    aria-label="Previous slide"
                >
                    <ChevronLeft />
                    <span className="ml-2 text-sm font-medium text-gray-700">Previous</span>
                </button>

                <button
                    onClick={nextSlide}
                    className="flex-1 bg-white rounded-lg p-3 shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center"
                    aria-label="Next slide"
                >
                    <span className="mr-2 text-sm font-medium text-gray-700">Next</span>
                    <ChevronRight />
                </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 sm:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${index === currentIndex
                            ? 'bg-blue-600 w-6 sm:w-8'
                            : 'w-2 sm:w-3 bg-gray-300 hover:bg-gray-400'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>

        {/* Current Slide Counter */}
        <div className="text-center mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
            {currentIndex + 1} / {items.length}
        </div>
    </div>
}