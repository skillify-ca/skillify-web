import React, { useState } from "react";
import Navbar from "../../../components/Navbar";

export default function fractions(props) {
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <Navbar />

      <div className="p-4 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-8 w-full">
          <div>
            <div className="flex flex-col gap-8">
              <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
                <div className="">
                  <p className="font-bold mb-4"> Fractions </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-8">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/362JVVvgYPE?start=97"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <p className="text-sm border-2 border-purple-400">
                        What if we only had 1 cookie and we wanted to share it
                        with each other. How would we do it? We would split the
                        cookie is 2 halves and you will get 1 half and I will
                        get 1 half. This is what we call
                        <b> Fractions</b>. If you have siblings you probably
                        already sharing you cookies with them. So knowing your
                        fractions will help you a lot!
                      </p>
                    </div>
                    <div className="flex flex-col gap-8">
                      <img
                        className="h-30 object-cover"
                        src="https://teachablemath.com/wp-content/uploads/2016/05/Screenshot-2016-05-03-14.27.17-1.png"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
