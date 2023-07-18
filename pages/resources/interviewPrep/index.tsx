import React, { CSSProperties } from 'react';
import LandingNavbar from '../../../components/landingPage/LandingNavbar';

export default InterviewCoursePage;
function InterviewCoursePage() {
  return (
    <div>
      <InterviewPrepCourse />
    </div>
  );
}

const InterviewPrepCourse = () => {
  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  };

  const progressBarStyle = {
    height: '10px',
    backgroundColor: '#ccc',
    marginBottom: '10px',
  };

  const progressStyle = {
    height: '100%',
    backgroundColor: 'green',
  };

  const sectionStyle = {
    display: 'inline-block',
    border: '1px solid black',
    borderRadius: '5px',
    marginBottom: '10px',
  };

  const headingStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    margin: '0',
    whiteSpace: 'nowrap',
  };

  const continueButtonStyle = {
    border: '1px solid black',
    borderRadius: '5px',
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: 'gray', // Change color of Continue Button
    color: 'white',
    cursor: 'pointer',
  };

  const circleIconStyle = {
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    backgroundColor: 'black',
    marginRight: '5px',
  };

  const badgeContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  };

  const badgeStyle = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: 'gray',
    marginRight: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={progressBarStyle}>
        <div style={{ ...progressStyle, width: '60%' }}></div>
      </div>
      <div style={{ ...sectionStyle, width: 'fit-content' }}>
        <h2 style={headingStyle}>Introduction</h2>
      </div>
      <div style={sectionStyle}>
        <h3 style={headingStyle}>
          <span style={circleIconStyle}></span>
          Lesson: Importance of Interview Preparation
          <button style={{ ...continueButtonStyle, marginLeft: 'auto' }}>
            Continue
          </button>
        </h3>
      </div>
      <div style={{ ...sectionStyle, width: 'fit-content' }}>
        <h2 style={headingStyle}>Overview</h2>
      </div>
      <div style={sectionStyle}>
        <h3 style={headingStyle}>
          <span style={circleIconStyle}></span>
          Lesson: Stages of the Interview
          <button style={{ ...continueButtonStyle, marginLeft: 'auto' }}>
            Continue
          </button>
        </h3>
      </div>
      <div style={sectionStyle}>
        <h3 style={headingStyle}>
          <span style={circleIconStyle}></span>
          Lesson: Employer&apos;s Expectations
          <button style={{ ...continueButtonStyle, marginLeft: 'auto' }}>
            Continue
          </button>
        </h3>
      </div>
      <div style={{ ...sectionStyle, width: 'fit-content' }}>
        <h2 style={headingStyle}>Tell Me About Yourself</h2>
      </div>
      <div style={sectionStyle}>
        <h3 style={headingStyle}>
          <span style={circleIconStyle}></span>
          Assignment: Bullet all your experiences
          <button style={{ ...continueButtonStyle, marginLeft: 'auto' }}>
            Continue
          </button>
        </h3>
      </div>
      <div style={sectionStyle}>
        <h3 style={headingStyle}>
          <span style={circleIconStyle}></span>
          Lesson: How should I introduce myself?
          <button style={{ ...continueButtonStyle, marginLeft: 'auto' }}>
            Continue
          </button>
        </h3>
      </div>
      <div style={{ ...sectionStyle, width: 'fit-content' }}>
        <h2 style={headingStyle}>Practice</h2>
      </div>
      <div style={sectionStyle}>
        <h3 style={headingStyle}>
          <span style={circleIconStyle}></span>
          Try Yourself: Answer Behavioral Questions
          <button style={{ ...continueButtonStyle, marginLeft: 'auto' }}>
            Continue
          </button>
        </h3>
      </div>
      <div style={sectionStyle}>
        <h3 style={headingStyle}>
          <span style={circleIconStyle}></span>
          Try Yourself: Answer Experience/Technical Questions
          <button style={{ ...continueButtonStyle, marginLeft: 'auto' }}>
            Continue
          </button>
        </h3>
      </div>
      <div style={sectionStyle}>
        <h3 style={headingStyle}>
          <span style={circleIconStyle}></span>
          Try Yourself: Hands-On Coding Questions
          <button style={{ ...continueButtonStyle, marginLeft: 'auto' }}>
            Continue
          </button>
        </h3>
      </div>
      <div style={{ ...sectionStyle, width: 'fit-content' }}>
        <h2 style={headingStyle}>Mock Interview</h2>
      </div>
      <div style={sectionStyle}>
        <h3 style={headingStyle}>
          <span style={circleIconStyle}></span>
          Assignment: Real Interview Simulation - Kira
          <button style={{ ...continueButtonStyle, marginLeft: 'auto' }}>
            Continue
          </button>
        </h3>
      </div>
      <div style={sectionStyle}>
        <h3 style={headingStyle}>
          <span style={circleIconStyle}></span>
          Lesson: How do I know if I&apos;m ready?
          <button style={{ ...continueButtonStyle, marginLeft: 'auto' }}>
            Continue
          </button>
        </h3>
      </div>
      <div style={badgeContainerStyle}>
        <button
          style={{
            ...continueButtonStyle,
            marginLeft: 'auto',
            fontSize: '20px',
            backgroundColor: 'gray', // change color of Complete Button
          }}
        >
          Complete
        </button>
        <span style={{ marginLeft: '10px' }}>Badges Earned:&apos;</span>
        <div style={badgeStyle}></div>
        <div style={badgeStyle}></div>
      </div>
    </div>
  );
};

InterviewCoursePage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
