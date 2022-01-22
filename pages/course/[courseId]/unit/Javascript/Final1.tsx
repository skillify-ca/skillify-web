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
          <div className="mt-4">
            <h1 className="font-bold">What do you need to get started?</h1>
            <p>
              First and foremost, you must create a new folder for your store.
              Create a .html file for each page of your online store.
            </p>
            <ul className="list-disc list-inside">
              <li>Home Page</li>
              <li>About Page</li>
            </ul>
            <h1 className="font-bold mt-4">Tailwind CSS</h1>

            <p>
              Tailwind is a modern way of writing CSS properties. Trust me,
              you'll thank me later.
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
                all of your images for your product!
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
                Add a Purchase button that will redirect the customer to a
                Stripe payment link.
                <a
                  className="text-blue-400 font-medium"
                  href="https://stripe.com/en-ca/payments/payment-links"
                >
                  {" "}
                  Stripe Documentation
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
