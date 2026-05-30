// components/appDirectory/AppCard.jsx
import Link from "next/link";
import React from "react";

const AppCard = ({ app }) => {
    return (
        <Link
            href={`/apps/${app.id}`}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:scale-[1.02] max-w-2xl mx-auto">
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
                            <p className="text-sm text-gray-500">by {app.creator}</p>                            
                            <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                                {app.description}
                            </p>
                            <p className="text-sm text-gray-500 bg-blue-100 text-blue-800 px-2 py-1 mt-2 rounded-full inline-block">
                                {app.category}
                            </p>
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="flex items-center space-x-1 h-full text-2xl">
                                <span className="text-yellow-500">★</span>
                                <span className="font-medium text-gray-700">
                                    {app.rating}
                                </span>
                            </div>
                            <p>View Details</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;
