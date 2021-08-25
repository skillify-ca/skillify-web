import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import googleClassroomImg from "../public/images/assignments/google-classroom.svg";
import { resources } from "./api/resources";

export default function Resources(props) {
  return (
    <div className="flex flex-col overflow-auto bg-scroll bg-blue-50">
      <Navbar />
      <div className="w-full shadow-lg bg-blue-100 p-4">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-around">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            <span className="block">Ready to engage your students?</span>
            <span className="block text-blue-600">
              Create your Math Champ assignment today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/assignment-creator"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <div className="flex gap-4 items-center">
                  <p>Create Assignment</p>
                  <Image src={googleClassroomImg} height="32" width="32" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center border-b-4 border-blue-800">
            <p className="text-2xl font-bold p-4">Math Champ Picks</p>
            <p className="text-sm text-blue-500 hover:underline cursor-pointer">
              See More
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-8">
            {resources.slice(0, 3).map((resource) => (
              <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain duration-500 transition ease-in-out transform hover:scale-110">
                <div>
                  <a href={resource.link} target="_blank">
                    <p className="font-bold mb-4">{resource.title}</p>

                    <img
                      className="h-30 object-cover"
                      src={resource.imageUrl}
                    ></img>
                    <p className="text-sm mt-4">{resource.description}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center border-b-4 border-blue-800">
            <p className="text-2xl font-bold p-4">Research and News</p>
            <p className="text-sm text-blue-500 hover:underline cursor-pointer">
              See More
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-8">
            <div className="bg-white shadow-lg rounded-lg w-full p-4 duration-500 transition ease-in-out transform hover:scale-110">
              <div className="h-80 flex flex-col">
                <p className="font-bold mb-4">
                  {" "}
                  Why Diagnostics Should Drive Your Instruction - Making Math
                  Moments That Matter{" "}
                </p>
                <p className="mb-4 italic text-sm">
                  {" "}
                  "Doing the diagnostics, you get to see who your kids are as
                  individuals, how they think" - Kat Hendry{" "}
                </p>
                <iframe
                  src="https://open.spotify.com/embed-podcast/episode/6GrIwaNhZZUoq1Xb7kfK4c"
                  frameBorder="0"
                  allowTransparency={true}
                  allow="encrypted-media"
                ></iframe>
                <a
                  href="https://makemathmoments.com/episode125/"
                  target="_blank"
                  className="mt-4 underline text-sm text-blue-500"
                >
                  {" "}
                  Full Transcript
                </a>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain duration-500 transition ease-in-out transform hover:scale-110">
              <div>
                <a
                  href="https://www.edweek.org/education/students-who-struggle-early-rarely-catch-up-study-says/2012/12"
                  target="_blank"
                >
                  <p className="font-bold mb-4">
                    {" "}
                    Students Who Struggle Early Rarely Catch Up, Study Says
                  </p>
                  <p className="text-sm mb-4">
                    {" "}
                    Students who have fallen far behind academically in 4th and
                    8th grade have less than a one in three chance of being
                    ready for college or a career by the end of high school.{" "}
                  </p>
                  <img src="https://ahchealthenewscdn.azureedge.net/wp-content/uploads/2014/03/140303362.jpg"></img>
                </a>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain duration-500 transition ease-in-out transform hover:scale-110">
              <div>
                <a
                  href="https://www.educationnext.org/addressing-significant-learning-loss-in-mathematics-during-covid-19-and-beyond/"
                  target="_blank"
                >
                  <p className="font-bold mb-4">
                    {" "}
                    Addressing Significant Learning Loss in Mathematics During
                    Covid-19 and Beyond
                  </p>
                  <p className="text-sm mb-4">
                    {" "}
                    The pandemic has amplified existing skill gaps, but new
                    strategies and new tech could help{" "}
                  </p>
                  <img
                    height="300"
                    src="https://www.educationnext.org/wp-content/uploads/2021/01/jan21-blog-rose-math.png"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
