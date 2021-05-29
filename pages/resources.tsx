import React from "react";
import DiagnosticNavbar from "../components/DiagnosticNavbar";
import { Button } from "../components/stories/Button";
import LinkPreview from "@ashwamegh/react-link-preview";

export default function Resources(props) {
  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100 h-full">
      <DiagnosticNavbar />
      <div className="p-4 flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center bg-white shadow-lg gap-8 rounded-lg p-4">
          <p className="text-xl font-bold">Math Resources</p>
          <div className="flex flex-col gap-4 sm:max-w-3xl">
            <p>
              Math is an important part of learning for children and making sure
              they have a strong foundation in mathematics improves their
              academic performance and prepares them for success.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 m-4">
        <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
          <div>
            <a
              href="https://www.edweek.org/education/students-who-struggle-early-rarely-catch-up-study-says/2012/12"
              target="_blank"
            >
              <p className="font-bold mb-4">
                {" "}
                4 Reasons Why Math Is Important For Everyday Life
              </p>
              <p className="text-sm mb-4">
                Math helps us with real-world problem solving, helps our brains
                process information faster, and it helps us develop critical
                thinking skills.
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
                Students who have fallen far behind academically in 4th and 8th
                grade have less than a one in three chance of being ready for
                college or a career by the end of high school.{" "}
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

        <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
          <div>
            <a
              href="https://www.edweek.org/teaching-learning/kids-are-behind-in-math-because-of-covid-19-heres-what-research-says-could-help/2020/12"
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
                src="https://epe.brightspotcdn.com/dims4/default/7192e79/2147483647/strip/true/crop/1695x1150+7+0/resize/840x570!/format/webp/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.amazonaws.com%2F49%2F23%2F863695b641f897e4211cfa36c71e%2Fv40-15sr-math-research.jpg"
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
              When families cultivate children’s natural curiosity about numbers
              and shapes, they can help them develop a lifelong love of math—
              laying the foundation for academic success
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
      </div>
    </div>
  );
}
