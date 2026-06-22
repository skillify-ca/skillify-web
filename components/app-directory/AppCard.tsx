// components/appDirectory/AppCard.jsx
import React from "react";
import { Button } from "../ui/Button";

const AppCard = ({ app }) => {
    return (
        <div className="bg-white w-full rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:scale-[1.02] max-w-2xl mx-auto">
            <div className="p-6">
                <div className="flex items-start space-x-4">
                    <div>
                        <img
                            src={app.image}
                            alt={app.name}
                            className="w-16 h-16 rounded-lg object-cover"
                        />
                        {/* <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center space-x-1 h-full text-2xl">
                                <span className="text-yellow-500">★</span>
                                <span className="font-medium text-gray-700">
                                    {app.rating}
                                </span>
                            </div>
                        </div> */}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                            <h3 className="text-lg font-semibold text-gray-900 truncate">
                                {app.name}
                            </h3>
                            <p className="text-sm text-gray-500 bg-blue-100 text-blue-800 px-2 py-1 mt-2 rounded-full inline-block">
                                {app.category}
                            </p>
                        </div>
                        {/* <p className="text-sm text-gray-500">by {app.creator}</p>                             */}
                        <p className="text-gray-600 text-sm my-2 line-clamp-2">
                            {app.description}
                        </p>
                        <Button label="Build Your Own" size="long" backgroundColor="orange" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;
