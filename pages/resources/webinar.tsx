import React, { useState } from "react";
import SEO from "../../components/SEO";
import EmailCapture from "../../components/landingPage/EmailCapture";
import LandingNavbar from "../../components/landingPage/LandingNavbar";
import { logToSlack } from "../api/slack/slackLogger";

export default function WebinarPage() {
  const onSubmitClick = (name, email) => {
    setShowData(true);
    logToSlack(`New Guide Signup: ${name} - ${email}`);
  };
  const [showData, setShowData] = useState(false);

  return (
    <div>
      <SEO
        title={"Breaking into Tech Webinar"}
        description={
          "This guide teaches you our top strategies for learning how to code"
        }
        image={"https://melv1n.com/img/learn-to-code-how-to-start.png"}
      />
      <div className="flex flex-col bg-white">
        <LandingNavbar />
        <div className="w-full mx-auto bg-slate-50 max-w-7xl">
          <div className="flex flex-col py-4 text-white item s-center bg-murkrow">
            <h1 className="my-4 text-3xl font-bold text-center">
              How University Graduates Can Learn Coding And Become A Software
              Developer using the Skillify Blueprint In Just 6 Months.
            </h1>
            <p className="text-center">
              Even if your degree had nothing to do with tech and you have no
              coding experience.
            </p>
          </div>
          <div className="h-[720px]">
            {showData ? (
              <div>
                {/* show learn to code pdf in iframe */}
                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe
                    src="https://player.vimeo.com/video/767066466?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    title="webinar-video.mp4"
                  ></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </div>
            ) : (
              <EmailCapture
                headerText={[
                  { text: "Get our" },
                  { text: "FREE training for ", highlight: true },
                  { text: "learning to code and starting a career in " },
                  { text: "tech ", highlight: true },
                ]}
                description={
                  "Think learning to code is too hard? Enter your email address to access our free training on breaking into tech."
                }
                onSubmit={onSubmitClick}
              />
            )}
          </div>
          <div className="p-8 bg-gray-200 border-t-2">
            <h2 className="mb-4 text-3xl font-bold text-center">
              What You'll Learn
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="flex flex-col items-center p-4 m-4 transition-all transform bg-white rounded-lg shadow-lg hover:scale-110">
                <p className="mb-4 text-5xl">💼</p>
                <p>
                  <b>PART ONE:</b> The 7 biggest mistakes beginners make when
                  learning to code that cost them time and money
                </p>
              </div>
              <div className="flex flex-col items-center p-4 m-4 transition-all transform bg-white rounded-lg shadow-lg hover:scale-110">
                <p className="mb-4 text-5xl ">💡</p>
                <p>
                  <b>PART TWO:</b> The secret strategy to landing your first job
                  in tech
                </p>
              </div>
              <div className="flex flex-col items-center p-4 m-4 transition-all transform bg-white rounded-lg shadow-lg hover:scale-110">
                <p className="mb-4 text-5xl ">🏫</p>
                <p>
                  <b>PART THREE:</b> How to build a wildly successful learning
                  strategy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

WebinarPage.getLayout = function getLayout(page) {
  return <div className="theme-default">{page}</div>;
};
