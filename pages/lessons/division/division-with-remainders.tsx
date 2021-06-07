import React, { useState } from "react";
import Navbar from "../../../components/Navbar";

export default function remainderDivision(props) {
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <Navbar />

      <div className="p-4 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-8 w-full">
          <div>
            <div className="flex flex-col gap-8">
              <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
                <div className="">
                  <p className="font-bold mb-4"> Division with Remainders </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-8">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/KGMf314LUc0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <p className="text-sm border-2 border-purple-400">
                        What happens if we have 7 cookies and 2 friends? Will
                        the cookies divide equally for all 2 friends? They won't
                        be able to to divide equally. We will have 1 cookie
                        leftover. This cookie leftover is what we call a{" "}
                        <b> Remainder</b>. Check out the video above to learn
                        more about remainders and how they work!
                      </p>
                    </div>
                    <div className="flex flex-col gap-8">
                      <img
                        className="h-30 object-cover"
                        src="https://satprepget800.com/wp-content/uploads/2013/03/remainder.png"
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
