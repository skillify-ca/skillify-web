import React, { useEffect, useState } from "react";
import SEO from "../../components/SEO";
import { mockApps } from "../api/app-directory";
import ServicesLayout from "./layout";

const HomePage = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call
    const fetchApps = async () => {
      try {
        setLoading(true);
        setApps(mockApps);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch apps");
        setLoading(false);
      }
    };

    fetchApps();
  }, []);


  if (loading) {
    return (
      <div>
        <SEO
          title={"Skillify - App Directory"}
          description={
            "Build and publish your own app with Skillify. Get expert guidance, technical support, and a platform to showcase your work."
          }
          image={"https://www.skillify.ca/images/logo.svg"}
        />
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <SEO
          title={"Skillify - App Directory"}
          description={
            "Build and publish your own app with Skillify. Get expert guidance, technical support, and a platform to showcase your work."
          }
          image={"https://www.skillify.ca/images/logo.svg"}
        />
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <strong>Error:</strong> {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SEO
        title={"Skillify - App Directory"}
        description={
          "Build and publish your own app with Skillify. Get expert guidance, technical support, and a platform to showcase your work."
        }
        image={"https://www.skillify.ca/images/logo.svg"}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Coming Soon!</h1>
        </div>

        {/* Coming Soon */}
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Our game library is coming soon. Stay tuned for exciting educational games!</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;


HomePage.getLayout = function getLayout(page) {
  return (
    <ServicesLayout>
      {page}
    </ServicesLayout>
  );
};
