import Link from "next/link";
import React from "react";
import { Button } from "../../ui/Button";
import ActiveCampaignEmailCapture from "./ActiveCampaignEmailCapture";

const LeadMagnets = () => {
  return (
    (<div>
      <div className="grid h-full grid-cols-1 bg-no-repeat sm:p-16 sm:grid-cols-3 bg-email-capture bg-charmander bg-blend-multiply">
        <Link href="/guide" legacyBehavior>
          <div className="flex flex-col justify-between p-4 m-4 bg-white sm:p-8">
            <h1 className="mb-4 font-extrabold tracking-tight text-gray-900">
              <p className="text-2xl text-gray-900">
                <span>Get our</span>{" "}
                <span className="text-charmander">top 12 secret tips</span>{" "}
                <span className="">
                  for learning to code and starting a career in
                </span>{" "}
                <span className="text-charmander">tech</span>
              </p>
            </h1>
            <Button label={"Learn More"} />
          </div>
        </Link>
        <Link href="/quiz" legacyBehavior>
          <div className="flex flex-col justify-between p-4 m-4 bg-white sm:p-8">
            <h1 className="mb-4 font-extrabold tracking-tight text-gray-900">
              <p className="text-2xl text-gray-900">
                <span>Not sure what</span>{" "}
                <span className="text-charmander"> jobs</span>{" "}
                <span className="">
                  exist? Take our career in tech personality
                </span>{" "}
                <span className="text-charmander"> quiz</span>{" "}
              </p>
            </h1>
            <Button label={"Learn More"} />
          </div>
        </Link>
        <a href="https://www.joinskillify.com">
          <div className="flex flex-col justify-between p-4 m-4 bg-white sm:p-8">
            <h1 className="mb-4 font-extrabold tracking-tight text-gray-900">
              <p className="text-2xl text-gray-900">
                <span>Webinar: How to</span>{" "}
                <span className="text-charmander">start a career</span>{" "}
                <span className="">in tech in just</span>{" "}
                <span className="text-charmander">6 months</span>{" "}
              </p>
            </h1>
            <Button label={"Learn More"} />
          </div>
        </a>
      </div>
    </div>)
  );
};

export default LeadMagnets;
