import React from 'react';
import PropTypes from 'prop-types';
import LandingNavbar from '../../../components/landingPage/LandingNavbar';
import Link from 'next/link';

const InterviewCoursePage = () => {
  return (
    <div>
      <InterviewPrepCourse />
    </div>
  );
};

const InterviewPrepCourse = () => {
  const progressBarStyle = 'h-2 bg-gray-300 mt-4 mb-8';
  const sectionStyle = 'border rounded mb-4 p-4 w-full';
  const headingStyle =
    'flex items-center justify-between px-4 mb-4 whitespace-nowrap';
  const continueButtonStyle =
    'border rounded px-4 py-2 text-sm font-bold bg-gray-500 text-white cursor-pointer';
  const circleIconStyle = 'w-3 h-3 rounded-full bg-black mr-2';

  const badgeStyle = 'w-8 h-8 rounded-full bg-gray-500 mr-2';

  const badgeContainerStyle = 'flex items-center mt-4';

  return (
    <div className="max-w-3xl mx-auto">
      <div className={progressBarStyle}>
        <div className="h-full bg-green-500" style={{ width: '60%' }}></div>
      </div>

      <div className={sectionStyle}>
        <h2 className={headingStyle}>Introduction</h2>
      </div>

      <ContentRow
        sectionStyle={sectionStyle}
        headingStyle={headingStyle}
        circleIconStyle={circleIconStyle}
        continueButtonStyle={continueButtonStyle}
        title={'Lesson 1: Importance of Interview Preparation'}
        link={'interviewPrep/lesson1'}
      />

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

      <div className={sectionStyle}>
        <h2 className={headingStyle}>Tell Me About Yourself</h2>
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

      <div className={sectionStyle}>
        <h2 className={headingStyle}>Practice</h2>
      </div>

      <ContentRow
        sectionStyle={sectionStyle}
        headingStyle={headingStyle}
        circleIconStyle={circleIconStyle}
        continueButtonStyle={continueButtonStyle}
        title={'Try Yourself: Behavioral Questions'}
        link={'interviewPrep/try1'}
      />

      <ContentRow
        sectionStyle={sectionStyle}
        headingStyle={headingStyle}
        circleIconStyle={circleIconStyle}
        continueButtonStyle={continueButtonStyle}
        title={'Try Yourself: Technical Questions'}
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

      <div className={sectionStyle}>
        <h2 className={headingStyle}>Mock Interview</h2>
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

      <div className={badgeContainerStyle}>
        <Link href="./studentPortal">
          <button className={continueButtonStyle}>Complete</button>
        </Link>
        <span className="ml-4">Badges Earned:</span>
        <div className={badgeStyle}></div>
        <div className={badgeStyle}></div>
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
      <div className={sectionStyle}>
        <h3 className={headingStyle}>
          <span className={circleIconStyle}></span>
          {title}
          <Link href={link}>
            <button className={`${continueButtonStyle} ml-auto`}>
              Continue
            </button>
          </Link>
        </h3>
      </div>
    </div>
  );
};

ContentRow.propTypes = {
  sectionStyle: PropTypes.string.isRequired,
  headingStyle: PropTypes.string.isRequired,
  circleIconStyle: PropTypes.string.isRequired,
  continueButtonStyle: PropTypes.string.isRequired,
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

export default InterviewCoursePage;
