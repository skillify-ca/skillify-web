import React, { useState } from "react";
import Navbar from "../../../components/Navbar";

export default function basicDivision(props) {
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <Navbar />

      <div className="p-4 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-8 w-full">
          <div>
            <div className="flex flex-col gap-8">
              <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
                <div className="">
                  <p className="font-bold mb-4"> Basic Division</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-8">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/biwYDuCHwXo?start=7"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <p className="text-sm border-2 border-purple-400">
                        Basic Divison is where it all starts! You will be given
                        a select number of items and it will be your job to
                        seperate them into equal groups. This procedure is what
                        we call
                        <b> Division</b> and is one of the 4 primary operations.
                      </p>
                    </div>
                    <div className="flex flex-col gap-8">
                      <img
                        className="h-30 object-cover"
                        src="https://www.smartick.com/blog/wp-content/uploads/division_pastelitos.png"
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
