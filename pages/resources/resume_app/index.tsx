import React, { useState } from 'react';
import LandingNavbar from "../../../components/landingPage/LandingNavbar";

import Header from "../../../components/resources/resume_checker/Header";
import Editor from "../../../components/resources/resume_checker/Editor";


export default function resume_app() {
  return (
    <div className="mx-auto my-8 flex min-h-screen max-w-5xl flex-col px-4 sm:my-16">
      <Header />
      <main>
      <Editor />
      </main>
    </div>
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