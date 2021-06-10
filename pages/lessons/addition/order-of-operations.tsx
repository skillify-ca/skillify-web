import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";

export default function orderOfOperations(props) {
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <Navbar />

      <div className="p-4 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-8 w-full">
          <div>
            <div className="flex flex-col gap-8">
              <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
                <div className="">
                  <p className="font-bold mb-4"> Order of Operations</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-8">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/tyrz0EJ0InQ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full"
                      ></iframe>
                      <p className="text-sm border-2 border-purple-400">
                        What's does 2 + 3 x 4 = ? Did you get 20? Or did you get
                        14? That all depends on what operation you evaluated
                        first. There is actually an order to follow when solving
                        math problems with more than 1 operation. This concept
                        is called <b> Order of Operations</b>. Learn more in the
                        video above!
                      </p>
                    </div>
                    <div className="flex flex-col gap-8">
                      <img
                        className="h-30 object-cover"
                        src="https://s3-eu-west-1.amazonaws.com/s2.thingpic.com/images/4q/oUoYhHgxAWmNdShqi3DHLa3L.png"
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
