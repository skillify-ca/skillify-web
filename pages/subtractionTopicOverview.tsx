import React from "react";
import DiagnosticNavbar from "../components/DiagnosticNavbar";
import { Button } from "../components/stories/Button";
import Link from "next/link";

export default function subtractionTopicOverview(props) {
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <DiagnosticNavbar />
      <div className="p-4 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-8 w-full">
          <div className="bg-blue-500 heropattern-architect-blue-400 rounded-xl shadow-lg flex-col text-center p-8">
            <p className="text-5xl text-white">Subtraction Topic Overview</p>
            <p className="text-xl text-white">
              Here are some insights on Subtraction. It will go through how
              Subtraction will look like in the real world, a place where you
              can practice these essential skills, and finally an enviornment
              where you can evaluate yourself on your understanding of the
              material.
            </p>
          </div>
          <div className="bg-purple-300 shadow-inner flex-col p-2 grid-cols-none">
            <p className="text-xl text-white bg-purple-700 text-center">
              {" "}
              A Look Into The Future{" "}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
              <div>
                <p className="font-bold mb-4"> Basic Subtraction</p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ug0gs8kLE48?start=94"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                <img
                  className="h-30 object-cover mt-12"
                  src="https://study.com/cimages/videopreview/videopreview-full/ul9t4di046.jpg"
                ></img>
                <p className="text-sm mt-8 border-2 border-purple-400">
                  Basic Subtraction is where it all starts! If you had 10
                  cookies and your little brother steals 4 of them we can use{" "}
                  <b> Subtraction</b> to figure out how many cookies are left.
                  Let's look at more examples in the video above!
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
              <div>
                <p className="font-bold mb-4"> Subtracting Decimal Numbers </p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/I4Xt136E1ZQ?start=50"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <img
                  className="h-30 object-cover w-full"
                  src="https://cdn.tutors.com/assets/images/courses/math/geometry-help/how-to-find-the-area-of-a-rectangle-2.jpg"
                ></img>
                <p className="text-sm mt-8 border-2 border-purple-400">
                  We all know what whole numbers are but what are decimal
                  numbers and how can we subtract them? Decimal numbers are just
                  a small part of whole numbers and we can actually add,
                  subtract, multiply and even divide using them! Check out the
                  video on <b> Subtracting Decimal Numbers</b>
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
              <div>
                <p className="font-bold mb-4"> Negative numbers </p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/6U1kCOuNpR4?start=50"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <img
                  className="h-30 object-cover"
                  src="https://study.com/cimages/multimages/16/3_squared.png"
                ></img>
                <p className="text-sm mt-4 border-2 border-purple-400">
                  Ever wonder why Canada have negative temperatures in the
                  winters? That's what we call <b>Negative Numbers</b> or
                  numbers that are less than 0. We can do very interesting
                  things with negative numbers and you'll see some in the video
                  above!
                </p>
              </div>
            </div>
            <Link href={"video/"}>
              <Button
                backgroundColor="purple"
                textColor="white"
                label="Videos"
              />
            </Link>
          </div>

          <div className="bg-green-300 shadow-inner flex-col p-2 grid-cols-none">
            <p className="text-xl text-white bg-green-700 text-center">
              {" "}
              Skills Catalog for Students{" "}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg w-full p-4">
              <div>
                <p className="font-bold mb-4">
                  {" "}
                  Subtracting Single Digit Numbers (Grade 1){" "}
                </p>
                <img
                  className="h-30 object-cover"
                  src="https://www.megaworkbook.com/images/content/Maths/Subtraction/1_to_10/Subtraction_Using_Objects/Subtraction_1_to_10_Worksheet_06.png"
                ></img>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg w-full p-4 h-full">
              <div>
                <p className="font-bold mb-4">
                  {" "}
                  Subtracting Double Digit Numbers (Grade 2)
                </p>
                <img
                  className="h-full w-full object-cover"
                  src="https://i.pinimg.com/originals/3e/7b/2e/3e7b2efc82139dd2f7d73e87bf6d9c75.jpg"
                ></img>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg w-full p-4">
              <div className="flex flex-col">
                <p className="font-bold mb-4">
                  {" "}
                  Subtracting Triple Digit Numbers (Grade 3)
                </p>
                <img
                  className="h-full w-full"
                  src="https://i.pinimg.com/474x/16/a9/62/16a96233c5548007806421bb68bbb773--three-digit-subtraction-with-regrouping-anchor-chart-three-digit-addition.jpg"
                ></img>
              </div>
            </div>
            <Link href={"statements/?level="}>
              <Button
                backgroundColor="green"
                textColor="white"
                label="Practice"
              />
            </Link>
          </div>
          <div className="bg-blue-300 shadow-inner flex-col p-2">
            <p className="text-xl text-white bg-blue-700 text-center">
              {" "}
              Time to Quiz Yourself{" "}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-xl p-4 gap-8">
            <div className="flex flex-col w-full sm:w-1/2 gap-8">
              <p className="text-5xl"> Quiz Time!</p>
              <p className="text-xl">
                Take a quiz to test out your Subtraction Skills. The topics
                we'll cover are based on your grade level. So it's completly
                personalized! You can take the quiz as many times as you wish to
                perfect your skills. Good luck, you got this!
              </p>
              <div className="flex gap-8">
                <div className="text-white text-xl border-blue-900 font-bold rounded-xl">
                  <Link href={"quiz/?level="}>
                    <Button
                      backgroundColor="blue"
                      textColor="white"
                      label="Quiz Yourself"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <img
              className="w-full sm:w-1/2 object-cover"
              alt="student-image"
              src="https://knowledgeone.ca/wp-content/uploads/2018/11/online-readiness-01.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
