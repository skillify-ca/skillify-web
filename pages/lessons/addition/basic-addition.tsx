import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";

export default function basicAddition(props) {
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <Navbar />

      <div className="p-4 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-8 w-full">
          <div>
            <div className="flex flex-col gap-8">
              <div className="bg-white shadow-lg rounded-lg w-full p-4 object-contain">
                <div className="">
                  <p className="font-bold mb-4"> Basic Addition</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-8">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/uONIJ5TQ2DA?start=19"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full"
                      ></iframe>
                      <p className="text-sm border-2 border-purple-400">
                        Basic Additions is where it all starts! If you had 10
                        cookies and your mother gives you 4 more, we can use{" "}
                        <b> Addition </b> to figure out how many cookies are
                        left. Let's look at more examples in the video above!
                      </p>
                    </div>
                    <div className="flex flex-col gap-8">
                      <img
                        className="h-30 object-cover"
                        src="https://www.theschoolrun.com/sites/theschoolrun.com/files/content-images/addition_column_method.png"
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
