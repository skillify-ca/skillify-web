import React from "react";
import DiagnosticNavbar from "../components/DiagnosticNavbar";
import { Button } from "../components/stories/Button";
import LinkPreview from "@ashwamegh/react-link-preview";
import Link from "next/link";

export default function divisionTopicOverview(props) {
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <DiagnosticNavbar />
      <div className="p-4 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-8 w-full">
          <div className="bg-blue-500 heropattern-architect-blue-400 rounded-xl shadow-lg flex-col text-center p-8">
            <p className="text-5xl text-white">Multiplication Topic Overview</p>
            <p className="text-xl text-white">
              Here are some insights of Multiplication. It will go through how
              Multiplication will look like in the real world, a place where
              your child can practice these essential skills, and finally an
              enviornment where you can evaluate yourself on your understanding
              of the material.
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
                <p className="font-bold mb-4"> Basic Multiplication</p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/eW2dRLyoyds?start=115"
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
                  Basic Multiplication is where it all starts! You will be have
                  a certain number of groups and a select number of items per
                  group. And it will be your job to figure how many items you
                  have in total! This is what we call <b> Multiplication</b>.
                  Let's learn this together in the video above.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
              <div>
                <p className="font-bold mb-4">
                  {" "}
                  Finding the Area of a Rectangle{" "}
                </p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/8cz_IB65pZM?start=64"
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
                  Ever wonder how big a soccer field is? Well, I have and there
                  is actually a way to find it! All we have to do is multiply
                  the length of the field by the width of the field. This is how
                  we find the <b> Area</b> of a Rectangle. We will run you
                  through this idea in the video above. Make sure to check it
                  out!
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
              <div>
                <p className="font-bold mb-4"> Exponents </p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/-zUmvpkhvW8?start=60"
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
                  What is 2 x 2? If you guessed 4 that's correct! But there's
                  another way to write 2 X 2 and that is 2^2 which also equals
                  4. Pretty cool! This is what we call an <b> Exponent</b>.
                  Exponents are similar to multiplication but are a bit
                  different. Find out how they're different in the video above!
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
                  Equal Grouping to 12 (Grade 1){" "}
                </p>
                <img
                  className="h-30 object-cover"
                  src="https://i.pinimg.com/originals/33/62/00/3362009a75d30c1da2f8afe6a9d96547.jpg"
                ></img>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg w-full p-4">
              <div>
                <p className="font-bold mb-4">
                  {" "}
                  Multiplying factors up to 12 (Grade 2)
                </p>
                <img
                  className="h-30 object-cover mt-40"
                  src="https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(42)(186).jpg"
                ></img>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg w-full p-4">
              <div className="flex flex-col">
                <p className="font-bold mb-4">
                  {" "}
                  Multiplying up to 5 X 5 (Grade 3)
                </p>
                <img
                  className="h-full w-full"
                  src="https://www.learningstreet.co.uk/wp-content/uploads/2017/05/Screen-Shot-2017-05-24-at-16.04.01.png"
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
          <div>
            <div className="bg-white flex flex-wrap flex-col">
              <img
                className="h-30 object-cover"
                src="https://teachablemath.com/wp-content/uploads/2016/05/Screenshot-2016-05-03-14.27.17-1.png"
              ></img>
              <p>
                Take a Quiz for this Topic to proceed to the next Level
                sdifjlkndshfjsdhjfhsdkfjsdhfjhdsfjhafjdshfakjsdhfsd
                dsfkjsahfhjsdlfhl dskljfasdhf sdfksdlfjsfn dsfhsdfjlhnsd
                dsjfhjskd dsifhsdj dsfnjds
              </p>
            </div>
          </div>
          <div className="w-1/3 content-center">
            <Link href={"quiz/?level="}>
              <Button backgroundColor="blue" textColor="white" label="Quiz" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
