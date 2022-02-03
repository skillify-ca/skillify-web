import React from "react";
import Card, { CardData } from "../../../../../components/coding/Card";
import Navbar from "../../../../../components/Navbar";

const Midterm1 = () => {
  const data: CardData[] = [
    {
      title: "Pokemon JSON",
      link: "/coding/JavaScript?PokemonTemp.js",
      image: "/images/pokeball.png",
      description: "Find out what Pokemons can learn Fire Blast!",
    },
    {
      title: "NBA Data",
      link: "/coding/JavaScript/NBATemp.js",
      image: "/images/basketball.png",
      description: "Examine the data and figure who was the best Hooper!",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="grid p-8 space-y-4 bg-white sm:m-8 sm:grid-cols-2">
        <div>
          <p className="text-2xl font-bold"> Javascript Assignment </p>

          <div className="mt-3">
            <h1 className="font-bold">Purpose of the Assignment</h1>
            <p>
              In the previous modules, you were introduced to the concept of
              iterators, which include, .map and .filter. These iterators are
              actually used in a profesional setting all the time! That means,
              you must be confortable with using .map and .filter in order to
              apply them in your future job opprotunities. In this assignment,
              you will work with big JSON objects and apply iterators to narrow
              down to specific data.
            </p>
          </div>
          <div className="mt-2">
            <h1 className="font-bold">What do you need to get started?</h1>
            <p>
              First and foremost, you must download the Javascript Assignment
              file. You can find this towards the bottom right side of the page.
              Click the "Download" and it should download a .zip file.
            </p>
            <p>
              {" "}
              Secondly you must have Node.js installed and the Code Runner
              Extension.{" "}
            </p>
            <p> After these 2 steps you should be good to go! </p>
          </div>
          <p className="text-xl font-extrabold text-blue-600"> Pokemon JSON </p>
          <div className="flex flex-row border-l-2 border-yellow-300">
            <p className="text-lg font-bold text-black"> Difficulty: </p>
            <p className="text-lg font-bold text-yellow-300 ml-1"> Easy </p>
          </div>
          <div className="mt-3">
            <p>
              {" "}
              <b>Objective:</b> Write a javascript function that takes this
              Pokemon JSON and returns a list of all Pokemon Names that can
              learn the move Fire Blast.
            </p>
            <h1 className="font-bold">Steps in the right Direction:</h1>
            <ol className="list-decimal">
              <li>You must read through the JSON object.</li>
              <li>
                Now you must find the array of Pokémons that can learn the
                attack called "Fire Blast".
              </li>
              <li>
                Using .map transform the array of Pokémon to only contain the
                name and not the url.
              </li>
              <li>Print out this array of Pokémon names.</li>
              <li>
                And there you have it! Part 1 of the Javascript Assignment is
                complete!
              </li>
            </ol>
          </div>
          <p className="text-xl font-extrabold text-blue-600"> NBA Data </p>
          <div className="flex flex-row border-l-2 border-yellow-600">
            <p className="text-lg font-bold text-black"> Difficulty: </p>
            <p className="text-lg font-bold text-yellow-600 ml-1"> Medium </p>
          </div>
          <div className="mt-3">
            <p>
              {" "}
              <b>Objective:</b> Write a javascript function that takes this NBA
              Box Score JSON and returns the pid of the player who scored the
              most points in that game.
            </p>
            <h1 className="font-bold">Steps in the right Direction:</h1>
            <ol className="list-decimal">
              <li>
                You are handed a very large JSON object containing a lot of
                data. However, the main properties we are looking for in this
                JSON object is "pd". This is the array of the 4 periods in the
                Basketball game.
              </li>
              <li>
                Within this "pd" array, we can see that the first index of the
                array in this case index 0, is all the plays that happen in
                period 1.
              </li>
              <li>
                Note that plays is found in the "pla" array. There are many
                different types of plays in Basketball. Anything from scoring a
                bucket, jump-off, misses, are all considered plays. The way we
                differentiate between different plays is by using the "etype"
                property. Since we are only concerned about the scored buckets,
                we will only consider the plays with the etype of 15.
              </li>
              <li>
                We must now figure out a way to fiter only the plays of etype of
                15.
              </li>

              <li>
                Now we must keep track of which pid scored how many points and
                return the pid that scored the most.
              </li>
              <li>
                There you have it! Part 2 of the Javascript Assignment is
                Complete!
              </li>
            </ol>
          </div>
        </div>
        <div>
          <div className="">
            <div className="flex flex-col gap-4">
              <div className="pl-4 text-lg font-bold text-white bg-blue-900">
                Video Walkthrough
              </div>
              Part 1
              <iframe
                width="560"
                height="315"
                className="w-full"
                src="https://www.youtube.com/embed/lZr-Rl1hwfA"
                title="YouTube video player"
                frameBorder={"0"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              Part 2
              <iframe
                width="560"
                height="315"
                className="w-full"
                src="https://www.youtube.com/embed/wYUs8JfkkvI"
                title="YouTube video player"
                frameBorder={"0"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="pl-4 text-lg font-bold text-white bg-blue-900 mt-2">
            Javascript Assignment
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
            {data.map((it) => (
              <Card
                title={it.title}
                image={it.image}
                description={it.description}
                link={it.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Midterm1;
