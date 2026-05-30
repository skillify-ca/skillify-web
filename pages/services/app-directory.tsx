import React, { useEffect, useState } from "react";
import AppCard from "../../components/app-directory/AppCard";
import NavbarV3 from "../../components/landingPage/NavbarV3";
import SEO from "../../components/SEO";
import { mockApps } from "../api/app-directory";

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">App Directory</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing app ideas designed by creators using Skillify. These apps are in progress and actively being developed by community members.
          </p>
        </div>

        {/* Apps Grid */}
        {mockApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockApps.map(app => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No apps found matching your criteria.</p>
          </div>
        )}

        {/* Load More Button */}
        {apps.length > 0 && false && (
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Load More Apps
            </button>
          </div>
        )}
      </div>
      <div className="text-center py-8 bg-gray-100">
        Have a business idea for an app and need help bringing it to life? <a href="mailto:support@skillify.ca" className="text-blue-600 hover:text-blue-800">Contact us</a> for expert guidance and support.
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
    <div>
      <NavbarV3 currentPage={"app-directory"} />
      {page}
    </div>
  );
};
