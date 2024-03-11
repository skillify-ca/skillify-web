// Import necessary libraries and components
import React from 'react';
import LandingNavbar from "../../../../components/landingPage/LandingNavbar";
import GiveFeedback from "../../../../components/resources/mockInterview/GiveFeedback"; 

export default function GiveFeedbackPage() {
    return (
      <div>
        <GiveFeedback/>
      </div>
    );
  }
  
  GiveFeedbackPage.getLayout = function getLayout(page) {
    return (
      <div className="theme-default">
        <LandingNavbar />
        {page}
      </div>
    );
  };
