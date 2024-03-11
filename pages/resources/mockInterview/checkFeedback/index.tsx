// Import necessary libraries and components
import React from 'react';
import LandingNavbar from "../../../../components/landingPage/LandingNavbar";
import CheckFeedback from "../../../../components/resources/mockInterview/CheckFeedback"; 

export default function CheckFeedbackPage() {
    return (
      <div>
        <CheckFeedback/>
      </div>
    );
  }
  
  CheckFeedbackPage.getLayout = function getLayout(page) {
    return (
      <div className="theme-default">
        <LandingNavbar />
        {page}
      </div>
    );
  };
