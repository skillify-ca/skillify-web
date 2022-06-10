import Link from "next/link";
import { Button } from "../../../ui/Button";

export default function CodingChallengeInstructions() {
  return (
    <div className="p-8 mt-8 bg-white dark:bg-gray-900">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <p className="mt-3 text-xl font-bold">
            JS Coding Challenge Instructions{" "}
          </p>
          <p className="">
            Throughout this module there will be coding challenges for you to
            download and complete. These instructions explain how to download
            and complete these challenges.
          </p>
          <ol type="1">
            <li>
              <b>1.</b> Click the Challenge and it should download a zip file
            </li>
            <li>
              <b>2.</b> In the zip file there is a practice and a correct
              version of the code
            </li>
            <li>
              <b>3.</b> Open the practice version of the code and follow
              instructions in the document
            </li>
            <li>
              <b>4.</b> As a prerequisite to the coding challenges you'll need
              to install node.js.
              <a
                href="https://www.mathchamp.ca/course/coding/unit/warmups/1"
                className="font-bold text-blue-500"
              >
                Click Here to See How.
              </a>
            </li>
            <li>
              <b>5.</b> In VS Code you will need to download an extension called
              "Code Runner"
            </li>
            <img src="/images/extension.png" className="max-w-4xl my-8" />
            <li>
              <b>6.</b> After you are done writing your function, press
              cmd+shift+p or control+shift+p for windows
            </li>
            <li>
              <b>7.</b> Type Run Code in the search bar and hit enter
              <img src="/images/cmd+shift+p.png" className="max-w-4xl my-8" />
            </li>
            <li>
              <b>8.</b> In the bottom window of VS code you should see your
              program outputting something
            </li>
            <img src="/images/console.png" className="max-w-4xl my-8" />
            <li>
              {" "}
              <b>9.</b> Compare results to see if your coded your function
              correctly
            </li>
            <li>
              <b>10.</b> If the outputs are not matching, try again, and if
              you're still having trouble, refer to the Correct implementation
              in the zip file
            </li>
            <li>
              <b>11.</b> Give the challenge a try before taking a peek at the
              solution!!
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
