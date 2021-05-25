import React from "react";
import DiagnosticNavbar from "../components/DiagnosticNavbar";
import { Button } from "../components/stories/Button";
import LinkPreview from "@ashwamegh/react-link-preview";

export default function Resources(props) {
  function CustomComponent({ loading, preview }) {
    console.log(preview);
    return loading ? (
      <h1>Loading...</h1>
    ) : (
      <div className="flex flex-col justify-center">
        <p className="font-bold"> {preview.title}</p>
        <p> {preview.description}</p>
        <img
          className="h-28 object-cover"
          src={preview.img}
          alt={preview.title}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <DiagnosticNavbar />
      <div className="p-4 flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center bg-white shadow-lg gap-8 rounded-lg p-4">
          <p className="text-xl font-bold">Math Champ Tools</p>
          <div className="flex flex-col gap-4 sm:max-w-2xl">
            <p>
              Math Champ is developing a suite of online math activities and
              games to help your child become better at math. Enter your email
              to be notified when they become available.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="bg-white shadow-lg rounded-lg w-full p-4">
            <div className="flex flex-col gap-4">
              <p className="font-bold">Practice Tracker</p>
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
              <div className="bg-white flex sm:flex-row gap-4 items-center rounded-lg">
                <input
                  id="guess"
                  type="text"
                  autoComplete="off"
                  className={`text-left p-2 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md`}
                  placeholder="Email"
                />
                <Button
                  backgroundColor="blue"
                  textColor="white"
                  label="Notify Me"
                />
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg w-full p-4">
            <div className="flex flex-col gap-4">
              <p className="font-bold">Math Battle</p>
              <div>
                <iframe
                  src="https://open.spotify.com/embed-podcast/episode/6GrIwaNhZZUoq1Xb7kfK4c"
                  width="100%"
                  height="232"
                  frameBorder="0"
                  allowTransparency={true}
                  allow="encrypted-media"
                ></iframe>
              </div>
              <div className="bg-white flex sm:flex-row gap-4 items-center rounded-lg">
                <input
                  id="guess"
                  type="text"
                  autoComplete="off"
                  className={`text-left p-2 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md`}
                  placeholder="Email"
                />
                <Button
                  backgroundColor="blue"
                  textColor="white"
                  label="Notify Me"
                />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg w-full p-4">
            <div className="flex flex-col gap-4">
              <div>
                <a href="https://www.educationnext.org/addressing-significant-learning-loss-in-mathematics-during-covid-19-and-beyond/">
                  <LinkPreview
                    url="https://www.educationnext.org/addressing-significant-learning-loss-in-mathematics-during-covid-19-and-beyond/"
                    render={CustomComponent}
                  />
                </a>
              </div>
              <div className="bg-white flex sm:flex-row gap-4 items-center rounded-lg">
                <input
                  id="guess"
                  type="text"
                  autoComplete="off"
                  className={`text-left p-2 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md`}
                  placeholder="Email"
                />
                <Button
                  backgroundColor="blue"
                  textColor="white"
                  label="Notify Me"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
