import React from "react";
import { Button } from "../../../../components/ui/Button";
import { Input } from "../../../../components/ui/Input";

function DungeonsAndDragonsCharacterSheet() {
  const levelDescriptions = [
    {
      1: (
        <p>
          Create state and controls for each of the 6 attributes (see
          `ATTRIBUTE_LIST`) so they can be incremented/decremented
          independently.
        </p>
      ),
    },
    {
      2: (
        <p>
          Display classes on the screen (see `CLASS_LIST`) and visually change
          the UI when the character meets the minimum requirements for that
          class, that is, all attributes are greater than or equal to the class
          minimums
        </p>
      ),
    },
    {
      3: (
        <p>
          When clicking on a class, display the minimum required statistics for
          that class
        </p>
      ),
    },
    {
      4: (
        <p>
          Add an “ability modifier” to each attribute row, this is calculated as
          +1 for each 2 points above 10, for any attribute (let's take
          Intelligence for example) we would have the following ability
          modifiers for a given ability
          <ul>
            <li>- Intelligence: 7 - Intelligence Modifier: -2</li>
            <li>- Intelligence: 9 - Intelligence Modifier: -1</li>
            <li>- Intelligence: 10 - Intelligence Modifier: 0</li>
            <li>- Intelligence: 11 - Intelligence Modifier: 0</li>
            <li>- Intelligence: 12 - Intelligence Modifier: 1</li>
            <li>- Intelligence: 14 - Intelligence Modifier: 2</li>
            <li>- Intelligence: 20 - Intelligence Modifier: 5</li>
          </ul>
        </p>
      ),
    },
    {
      5: (
        <p>
          Implement skills. See `SKILL_LIST` for the list of all skills and
          their attribute modifier - Characters have 10 + (4 * Intelligence
          Modifier) points to spend between skills. - There is a minimum of 0,
          but no maximum aside from the total points available to spend. - for
          example, if a character has a 1 Intelligence Modifier, they may spend
          14 points, and could add 7 to both Acrobatics and Perception (then
          would have no more to spend on others) - The total value of a skill is
          the sum of points spent and the skill’s corresponding ability modifier
          (see `SKILL_LIST` for what ability modifier affects each skill). - For
          example. a character with a 2 Dexterity Modifier and spending 3 points
          on Acrobatics would have a total skill value of 5 - Display each skill
          in a row in a separate section. For example, Acrobatics - for a
          character with 12 dexterity may look like `Acrobatics - points: 3 [+]
          [-] modifier (Dex): 2 total: 5`
        </p>
      ),
    },
    {
      6: (
        <p>
          Save the character(s) to an API so they can be retrieved when the app
          starts next time. - Make a post request with a JSON payload to %POST
          URL% to save data, and a get request to %GET URL% to retrieve the
          data. It will accept any valid JSON blob and return the most recent
          version - for example, if your github username is vithushan19, you
          would use %URL% (include the curly braces) - you must include a
          content-type header of application/json for the post to be accepted{" "}
        </p>
      ),
    },
    {
      7: (
        <p>
          Implement a maximum on all attributes of 70. For example, if a
          character has 20 strength and 10 for all other attributes, they must
          decrease one before they can increase another
        </p>
      ),
    },
    {
      8: (
        <p>
          Add the ability to edit multiple characters simultaneously with the
          same rules above
        </p>
      ),
    },
    {
      9: (
        <p>
          Add a Skill Check section for each character. This represents a
          character's attempt to perform an action - the character is successful
          if they meet or exceed the DC (see below) of the skill check. Add the
          total skill to a random number between 1 and 20 inclusive, if this
          meets or exceeds the DC the skill check is successful, otherwise it's
          a failure - Add the following controls to the UI - skill: a dropdown
          to specify what skill we're using in the check, see `SKILL_LIST` - DC:
          An input that collects a number. The minimum value the character must
          meet to succeed - Roll: a button that will trigger the random number
          generation - When the Roll button is clicked, display the following -
          What the random number generated was - If the skill check is
          successful or a failure
        </p>
      ),
    },
    {
      10: (
        <p>
          Add a party skill check section. This is the same as the above, except
          we should use the character with the highest skill total to attempt
          the action - Show which character was selected to attempt the action
        </p>
      ),
    },
  ];

  const MAX_LEVEL = 10;

  const [currentLevel, setCurrentLevel] = React.useState(1);
  const [pullRequestLinks, setPullRequestLinks] = React.useState(
    Array(MAX_LEVEL).fill("")
  );

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="py-4 text-xl font-bold">
        Dungeons and Dragons Character Sheet
      </h1>
      <div>
        <h2 className="text-lg font-bold">Pre-requisite</h2>
        <p>
          You should be able to build a small React app with a simple counter
          that updates the UI when the counter is incremented or decremented.
          You should know how to use useState hooks.
        </p>
      </div>
      <div>
        <h2 className="text-lg font-bold">Instructions</h2>
        <p>
          You will build a small web app around creating a character sheet for a
          tabletop RPG game like Dungeons and Dragons. Styling is not important,
          so long as the functionality is present and usable. For each level you
          should create a new Pull Request and get it approved by Vithushan
          before moving on to the next level.
        </p>
      </div>
      <div>
        <h2 className="text-lg font-bold">What is a character sheet?</h2>
        <p>Character sheets are defined by the following high-level concepts</p>
        <ul>
          <li> Attributes: This represents a character's raw abilities </li>
          <li>
            Attribute Modifier: calculated using the related Attribute, this
            value affects a character's skills
          </li>
          <li> Skills: A character's ability to perform a specific action</li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-bold">Current Progress</h2>
        <div className="p-4 bg-backgroundSecondary">
          Github PR Links:
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {pullRequestLinks.map((link, index) => (
              <div key={index}>
                Level {index + 1}:{" "}
                <a href={link} target="_blank" rel="noreferrer noopener">
                  {link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold">Requirements</h2>
        <p>
          You will be building this app in levels. Each level will build on the
          previous level. You will be expected to complete each level in order.
        </p>
      </div>
      <div>
        <h2 className="text-lg font-bold">
          Current Level: Level {currentLevel}
        </h2>

        <div className="h-64 p-4 overflow-y-auto rounded shadow bg-backgroundSecondary">
          {levelDescriptions[currentLevel - 1][currentLevel]}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-4">
          <Input
            placeholder="Enter your Github PR link here"
            setValue={(e) =>
              setPullRequestLinks(
                pullRequestLinks.map((link, index) =>
                  index === currentLevel - 1 ? e.target.value : link
                )
              )
            }
            value={pullRequestLinks[currentLevel - 1]}
          />
          <Button
            label="Submit"
            onClick={() => {
              console.log(
                "Submitted PR link: ",
                pullRequestLinks[currentLevel - 1]
              );
            }}
          />
        </div>
      </div>
      <div className="flex gap-4">
        {/* prev button */}
        <Button
          label="Previous"
          onClick={() => {
            if (currentLevel > 1) {
              setCurrentLevel(currentLevel - 1);
            }
          }}
        />
        {/* next button */}
        <Button
          label="Next"
          onClick={() => {
            if (currentLevel < MAX_LEVEL) {
              setCurrentLevel(currentLevel + 1);
            }
          }}
        />
      </div>
    </div>
  );
}

export default DungeonsAndDragonsCharacterSheet;
