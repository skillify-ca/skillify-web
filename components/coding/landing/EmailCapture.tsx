import React, { useState } from "react";

const EmailCapture = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hasClicked, setHasClicked] = useState(false);

  const handleClick = async () => {
    setHasClicked(true);
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
    await fetch(url, options);
  };
  return (
    <div>
      <div className="grid h-full grid-cols-1 bg-no-repeat sm:p-16 sm:grid-cols-2 bg-email-capture bg-charmander bg-blend-multiply">
        <div className="grid grid-cols-1 p-4 bg-white sm:p-16">
          <h1 className="mb-4 font-extrabold tracking-tight text-gray-900">
            <p className="text-3xl text-gray-900">
              <span className="">Get our </span>
              <span className=" text-charmander">secret tips </span>
              <span className="">on learning how to </span>
              <span className=" text-charmander">code </span>
            </p>{" "}
          </h1>
          <input
            id="bootcamper"
            type="text"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`p-4 mb-4 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-charmander placeholder-charmander w-full`}
            placeholder="First Name"
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
                Request Access
              </p>
            </div>
          </div>
          {hasClicked && (
            <p className="w-full text-center text-bulbasaur-500">
              Thank you for your email, someone from our team will reach out
              shortly to help!
            </p>
          )}
        </div>
        <div className="grid grid-cols-1">
          <div className="flex flex-col items-center justify-center p-4">
            <p className="text-xl font-bold text-white sm:text-2xl">
              {" "}
              Think coding is too hard to learn? Drop us your email and we will
              send your our free guide on avoiding overhwhelm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCapture;
