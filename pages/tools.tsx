import React, { useState } from "react";
import DiagnosticNavbar from "../components/DiagnosticNavbar";
import { Button } from "../components/stories/Button";

export default function Tools(props) {
  const [practiceInput, setPracticeInput] = useState("");
  const [battleInput, setBattleInput] = useState("");
  const [practiceButtonEnabled, setPracticeButtonEnabled] = useState(true);
  const [battleButtonEnabled, setBattleButtonEnabled] = useState(true);

  const notifyPracticeSignup = async () => {
    if (practiceInput.length > 0) {
      setPracticeButtonEnabled(false)
      setPracticeInput("")
      const url = "api/notifications?product=practice";
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          email: practiceInput,
        }),
      };
      await fetch(url, options);
    }
  };
  const notifyBattleSignup = async () => {
    if (battleInput.length > 0) {
      setBattleButtonEnabled(false)
      setBattleInput("")
      const url = "api/notifications?product=battle";
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          email: battleInput,
        }),
      };
      await fetch(url, options);
    }
  };

  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100 h-screen ">
      <DiagnosticNavbar />
      <div className="p-4 flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center bg-white shadow-lg gap-8 rounded-lg p-4">
          <p className="text-xl font-bold">Math Champ Tools</p>
          <div className="flex flex-col gap-4 sm:max-w-2xl">
            <p>
              Math Champ is COMING SOON with a suite of online math activities
              and games to help your child become better at math. Enter your
              email to be notified when we go live.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="bg-white shadow-lg rounded-lg w-full p-4">
            <div className="flex flex-col gap-4">
              <p className="font-bold">Practice Tracker</p>
              <p className="">
                Math Practice Made Fun! Enable students to work independently at
                their own pace. Parents receive weekly reports on their child's
                progress. Aligned to the new Ontario curriculum.
              </p>
              <div className="bg-white flex sm:flex-row gap-4 items-center rounded-lg">
                <input
                  id="practice"
                  type="text"
                  value={practiceInput}
                  onChange={(e) => setPracticeInput(e.target.value)}
                  autoComplete="off"
                  className={`text-left p-2 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md`}
                  placeholder="Email"
                />
                <Button
                  disabled={!practiceButtonEnabled}
                  backgroundColor="blue"
                  textColor="white"
                  label="Notify Me"
                  onClick={notifyPracticeSignup}
                />
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg w-full p-4">
            <div className="flex flex-col gap-4">
              <p className="font-bold">Math Battle</p>
              <p className="">
                Math Battle is a competitive multiplayer game where students
                earn points and battle against their friends. This game helps
                children and adults become fast and fluent with math facts.
              </p>
              <div className="bg-white flex sm:flex-row gap-4 items-center rounded-lg">
                <input
                  id="battle"
                  type="text"
                  value={battleInput}
                  onChange={(e) => setBattleInput(e.target.value)}
                  autoComplete="off"
                  className={`text-left p-2 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md`}
                  placeholder="Email"
                />
                <Button
                  disabled={!battleButtonEnabled}
                  backgroundColor="blue"
                  textColor="white"
                  label="Notify Me"
                  onClick={notifyBattleSignup}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
