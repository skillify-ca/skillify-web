import React from "react";
import Credentials from "../../components/landingPage/Credentials";
import NavbarV3 from "../../components/landingPage/NavbarV3";
import SEO from "../../components/SEO";
import { Button } from "../../components/ui/Button";

const HomePage = () => {

  const seo = (
    <SEO
      title={"Skillify - Scholarships"}
      description={"Supporting high school students in Toronto's Regent Park neighborhood through comprehensive academic support."}
      image={"https://www.skillify.ca/images/logo.svg"}
    />
  );

  return (
    <div>
      {seo}
          <img src="/images/landingPage/tutoring.jpg" alt="Scholarship" className="mx-auto h-36 w-full object-cover" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Scholarships
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Supporting high school students and young adults in Toronto's Regent Park neighborhood through comprehensive academic support.
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Proof of address is required to apply. If you are a student or young adult in Regent Park, please reach out to us for more information about our scholarships for tutoring and career coaching.
          </p>
          <a href={"mailto:vithushan19@gmail.com?subject=Scholarship%20Inquiry"} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline text-sm mt-4 inline-block">
            <Button label="Learn More" size="long" backgroundColor="orange" />
          </a>
        </div>
      </div>

      <Credentials title="Tutor" />

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
      <NavbarV3 currentPage={"scholarships"} />
      {page}
    </div>
  );
};