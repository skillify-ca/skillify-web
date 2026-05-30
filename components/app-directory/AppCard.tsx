// components/appDirectory/AppCard.jsx
import Link from "next/link";
import React from "react";

const AppCard = ({ app }) => {
    return (
        <Link
            href={`/apps/${app.id}`}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:scale-[1.02]">
                <div className="p-6">
                    <div className="flex items-start space-x-4">
                        <img
                            src={app.image}
                            alt={app.name}
                            className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold text-gray-900 truncate">
                                {app.name}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">by {app.creator}</p>
                            <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                                {app.description}
                            </p>

                            <div className="mt-3 flex items-center justify-between">
                                <div className="flex items-center space-x-1">
                                    <span className="text-yellow-500">★</span>
                                    <span className="text-sm font-medium text-gray-700">
                                        {app.rating}
                                    </span>
                                </div>
                                View Details
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;
