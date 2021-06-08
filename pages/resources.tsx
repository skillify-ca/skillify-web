import React from "react";
import DiagnosticNavbar from "../components/DiagnosticNavbar";
import { Button } from "../components/stories/Button";
import LinkPreview from "@ashwamegh/react-link-preview";

export default function Resources(props) {
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <DiagnosticNavbar />
      <div className="p-4 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-8 w-full">
          <div className="bg-blue-500 heropattern-architect-blue-400 rounded-xl shadow-lg flex-col text-center p-8">
            <p className="text-5xl text-white">K-12 Free Math Resources</p>
            <p className="text-xl text-white">
              Take your child’s learning to the next level with excellent math
              resources that you can incorporate in your child's everyday life.
            </p>
          </div>
          <div className="bg-blue-200 shadow-inner flex-col p-2 rounded-lg">
            <p className="text-lg text-black">
              Engaging Math Games, Activities and Lessons
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
              <div>
                <a href="https://www.khanacademy.org/" target="_blank">
                  <p className="font-bold mb-4"> Khan Academy</p>

                  <img
                    className="h-30 object-cover"
                    src="https://cdn.kastatic.org/ka-perseus-images/d88dc482590783505610904836bb14efa6859ac0.png"
                  ></img>
                  <p className="text-sm mt-4">
                    Khan Academy offers an intensive library of videos that
                    cover math topics in a way that is easy to understand. The
                    videos are followed by practice questions to further enhance
                    students' understanding.
                  </p>
                </a>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
              <div>
                <a
                  href="https://www.k5learning.com/free-math-worksheets"
                  target="_blank"
                >
                  <p className="font-bold mb-4"> K5 Learning </p>

                  <img
                    className="h-30 object-cover"
                    src="/images/k5learning.png"
                  ></img>
                  <p className="text-sm mt-4">
                    K5 Learning offers numerous printable <b> worksheets</b> to
                    support you and your child’s learning at home. Parents also
                    have the option to track their child's progress.
                  </p>
                </a>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
              <div>
                <a href="https://www.prodigygame.com/main-en/" target="_blank">
                  <p className="font-bold mb-4"> Prodigy</p>

                  <img
                    className="h-30 object-cover"
                    src="https://i.pinimg.com/originals/60/47/3e/60473efd4ce21b4662fff6ad00cbb669.png"
                  ></img>
                  <p className="text-sm mt-4">
                    Math helps us with real-world problem solving, helps our
                    brains process information faster, and it helps us develop
                    critical thinking skills.
                  </p>
                </a>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
              <div>
                <a href="https://www.knowledgehook.com/parent/" target="_blank">
                  <p className="font-bold mb-4"> Knowledge Hook </p>

                  <img
                    className="h-30 object-cover"
                    src="/images/Knowledgehook.png"
                  ></img>
                  <p className="text-sm mt-4">
                    Knowledge hook engages students in grades 3-10 with
                    immersive game-based activities designed to improve
                    understanding.
                  </p>
                </a>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
              <div>
                <a
                  href="https://www.coolmath4kids.com/math-games"
                  target="_blank"
                >
                  <p className="font-bold mb-4"> Cool Math 4 Kids</p>
                  <img
                    className="h-30 object-cover"
                    src="https://student-tutor.com/wp-content/uploads/2018/06/Screen-Shot-2018-06-13-at-5.09.21-PM-1024x553.png"
                  ></img>
                  <p className="text-sm mt-4">
                    Cool Math 4 Kids has interactive math games for grades K-6
                    that can be sorted by grade and topic. The site makes math
                    more engaging with lessons, quizzes, brain teasers and
                    manipulatives to play with.
                  </p>
                </a>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
              <div>
                <a href="https://www.abcya.com/" target="_blank">
                  <p className="font-bold mb-4"> ABCya </p>

                  <img
                    className="h-30 object-cover"
                    src="https://i.pinimg.com/originals/29/10/b5/2910b55524e0b540a2959a9a978f0264.png"
                  ></img>
                  <p className="text-sm mt-4">
                    ABCya includes many games for grades K-5 covering math
                    skills that align to classroom standards and has several
                    videos that encourage hands-on arts and crafts activities at
                    home
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-blue-200 shadow-inner rounded-lg flex-col p-2 grid-cols-none">
            <p className="text-lg text-black">
              {" "}
              Insightful Math Articles, Podcasts, and Videos{" "}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-4 w-full">
              <div className="h-96 overflow-scroll">
                <a
                  className="twitter-timeline"
                  href="https://twitter.com/MathChampCA?ref_src=twsrc%5Etfw"
                >
                  Tweets by MathChampCA
                </a>{" "}
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charSet="utf-8"
                ></script>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
              <div>
                <a
                  href="https://www.mathnasium.ca/reasons-why-math-is-important-in-everyday-life"
                  target="_blank"
                >
                  <p className="font-bold mb-4">
                    {" "}
                    4 Reasons Why Math Is Important For Everyday Life
                  </p>
                  <p className="text-sm mb-4">
                    Math helps us with real-world problem solving, helps our
                    brains process information faster, and it helps us develop
                    critical thinking skills.
                  </p>
                  <img
                    className="h-30 object-cover"
                    src="https://s3.amazonaws.com/www.mathnasium.com/upload/798/images/Young%20girl%20doing%20math%20work%20on%20whiteboard.jpg"
                  ></img>
                </a>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg w-full p-4">
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

            <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
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

            <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
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

            <div className="bg-white shadow-lg rounded-lg p-4 h-full">
              <div className="flex flex-col gap-4">
                <p className="font-bold">
                  {" "}
                  Two Strategies to Help Your Child Learn to Love Math
                </p>
                <p className="text-sm">
                  When families cultivate children’s natural curiosity about
                  numbers and shapes, they can help them develop a lifelong love
                  of math— laying the foundation for academic success
                </p>
                <iframe
                  height="300"
                  src="https://www.youtube-nocookie.com/embed/Wpf1AwRRAR0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
