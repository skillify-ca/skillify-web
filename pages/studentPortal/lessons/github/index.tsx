import React from "react";

export default function index() {
  return (
    <div className="grid grid-cols-1 px-10 pt-6">
      <h1 className="font-bold text-4xl ">Deploying a Website using Vercel</h1>
      <div className="flex flex-row border-2 rounded shadow-lg gap-6">
        <div className="items-center p-4 bg-white">
          <img src="/images/lessons/vercel.png" width={300} height={150}></img>
        </div>
        <div className="p-4">
          <h1 className="font-bold">Vercel</h1>
          <p>This is the Link to Vercel to create your account.</p>
        </div>
      </div>
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
        that they're linked together.
      </p>
      <img src="/images/lessons/login.png" width={250} height={100} />
      <p className="pt-4">Step 2: Next press the add new button</p>
      <img src="/images/lessons/addnew.png" width={250} height={100} />
      <p className="pt-4">Step 3: Then click on project</p>
      <img src="/images/lessons/project.png" width={250} height={100} />
      <h1 className="p-4 font-bold text-2xl">Deploying your website</h1>
      <p className="pt-4">
        It will take you to a screen like this, here you can select the project
        that you want to import and press import.
      </p>
      <img src="/images/lessons/import.png" width={650} height={450} />
      <p className="pt-4">Next you will have to deploy your project.</p>
      <img src="/images/lessons/deploy.png" width={650} height={450} />
      <p className="pt-4">
        Congratulations now your done deploying your website using Vercel!
      </p>
      <img src="/images/lessons/deployed.png" width={650} height={450} />
      <p>Now you can use the link to share your project with others!</p>
      <img
        src="/images/lessons/projectDeployment.png"
        width={650}
        height={450}
      />
    </div>
  );
}
//make sure to add in that u need github for the vercel thing
