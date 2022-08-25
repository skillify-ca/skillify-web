import { useRouter } from "next/router";
import React, { useState } from "react";
import ActiveCampaignEmailCapture from "./ActiveCampaignEmailCapture";

const EmailCapture = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleClick = async () => {
    const url =
      "https://math-app-1.herokuapp.com/notifications?product=new-lead-free-guide";
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        email: `[Name] ${name} [Email] ${email}`,
      }),
    };
    await fetch(url, options).then((res) => {
      router.push("/guide-thank-you");
    });
  };
  return (
    <div>
      <div className="grid h-full grid-cols-1 bg-no-repeat sm:p-16 sm:grid-cols-2 bg-email-capture bg-charmander bg-blend-multiply">
        <div className="grid grid-cols-1 p-4 bg-white sm:p-16">
          <h1 className="mb-4 font-extrabold tracking-tight text-gray-900">
            <p className="text-3xl text-gray-900">
              <span className="">Get our </span>
              <span className=" text-charmander">top 12 secret tips </span>
              <span className="">on learning to code as a </span>
              <span className=" text-charmander">product manager</span>
            </p>{" "}
          </h1>
          <ActiveCampaignEmailCapture />
        </div>
        <div className="grid grid-cols-1">
          <div className="flex flex-col items-center justify-center p-4">
            <p className="text-xl font-bold text-white sm:text-2xl">
              {" "}
              Think learning to code is too hard? Drop us your email and we will
              send you our free guide on avoiding overhwhelm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCapture;
