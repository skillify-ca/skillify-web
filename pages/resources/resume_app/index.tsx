import React, { useState } from 'react';
import LandingNavbar from "../../../components/landingPage/LandingNavbar";

import Topbar from "../../../components/resources/resume_checker/Topbar";
import Header from "../../../components/resources/resume_checker/Header";
import Editor from "../../../components/resources/resume_checker/Editor";


export default function resume_app() {
  return (

    <div className = "bg-black mx-4 my-4 flex">
    <Topbar />
    </div>

    // <div className="mx-4 my-8 flex min-h-screen max-w flex-col px-4 sm:my-16">
    //   <Topbar />
    //   {/* <Header />
    //   <main>
    //   <Editor />
    //   </main> */}
    // </div>
  );
}

resume_app.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};