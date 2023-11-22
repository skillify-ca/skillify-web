import React from "react";

export default function index() {
  return (
    <div className="grid grid-cols-1 px-10 pt-6">
      <h1 className="font-bold text-4xl ">Deploying a Website using Vercel</h1>
      <div className="flex flex-col">
        <h1 className="text-3xl pt-4 ">Intro</h1>
        <p className="pt-4 w-1/2 ">
          Let's say you've created a protfolio website that display's your
          projects and skills. To be able for everyone wanting to check out your
          projects you would have to have a link to your website, that you can
          do by using Vercel.
        </p>
      </div>

      <h1 className="text-3xl pt-4">Getting Started with Vercel</h1>
      <p className="pt-4">
        Step 1: First create a account in Vercel using your Github account so
        that their linked together.
      </p>
      <img src="/images/lessons/login.png" width={250} height={100} />
      <p>Step 2: Next press the add new button</p>
      <img src="/images/lessons/addnew.png" width={250} height={100} />
      <p>Step 3: </p>
      <h1>Deploying your website</h1>
    </div>
  );
}
