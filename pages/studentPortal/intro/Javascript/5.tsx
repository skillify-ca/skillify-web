import React from "react";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";

const JS5 = ({ lessonComponents }) => {
  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 p-8 space-y-4 bg-gray-100 text-gray-700">
          <ProgressBar completed={100} />
          <h1 className="font-bold text-xl mt-12">Requirements:</h1>
          <div className="flex-row">
            <h1 className="text-charmander">Step 1:</h1>
            <p>Follow the same Flag Pattern Layout we used in our blogs.</p>
            <img src="/images/coding/units/css/layout1.png" className="w-96" />
          </div>
          <div>
            <p className="text-charmander">Step 2:</p>
            <p>
              Your customer must know what you're selling. Make sure you have
              all of your images for your product!
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 3:</p>
            <p>
              You will also need to add product details. Hint: Here is where you
              can use your ul and li tags
            </p>
            <p>
              Focus on the structure of your webpage, we will make it flashy
              once we learn CSS styling!
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 4:</p>
            <p>
              Include a Navigation Bar. On this Navigation Bar you must have at
              least 2 elements which is Home and the About page.
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 5:</p>
            <p>
              Add a Purchase button that will redirect the customer to a Stripe
              payment link. Stripe Documentation
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 6:</p>
            <p>
              Finally, the most important requirement. Just have fun! This is
              your time to show off your Web Dev skills to your friends and
              future employers!
            </p>
          </div>
          <div className="flex h-full mt-12 sm:justify-end">
            <a href={"/studentPortal/intro/Javascript/Final1-video"}>
              <Button label="Continue" disabled={false} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default JS5;
