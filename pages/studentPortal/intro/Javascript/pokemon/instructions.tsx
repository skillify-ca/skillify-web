import React from "react";
import ProgressBar from "../../../../../components/ProgressBar";
import { Button } from "../../../../../components/ui/Button";

const JS8 = ({ lessonComponents }) => {
  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 p-8 space-y-4 text-gray-700 bg-gray-100">
          <ProgressBar completed={100} />
          <p>
            {" "}
            <b>Objective:</b> Write a javascript function that takes this
            Pokemon JSON and returns a list of all Pokemon Names that can learn
            the move Fire Blast.
          </p>
          <h1 className="text-xl font-bold"> Steps in the right Direction:</h1>
          <div className="flex-row">
            <h1 className="text-charmander">Step 1:</h1>
            <p>You must read through the JSON object.</p>
            <p>
              You can access the Pokemon data from this{" "}
              <a
                className="underline cursor-pointer text-charmander"
                href="https://pokeapi.co/api/v2/move/fire-blast"
              >
                link
              </a>
            </p>
            <p>
              Copy and paste that data into a{" "}
              <a
                className="underline cursor-pointer text-charmander"
                href="http://jsonviewer.stack.hu/"
              >
                JSON viewer
              </a>{" "}
              so you can properly visualize the object you're going to work
              with.
            </p>
            <p>
              Copy and paste that data again into a new javascript file on your
              computer. Use the{" "}
              <a
                className="underline cursor-pointer text-charmander"
                href="https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner"
              >
                Code Runner Visual Studio Extension
              </a>{" "}
              to run your code. You can use the extension by searching for "Run
              Code" inside of your Command Pallette (CMD+SHIFT+P or
              CTRL+SHIFT+P)
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 2:</p>
            <p>
              Now you must find the array of Pokémons that can learn the attack
              called "Fire Blast".
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 3:</p>
            <p>
              Using .map transform the array of Pokémon to only contain the name
              and not the url.
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 4:</p>
            <p>Print out this array of Pokémon names.</p>
          </div>
          <div>
            <p className="text-charmander">Step 5:</p>
            <p>
              And there you have it! Part 1 of the Javascript Assignment is
              complete!
            </p>
          </div>
          <div className="flex h-full mt-12 sm:justify-end">
            <a href={"/studentPortal/intro/Javascript/pokemon/video-hint"}>
              <Button label="Continue" disabled={false} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default JS8;
