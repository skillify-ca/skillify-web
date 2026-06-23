import React, { useEffect, useState } from "react";
import AppCard from "../../components/app-directory/AppCard";
import NavbarV3 from "../../components/landingPage/NavbarV3";
import SEO from "../../components/SEO";
import { mockApps } from "../api/app-challenges";

const HomePage = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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

  const seo = (
    <SEO
      title={"Skillify - App Challenges"}
      description={"Pick a challenge, build the app, and publish it with your name on it."}
      image={"https://www.skillify.ca/images/logo.svg"}
    />
  );

  if (loading) {
    return (
      <div>
        {seo}
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        {seo}
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
      {seo}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Build something real. Ship it.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pick a challenge, build the app, and publish it with your name on it.
            Each project is designed to teach you real skills — and leave you with
            something worth showing off.
          </p>
        </div>

        {/* Apps Grid */}
        {mockApps.length > 0 ? (
          <div className="grid grid-cols-2 gap-6">
            {mockApps.map(app => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No apps found matching your criteria.</p>
          </div>
        )}

        {apps.length > 0 && false && (
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Load More Apps
            </button>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="text-center py-8 bg-gray-100 sticky bottom-0">
        Got an idea you want to build? We'll help you scope it, design it, and ship it.{" "}
        <a href="mailto:support@skillify.ca" className="text-blue-600 hover:text-blue-800 font-semibold">
          Let's talk →
        </a>
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
    <div>
      <NavbarV3 currentPage={"app-challenges"} />
      {page}
    </div>
  );
};