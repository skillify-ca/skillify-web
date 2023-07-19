import React, { CSSProperties } from 'react';
import PropTypes from 'prop-types';
import LandingNavbar from '../../../components/landingPage/LandingNavbar';
import Link from 'next/link';

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
    width: '100%',
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
      <ContentRow
        sectionStyle={sectionStyle}
        headingStyle={headingStyle}
        circleIconStyle={circleIconStyle}
        continueButtonStyle={continueButtonStyle}
        title={'Lesson 1: Importance of Interview Prepartion'}
        link={'interviewPrep/lesson1'}
      />
      <div style={{ ...sectionStyle, width: 'fit-content' }}>
        <h2 style={headingStyle}>Overview</h2>
      </div>
      <ContentRow
        sectionStyle={sectionStyle}
        headingStyle={headingStyle}
        circleIconStyle={circleIconStyle}
        continueButtonStyle={continueButtonStyle}
        title={'Lesson 2: Stages of the Interview'}
        link={'interviewPrep/lesson2'}
      />
      <ContentRow
        sectionStyle={sectionStyle}
        headingStyle={headingStyle}
        circleIconStyle={circleIconStyle}
        continueButtonStyle={continueButtonStyle}
        title={"Lesson 3: Employer's Expectations"}
        link={'interviewPrep/lesson3'}
      />
      <div style={{ ...sectionStyle, width: 'fit-content' }}>
        <h2 style={headingStyle}>Tell Me About Yourself</h2>
      </div>
      <ContentRow
        sectionStyle={sectionStyle}
        headingStyle={headingStyle}
        circleIconStyle={circleIconStyle}
        continueButtonStyle={continueButtonStyle}
        title={'Assignment 1: Bullet all your experiences'}
        link={'interviewPrep/assign1'}
      />
      <ContentRow
        sectionStyle={sectionStyle}
        headingStyle={headingStyle}
        circleIconStyle={circleIconStyle}
        continueButtonStyle={continueButtonStyle}
        title={'Lesson 4: How should I introduce myself?'}
        link={'interviewPrep/lesson4'}
      />
      <div style={{ ...sectionStyle, width: 'fit-content' }}>
        <h2 style={headingStyle}>Practice</h2>
      </div>
      <ContentRow
        sectionStyle={sectionStyle}
        headingStyle={headingStyle}
        circleIconStyle={circleIconStyle}
        continueButtonStyle={continueButtonStyle}
        title={'Try Yourself: Answer Behavioral Questions'}
        link={'interviewPrep/try1'}
      />
      <ContentRow
        sectionStyle={sectionStyle}
        headingStyle={headingStyle}
        circleIconStyle={circleIconStyle}
        continueButtonStyle={continueButtonStyle}
        title={'Try Yourself: Answer Experience/Technical Questions'}
        link={'interviewPrep/try2'}
      />
      <ContentRow
        sectionStyle={sectionStyle}
        headingStyle={headingStyle}
        circleIconStyle={circleIconStyle}
        continueButtonStyle={continueButtonStyle}
        title={'Try Yourself: Hands-On Coding Questions'}
        link={'interviewPrep/try3'}
      />
      <div style={{ ...sectionStyle, width: 'fit-content' }}>
        <h2 style={headingStyle}>Mock Interview</h2>
      </div>
      <ContentRow
        sectionStyle={sectionStyle}
        headingStyle={headingStyle}
        circleIconStyle={circleIconStyle}
        continueButtonStyle={continueButtonStyle}
        title={'Assignment 2: Real Interview Simulation - Kira'}
        link={'interviewPrep/assign2'}
      />
      <ContentRow
        sectionStyle={sectionStyle}
        headingStyle={headingStyle}
        circleIconStyle={circleIconStyle}
        continueButtonStyle={continueButtonStyle}
        title={"Lesson 5: How do I know if I'm ready?"}
        link={'interviewPrep/lesson5'}
      />
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

const ContentRow = ({
  sectionStyle,
  headingStyle,
  circleIconStyle,
  continueButtonStyle,
  title,
  link,
}) => {
  return (
    <div className="w-full">
      <div style={sectionStyle}>
        <h3 style={headingStyle}>
          <span style={circleIconStyle}></span>
          {title}
          <Link href={link}>
            <button style={{ ...continueButtonStyle, marginLeft: 'auto' }}>
              Continue
            </button>
          </Link>
        </h3>
      </div>
    </div>
  );
};

ContentRow.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
  headingStyle: PropTypes.object.isRequired,
  circleIconStyle: PropTypes.object.isRequired,
  continueButtonStyle: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

InterviewCoursePage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
