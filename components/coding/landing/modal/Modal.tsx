import { useRouter } from "next/router";
import { useState } from "react";
import * as fbq from "../../../../lib/fbPixel";

export default function Modal({ handleClose }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const router = useRouter();

  const handleClick = async () => {
    if (email.length > 0) {
      fbq.event("Lead");

      // TODO (vithushan) delete this once emails are confirmed to be sending
      const slackURL =
        "https://math-app-1.herokuapp.com/notifications?product=request-demo";
      const slackOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          email: email,
        }),
      };
      fetch(slackURL, slackOptions);

      const url = "/api/email/join-waitlist";
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          email,
          name,
        }),
      };
      fetch(url, options).then((res) => router.push("/waitlist-thank-you"));
    }
  };
  return (
    <div>
      <div
        className="absolute top-0 right-0 p-4 text-white cursor-pointer"
        onClick={(e) => {
          handleClose();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div className="flex flex-col w-full bg-white rounded-xl">
        <div className="grid grid-cols-1 p-8 bg-white sm:p-16">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">
            <span className="">Be the </span>
            <span className=" text-charmander">first </span>
            to know when the{" "}
            <span className=" text-charmander"> next cohort</span> opens for
            enrollment
          </h1>
          <input
            id="bootcamper"
            type="text"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`p-4 mb-4 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-charmander placeholder-charmander w-full`}
            placeholder="Enter your full name"
          />
          <input
            id="bootcamper"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            className={`text-left mb-4 p-4 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500  text-charmander placeholder-charmander w-full `}
            placeholder="Enter your email address"
          />
          <div className="">
            <div className="rounded-md">
              <p
                onClick={handleClick}
                className="flex items-center justify-center w-full p-4 text-base font-bold text-white rounded-md cursor-pointer bg-charmander hover:bg-yellow-700 md:text-lg "
              >
                Join Waitlist
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
