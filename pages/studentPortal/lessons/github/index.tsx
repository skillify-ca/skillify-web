import React from "react";

export default function index() {
  return (
    <div className="grid grid-cols-1 px-10 pt-6">
      <h1 className="font-bold text-4xl ">Deploying a Website using Vercel</h1>
      <div className="">
        <h1 className="text-3xl pt-4 ">Intro</h1>
        <p>
          Let's say you've created a protfolio website that display's your
          projects and skills. To be able for everyone wanting to check out your
          projects you would have to have a link to your website, that you can
          do by using Vercel.
        </p>
      </div>

      <h1>Getting Started with Vercel</h1>
      <p>
        Step 1: First create a account in Vercel using your Github account so
        that their linked together.
      </p>
      <p>Step 2: Then your going to press the add new button image here</p>
      <img src="/images/lessons/addnew.png" width={110} height={80} />
      <h1>Deploying your website</h1>
    </div>
  );
}
