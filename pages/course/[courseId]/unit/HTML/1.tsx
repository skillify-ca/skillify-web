import React, { useState } from "react";
import Card from "../../../../../components/coding/Card";
import Navbar from "../../../../../components/Navbar";
import { Button } from "../../../../../components/ui/Button";
import EmojiSlider from "../../../../../components/ui/EmojiSlider";

const HTML1 = () => {
  const [emoji, setEmoji] = useState(0);
  const setEmojiCallback = (val: number) => {
    setEmoji(val);
  };
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-1 bg-white p-8 m-8 space-y-4">
        <h1 className="font-bold text-5xl">HTML 1</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-white space-y-4">
          <div className="flex flex-col space-y-4">
            <p className="font-bold">Lesson</p>
            <p>
              HTML is a basic language that all web pages are built on top of.
              HTML stands for Hyper Text Markup Language. Just like any other
              language, HTML is made up of a limited number of words that mean
              different things. You will gain experience with all the possible
              HTML elements over time.
            </p>

            <div className="p-4">
              <Card
                title={"W3Schools HTML tutorial"}
                image={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png"
                }
                description={
                  "A good starting tutorial is the W3Schools website. Start at the beginning and stop after you complete the Lists section."
                }
                link={"https://www.w3schools.com/html/default.asp"}
              />
            </div>
          </div>
          <iframe
            width="560"
            className="w-full"
            height="315"
            src="https://www.youtube.com/embed/Hjl6gbg9kmk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className="font-bold">Assignment</p>

        <p>
          After you complete the tutorial create your own index.html file and
          build a simple web page. Your page should include texts, images and
          lists. Upload it to group channel on Slack.
        </p>
        <p className="font-bold">Previous Assignments</p>
        <p className="">
          You can look at how these pages were build by navigating to the page
          and right-clicking on it. Select View Page Source to see the HTML code
          that makes up the web page.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <a className="underline text-blue-600" href="/coding/foodblog.html">
              Food Blog
            </a>
            <iframe
              src="/coding/foodblog.html"
              className="w-full h-96 p-4 bg-white shadow-lg border-4 border-purple-400"
            />
          </div>
          <div>
            <a className="underline text-blue-600" href="/coding/nba.html">
              NBA Blog
            </a>
            <iframe
              src="/coding/nba.html"
              className="w-full h-96 p-4 bg-white shadow-lg border-4 border-purple-400"
            />
          </div>
          <div className="rounded-lg bg-blue-200">
            <p className="font-semibold text-2xl text-center">
              {" "}
              Rate your Confidence
            </p>
            <EmojiSlider callback={setEmojiCallback} />
            <div className="flex justify-center">
              <Button
                label={"Save"}
                backgroundColor="blue"
                textColor="white"
              ></Button>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HTML1;
