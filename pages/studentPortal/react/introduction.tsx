import LessonComponent from "../../../components/coding/studentPortal/LessonComponent";
import ProgressBar from "../../../components/coding/studentPortal/ProgressBar";
import { Button } from "../../../components/ui/Button";

export default function Introduction() {
  const handleContinue = () => {};
  return (
    <div className="grid grid-cols-1 gap-8 px-4 md:px-8 lg:px-12">
      <ProgressBar completed={100} />

      <div className="grid grid-cols-1 gap-8">
        <div>
          <p>
            Welcome to the web development course. In this course you will learn
            how to build interactive web applications. Before you can get
            started, following the instructions to install Node.js on to your
            laptop. Node.js is an environment that you use to build
            applications.
          </p>
          <p className="text-lg font-bold text-green-700">
            {" "}
            How to download Node.js{" "}
          </p>
          <ol>
            <li>
              1. Google "Node.js" and click this link
              https://nodejs.org/en/download/
            </li>
            <img src="/images/download.png" height="50px" />
            <li>
              2. You should see this homepage. Click on your operating system.
            </li>
            <li>3. Click on the Downloaded Package</li>
            <li>
              4. It should open up something similar to the image below. Agree
              to the terms and conditions and press continue.
            </li>
            <img src="/images/terms-and-conditions.png" />
            <li>5. Once you reach this end screen you're good to go!</li>
            <img src="/images/end-screen.png" />
          </ol>
        </div>
      </div>
      <div className="flex mt-8 sm:justify-end">
        <Button onClick={handleContinue} label="Continue" disabled={false} />
      </div>
    </div>
  );
}
