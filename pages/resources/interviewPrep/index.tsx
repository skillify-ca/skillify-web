import React from 'react';
import LandingNavbar from '../../../components/landingPage/LandingNavbar';

export default InterviewCoursePage;
function InterviewCoursePage() {
  return <div>Interview</div>;
}

InterviewCoursePage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
