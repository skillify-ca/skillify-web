// pages/apps/[id].js
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SEO from "../../components/SEO";
import NavbarV3 from "../../components/landingPage/NavbarV3";
import { mockApps } from "../api/app-challenges";

const AppDetailsPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [app, setApp] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);    

    useEffect(() => {
        if (id) {
            const fetchApp = async () => {
                try {
                    setLoading(true);
                    // Find app by ID in mock data
                    const parsedId = typeof id === "string" ? parseInt(id) : null;
                    const foundApp = mockApps.find(app => app.id === parsedId);

                    if (foundApp) {
                        setApp(foundApp);
                    } else {
                        setError("App not found");
                    }
                    setLoading(false);
                } catch (err) {
                    setError("Failed to fetch app details");
                    setLoading(false);
                }
            };

            fetchApp();
        }
    }, [id]);

    if (loading) {
        return (
            <div>
                <SEO
                    title={"Skillify - Loading App"}
                    description={"Loading app details..."} image={""} />
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
            </div>
        );
    }

    if (error || !app) {
        return (
            <div>
                <SEO
                    title={"Skillify - App Not Found"}
                    description={"The app you're looking for doesn't exist"} image={""} />
                <div className="max-w-4xl mx-auto p-6">
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                        <strong>Error:</strong> {error || "App not found"}
                    </div>
                </div>
            </div>
        );
    }

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(
                    <span key={i} className="text-yellow-400">★</span>
                );
            } else if (i === fullStars && hasHalfStar) {
                stars.push(
                    <span key={i} className="text-yellow-400">☆</span>
                );
            } else {
                stars.push(
                    <span key={i} className="text-gray-300">☆</span>
                );
            }
        }

        return stars;
    };

    const renderReviews = () => {
        if (!app.comments || app.comments.length === 0) {
            return (
                <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-500 italic">No comments yet. Be the first to comment!</p>
                </div>
            );
        }

        return (
            <div className="space-y-6">
                {app.comments.map(review => (
                    <div key={review.id} className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium text-gray-900">{review.user}</h4>
                            <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex items-center mb-2">
                            {renderStars(review.rating)}
                            <span className="ml-2 text-sm font-medium text-gray-700">
                                {review.rating}/5
                            </span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
            <SEO
                title={`Skillify - ${app.name}`}
                description={app.description}
                image={app.image}
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Back Button */}
                <div className="mb-6">
                    <button
                        onClick={() => router.back()}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer"
                    >
                        &larr; Back to Directory
                    </button>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    {/* App Header */}
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-1/3">
                                <img
                                    src={app.image}
                                    alt={app.name}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                            </div>

                            <div className="md:w-2/3">
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">{app.name}</h1>

                                <div className="flex items-center mb-4">
                                    <div className="flex items-center mr-4">
                                        {renderStars(app.rating)}
                                        <span className="ml-2 text-lg font-medium text-gray-700">
                                            {app.rating}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-4">{app.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                        {app.category}
                                    </span>
                                    <span className="px-3 py-1 bg-green-100 text-green-8/text-gray-700 rounded-full text-sm">
                                        by {app.creator}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {app.url && (
                                        <a
                                            href={app.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                        >
                                            Visit App
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* App Details */}
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                            {app.features.map((feature, index) => (
                                <div key={index} className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">App Information</h2>
                                <div className="space-y-3">
                                    <div>
                                        <span className="font-medium text-gray-700">Category:</span>
                                        <span className="ml-2 text-gray-600">{app.category}</span>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-700">Creator:</span>
                                        <span className="ml-2 text-gray-600">{app.creator}</span>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-700">Last Updated:</span>
                                        <span className="ml-2 text-gray-600">{app.lastUpdated}</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Comments</h2>
                                {renderReviews()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetailsPage;

AppDetailsPage.getLayout = function getLayout(page) {
  return (
    <div>
      <NavbarV3 currentPage={"app-directory"} />
      {page}
    </div>
  );
};
