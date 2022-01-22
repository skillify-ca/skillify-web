import React from "react";

import Navbar from "../../../../../components/Navbar";

const Final1 = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 bg-white p-8 m-8 space-y-4">
        <div>
          <p className="font-bold text-2xl"> Final Assignment </p>
          <p className="font-extrabold text-xl text-blue-600">
            {" "}
            E-Commerce Site{" "}
          </p>

          <div className="mt-3">
            <h1 className="font-bold">Purpose of the Assignment</h1>
            <p>
              Over the course of the last few weeks, you have been working
              through many fundamental concepts in web development. In this
              assignment, you will be consolidating all your knowledge of Web
              Dev to make a practical application. You will be using your skills
              in HTML, CSS, and a tiny bit of Javascript to make pretty awesome
              E-commerce stores!
            </p>
          </div>
          <div className="mt-3">
            <h1 className="font-bold">What do you need to get started?</h1>
            <p>
              First and foremost, you must have a .html file for your store.
              We'll now be using Tailwind for CSS properties. Trust me, you'll
              thank me later.
            </p>
            <a
              className="text-blue-400 font-medium"
              href="https://tailwindcss.com/docs/installation/play-cdn"
            >
              Here's the process on how to get Tailwind working in your code.
            </a>
          </div>
          <div className="mt-3">
            <h1 className="font-bold">Requirements</h1>
            <ol className="list-decimal">
              <li>
                Follow the same Flag Pattern Layout we used in our blogs.
                <img
                  src="/images/coding/units/css/layout1.png"
                  className="w-64"
                />
              </li>
              <li>
                Your customer must know what you're selling. Make sure you have
                an image of your product!
              </li>
              <li>
                You will also need to add product details.
                <p>
                  <b>Hint:</b> Here is where you can use your ul and li tags
                </p>
              </li>
              <li>
                Include a Navigation Bar. On this Navigation Bar you must have
                at least 2 elements which is Home and the About page.{" "}
              </li>
              <li>
                {" "}
                Add a Purchase button that will redirect the customer to this
                <a
                  className="text-blue-400 font-medium"
                  href="https://buy.stripe.com/4gw6rjbAUdQp7Ys28d"
                >
                  {" "}
                  Purchase Redirection Link
                </a>
              </li>
              <li>
                Finally, the most important requirement. Just have fun! This is
                your time to show off your Web Dev skills to your friends and
                future employers!{" "}
              </li>
            </ol>
          </div>
        </div>
        <div>
          <div className="font-bold text-white text-lg ml-3 bg-blue-900 pl-5">
            Example E-Commerce Store
          </div>
          <img src="/images/shopifyExample.png"></img>
        </div>
      </div>
    </>
  );
};

export default Final1;
