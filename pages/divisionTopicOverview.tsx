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
            <p className="text-5xl text-white">Division Topic Overview</p>
            <p className="text-xl text-white">
              Here are some insights on Divison. It will go through how Divison
              will look like in the real world, a place where you can practice
              these essential skills, and finally an enviornment where your
              child can be evaluated on their understanding of the material.
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
                <p className="font-bold mb-4"> Basic Division</p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/biwYDuCHwXo?start=7"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                <img
                  className="h-30 object-cover mt-12"
                  src="https://www.enchantedlearning.com/math/divide/visual/fishintanks.png"
                ></img>
                <p className="text-sm mt-8 border-2 border-purple-400">
                  Basic Divison is where it all starts! You will be given a
                  select number of items and it will be your job to seperate
                  them into equal groups. This procedure is what we call
                  <b> Division</b> and is one of the 4 primary operations.
                </p>
                <img
                  className="h-30 object-cover mt-12"
                  src="https://www.smartick.com/blog/wp-content/uploads/division_pastelitos.png"
                ></img>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
              <div>
                <p className="font-bold mb-4"> Division with Remainders </p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/KGMf314LUc0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <img
                  className="h-30 object-cover w-full"
                  src="https://satprepget800.com/wp-content/uploads/2013/03/remainder.png"
                ></img>
                <p className="text-sm mt-8 border-2 border-purple-400">
                  What happens if we have 7 cookies and 2 friends? Will the
                  cookies divide equally for all 2 friends? They won't be able
                  to to divide equally. We will have 1 cookie leftover. This
                  cookie leftover is what we call a <b> Remainder</b>. Check out
                  the video above to learn more about remainders and how they
                  work!
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
              <div>
                <p className="font-bold mb-4"> Fractions </p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/362JVVvgYPE?start=97"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <img
                  className="h-30 object-cover"
                  src="https://teachablemath.com/wp-content/uploads/2016/05/Screenshot-2016-05-03-14.27.17-1.png"
                ></img>
                <p className="text-sm mt-4 border-2 border-purple-400">
                  What if we only had 1 cookie and we wanted to share it with
                  each other. How would we do it? We would split the cookie is 2
                  halves and you will get 1 half and I will get 1 half. This is
                  what we call
                  <b> Fractions</b>. If you have siblings you probably already
                  sharing you cookies with them. So knowing your fractions will
                  help you a lot!
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
            <div className="bg-white shadow-lg rounded-lg p-4 w-full">
              <div>
                <p className="font-bold mb-4">
                  {" "}
                  Equal Sharing to 12 (Grade 1){" "}
                </p>
                <img
                  className="h-30 object-cover"
                  src="https://pbs.twimg.com/media/EW6u028WkAIAqz9.jpg"
                ></img>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
              <div>
                <p className="font-bold mb-4">
                  {" "}
                  Divide equally to 12 (Grade 2)
                </p>
                <img
                  className="h-30 object-cover mt-10"
                  src="https://oercommons.s3.amazonaws.com/media/editor/60284/fullsizeoutput_2165.jpeg"
                ></img>
                <img
                  className="h-30 object-cover mt-10"
                  src="https://www.arcmath.in/wp-content/uploads/elementor/thumbs/Division-as-Equal-Sharing-and-Equal-Grouping-p4hyxm3n648ghz0jkber0rlhnfbdm7ywye9m9r4drg.png
                  "
                ></img>
                <img
                  className="h-30 object-cover mt-10"
                  src=" https://www.tunstallsteachingtidbits.com/wp-content/uploads/2016/04/IMG_2402-800x533.jpg"
                ></img>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg w-full p-4">
              <div className="flex flex-col">
                <p className="font-bold mb-4">
                  {" "}
                  Divide equally to 100 (Grade 3)
                </p>
                <img
                  className="h-full w-full"
                  src="https://cdn.inchcalculator.com/wp-content/uploads/2020/07/long-division-parts.png"
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
                Take a quiz to test out your Division Skills. The topics we'll
                cover are based on your grade level. So it's completly
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
