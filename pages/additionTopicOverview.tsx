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
            <p className="text-5xl text-white">Addition Topic Overview</p>
            <p className="text-xl text-white">
              Here are some insights of Addition. It will go through how
              Addition will look like in the real world, a place where your
              child can practice these essential skills, and finally an
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
                <p className="font-bold mb-4"> Basic Addition</p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/uONIJ5TQ2DA?start=19"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                <img
                  className="h-30 object-cover mt-12"
                  src="https://www.theschoolrun.com/sites/theschoolrun.com/files/content-images/addition_column_method.png"
                ></img>
                <p className="text-sm mt-8 border-2 border-purple-400">
                  Basic Additions is where it all starts! If you had 10 cookies
                  and your mother gives you 4 more, we can use <b> Addition </b>{" "}
                  to figure out how many cookies are left. Let's look at more
                  examples in the video above!
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
              <div>
                <p className="font-bold mb-4"> Addition vs Multiplication </p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/NVhA7avdTAw?start=5"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <img
                  className="h-30 object-cover w-full"
                  src="https://study.com/cimages/videopreview/videopreview-full/ul9t4di046.jpg"
                ></img>
                <p className="text-sm mt-8 border-2 border-purple-400">
                  You may already have leraned multiplication before but if you
                  haven't it's an upgraded verion of addition! The expression 2
                  + 2 + 2 can now be written using multiplication as 2 x 3. This
                  helps us reduce repetion in addition. Learn all the cool stuff
                  you can do with multiplication in the video above!
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
              <div>
                <p className="font-bold mb-4"> Order of Operations </p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/tyrz0EJ0InQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <img
                  className="h-30 object-cover mt-10"
                  src="https://s3-eu-west-1.amazonaws.com/s2.thingpic.com/images/4q/oUoYhHgxAWmNdShqi3DHLa3L.png"
                ></img>
                <p className="text-sm mt-4 border-2 border-purple-400">
                  What's does 2 + 3 x 4 = ? Did you get 20? Or did you get 14?
                  That all depends on what operation you evaluated first. There
                  is actually an order to follow when solving math problems with
                  more than 1 operation. This conecpt is called{" "}
                  <b> Order of Operations</b>. Learn more in the video above!
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href={"video/"}>
                <Button
                  backgroundColor="purple"
                  textColor="white"
                  label="Videos"
                />
              </Link>
            </div>
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
                  Adding Single Digit Numbers (Grade 1){" "}
                </p>
                <img
                  className="h-30 object-cover"
                  src="https://www.broadwater.w-sussex.sch.uk/_data/site/20/pg/366/8.jpg"
                ></img>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg w-full p-4">
              <div>
                <p className="font-bold mb-4">
                  {" "}
                  Adding Double Digit Numbers (Grade 2)
                </p>
                <img
                  className="h-30 object-cover"
                  src="https://raw.githubusercontent.com/qknow/images/gh-pages/primary/MATHS/CLASS%203/numbers%20and%20numerals/ADDTION%20-%202DIGITS.png"
                ></img>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg w-full p-4">
              <div className="flex flex-col">
                <p className="font-bold mb-4">
                  {" "}
                  Adding Triple Digit Numbers (Grade 3)
                </p>
                <img
                  className="h-full w-full"
                  src="https://raw.githubusercontent.com/qknow/images/gh-pages/primary/MATHS/CLASS%203/numbers%20and%20numerals/ADDTION%20-%203DIGITS1.png"
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
