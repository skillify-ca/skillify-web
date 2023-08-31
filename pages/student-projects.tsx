import React from "react";
import LandingNavbar from "../components/landingPage/LandingNavbar";

const StudentProjectsPage = () => {
  return (
    <div>
      <LandingNavbar />
      <div className="flex flex-col items-center justify-center space-y-2 py-8">
        <h1 className="text-charmander text-4xl font-bold text-center mb-20">
          Student Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center relative"></div>
          <div className="flex flex-col items-center relative"></div>
          <div className="flex flex-col items-center relative"></div>

          <div className="flex flex-col items-center relative">
            <div className="bg-zinc-400 h-80 w-72 flex flex-col justify-center items-center rounded-lg shadow-lg">
              <h1>Stock News</h1>
            </div>
            <img
              className="rounded-full h-16 w-16 -mt-8 absolute z-10"
              src="/images/landingPage/raveen.jpg"
            />
            <h1 className="mt-2 text-center text-xl text-charmander">
              Stock News
            </h1>
            <h1>Raveen R.</h1>
          </div>

          <div className="flex flex-col items-center relative">
            <div
              className="bg-charmander h-80 w-72 flex flex-col justify-center items-center rounded-lg shadow-md"
              style={{
                backgroundImage:
                  'url("https://media.istockphoto.com/vectors/comment-writing-icon-feedback-review-submit-orange-color-vector-vector-id1215688195?k=6&m=1215688195&s=612x612&w=0&h=nhTK8Y_uIWiswdmbQrPLzKA37Ao5KR4GZZDJ5BFn6v0=")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div>Project Feedback </div>
            </div>
            <img
              className="rounded-full h-16 w-16 -mt-8 absolute z-10"
              src="/images/landingPage/raveen.jpg"
            />
            <h1 className="mt-2 text-center text-xl text-charmander">
              PlaceHolder
            </h1>
            <h1>Place Holder</h1>
          </div>

          <div className="flex flex-col items-center relative">
            <div className="bg-black-500 h-80 w-72 flex flex-col justify-center items-center rounded-lg shadow-xl text-white">
              <div>Interview </div>
            </div>
            <img
              className="rounded-full h-16 w-16 -mt-8 absolute z-10"
              src="/images/landingPage/raveen.jpg"
            />
            <h1 className="mt-2 text-center text-xl text-charmander">
              PlaceHolder
            </h1>
            <h1>PlaceHolder</h1>
          </div>
          <div>
            <div className="flex flex-col items-center relative">
              <div className="bg-yellow-500 h-80 w-72 flex flex-col justify-center items-center rounded-lg shadow-xl text-white">
                <div>PlaceHolder</div>
              </div>
              <img
                className="rounded-full h-16 w-16 -mt-8 absolute z-10"
                src="/images/landingPage/raveen.jpg"
              />
              <h1 className="mt-2 text-center text-xl text-charmander">
                PlaceHolder
              </h1>
              <h1>PlaceHolder</h1>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center relative">
              <div className="bg-blue-800 h-80 w-72 flex flex-col justify-center items-center rounded-lg shadow-xl text-white">
                <div>PlaceHolder</div>
              </div>
              <img
                className="rounded-full h-16 w-16 -mt-8 absolute z-10"
                src="/images/landingPage/raveen.jpg"
              />
              <h1 className="mt-2 text-center text-xl text-charmander">
                PlaceHolder
              </h1>
              <h1>PlaceHolder</h1>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center relative">
              <div className="bg-red-500 h-80 w-72 flex flex-col justify-center items-center rounded-lg shadow-xl text-white">
                <div>PlaceHolder</div>
              </div>
              <img
                className="rounded-full h-16 w-16 -mt-8 absolute z-10"
                src="/images/landingPage/raveen.jpg"
              />
              <h1 className="mt-2 text-center text-xl text-charmander">
                PlaceHolder
              </h1>
              <h1>PlaceHolder</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProjectsPage;

StudentProjectsPage.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
