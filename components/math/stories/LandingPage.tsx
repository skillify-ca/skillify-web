import Link from "next/link";
import React, { useState } from "react";
import { createWordProblemModel } from "../../../pages/api/WordProblemModel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const LandingPage = () => {
  const [wordProblem, setWordProblem] = useState(createWordProblemModel("+"));

  const onSubmit = () => {
    setWordProblem(createWordProblemModel("+"));
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-xl p-4 gap-8">
        <div className="flex flex-col w-full sm:w-1/2 gap-8">
          <p className="text-5xl">Math Champ Practice Tracker</p>
          <p className="text-xl">
            Make math fun to practice! Learning with Math Champ is engaging and
            fun. Student will earn points for correct answers, play with friends
            and level up. Our curriculum-based lessons are effective and
            efficient. Start with our diagnostic test so we can help your child
            learn at whatever level they're at.
          </p>
          <div className="flex gap-8">
            <Link href="/diagnostic">
              <button className="text-white text-xl from-blue-500 via-blue-500 to-blue-500 border-blue-900 hover:from-blue-400 bg-gradient-to-b px-8 py-4 font-bold border-b-4 rounded-xl active:border-b-2">
                Try Now For FREE
              </button>
            </Link>
          </div>
        </div>
        <img
          className="w-full sm:w-1/2 object-cover"
          alt="student-image"
          src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDEzNDF8MHwxfHNlYXJjaHwxMDZ8fG1hdGh8ZW58MHx8fA&ixlib=rb-1.2.1&q=85&w=528&dpr=2"
        />
      </div>
      <div className="bg-blue-500 heropattern-architect-blue-400 rounded-xl shadow-lg flex-col text-center p-8">
        <p className="text-5xl text-white">K-12 Math Activities and Quizzes</p>
        <p className="text-xl text-white">
          Help your students feel more confident with numbers with content
          aligned to the Canadian curriculum
        </p>
      </div>
      <div className="bg-white shadow-lg flex flex-col sm:flex-row justify-between rounded-lg">
        <div className="flex flex-col gap-4 p-8 sm:w-1/2 bg-blue-50">
          <p className="font-bold">Step 1</p>
          <p className="font-bold text-xl">Assess your child</p>
          <p>
            During this quick assessment, your child will answer 12 questions
            from the Ontario curriculum.
          </p>
        </div>
        <div className="sm:w-1/2 m-4 p-4">
          <div>
            <Slider {...settings}>
              <div className="outline-none">
                <img
                  src="/images/wordProblem1.png"
                  className="w-full sm:w-1/2 m-auto"
                ></img>
              </div>
              <div className="outline-none">
                <img
                  src="/images/equalGroups.png"
                  className="w-full sm:w-1/2 m-auto"
                ></img>
              </div>
              <div className="outline-none">
                <img
                  src="/images/multiArrays.png"
                  className="w-full sm:w-1/2 m-auto"
                ></img>
              </div>
              <div className="outline-none">
                <img
                  src="/images/trueFalse.png"
                  className="w-full sm:w-1/2 m-auto"
                ></img>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 shadow-lg flex flex-col sm:flex-row justify-between rounded-lg">
        <div className="w-full sm:w-1/2 h-64 flex flex-col justify-center items-center gap-8 bg-white p-8">
          <div className="sm:w-96">
            <img src="/images/step2.png" />
          </div>
        </div>
        <div className="flex flex-col gap-4 p-8 sm:w-1/2">
          <p className="font-bold">Step 2</p>
          <p className="font-bold text-xl">
            Support your child&apos;s independence{" "}
          </p>
          <p>
            Your child can select from various modes and activities to help them
            learn, practice, and self-assess on the Ontario curriculum. Students
            can work at their own pace as they unlock new skills and levels.
          </p>
        </div>
      </div>
      <div className="bg-white shadow-lg flex flex-col sm:flex-row justify-between rounded-lg">
        <div className="flex flex-col gap-4 p-8 sm:w-1/2 bg-blue-50">
          <p className="font-bold">Step 3</p>
          <p className="font-bold text-xl">Get Your Personalized Reports</p>
          <p>
            Your customized Math Champ report will give you weekly insights and
            the supplemental resources you need for your child.
          </p>
        </div>
        <div className="sm:w-1/2">
          <img
            src="/diagnostic/diagnostic-sample-report.gif"
            className="sm:rounded-r-lg rounded-tr-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;