import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/Button";
import Image from "next/image";

export default function About(props) {
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100 h-screen ">
      <Navbar />
      <div className="p-4 flex flex-col items-center justify-center gap-8">
        <h1 className="text-3xl font-bold">About Me</h1>
        <div className="grid sm:grid-cols-2">
          <div className="flex flex-col gap-4 bg-white p-4 rounded-xl shadow-lg">
            <p className="text-xl">Introduction</p>
            <p>
              Hi everyone, my name is Vithushan. I am a software engineer from
              Toronto, Canada. I built Math Champ to make math more fun for
              students and to eliminate math anxiety.
            </p>
            <div className="flex flex-col gap-4">
              <p className="text-xl">Background</p>
              <p>
                After graduating from the University of Waterloo with a
                Bachelors Degree in Computer Science I went to work at several
                big tech companies. I reached a point in my life where I didn't
                want to work at a big company anymore and wanted to build my own
                startup.
              </p>
            </div>
            <div className="flex flex-col gap-4 bg-white p-4 rounded-xl ">
              <p className="text-xl text-center">Places I've Worked</p>
              <div className="flex gap-8">
                <Image
                  className="transform transition ease-in-out duration-500 hover:scale-110"
                  width={64}
                  height={64}
                  src="/images/about/wordsWithFriends.png"
                />
                <Image
                  className="transform transition ease-in-out duration-500 hover:scale-110"
                  width={64}
                  height={64}
                  src="/images/about/lumosity.png"
                />
                <Image
                  className="transform transition ease-in-out duration-500 hover:scale-110"
                  width={64}
                  height={64}
                  src="/images/about/spotify.png"
                />
                <Image
                  className="transform transition ease-in-out duration-500 hover:scale-110"
                  width={64}
                  height={64}
                  src="/images/about/instagram.png"
                />
                <Image
                  className="transform transition ease-in-out duration-500 hover:scale-110"
                  width={64}
                  height={64}
                  src="/images/about/duolingo.png"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center m-8">
            <Image
              className="transform transition ease-in-out duration-500 hover:scale-110"
              width={360}
              height={360}
              objectFit="contain"
              src="/images/about/vithushan.png"
            />
          </div>
          <div className="flex-col gap-4 hidden">
            <p className="text-xl">Background</p>
            <p>
              After graduating from the University of Waterloo with a Bachelors
              Degree in Computer Science I went to work at several big tech
              companies. I reached a point in my life where I didn't want to
              work at a big company anymore and wanted to build my own startup.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-white p-4 rounded-xl shadow-lg">
          <p className="text-xl">Why I built Math Champ</p>
          <ul className="list-disc list-inside">
            <li>
              Helping someone become good at math can{" "}
              <span className="font-bold">unlock their economic potential</span>
              . I would love to be part of that journey.
            </li>
            <li>
              <span className="font-bold">I love playing games </span> as a way
              to connect with my friends. A lot of students have been feeling
              lonely over the pandemic and want more engaging ways to connect
              with each other. I think teachers and parents would support these
              types of games.
            </li>
            <li>
              The pandemic has accelerated{" "}
              <span className="font-bold">online learning</span> and I think
              it's here to stay.
            </li>
            <li>
              Teachers are some of the{" "}
              <span className="font-bold">kindest and most passionate</span>{" "}
              people on the planet. I knew that I would feel good trying to make
              their lives easier and helping the students in their classrooms.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 bg-white p-4 rounded-xl shadow-lg">
          <p className="text-xl">My Vision</p>
          <p>
            My vision for Math Champ is to be a platform where teachers submit
            their black-and-white paper assignments so that we can convert them
            into visually stunning mini-games. As we continue to grow our games
            library, I hope to become the Mario Party of education.
          </p>
        </div>
      </div>
    </div>
  );
}
