import { useState } from "react";
import { useAuth } from "../../../../lib/authContext";
import { logToSlack } from "../../../../pages/api/slack/slackLogger";
import { Button } from "../../../ui/Button";

export default function Upgrade() {
  const [isDisabled, setIsDisabled] = useState(false);

  const { user } = useAuth();
  function handleRequestClick() {
    setIsDisabled(true);
    logToSlack(`New Slack Access Request: ${user.email}`);
  }
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-8 text-white max-h-80">
      <h1 className="flex max-w-xl text-base font-bold text-center md:text-3xl">
        Looking for K-12 Tutoring?
      </h1>
      <img className="w-80" src="/images/freemium/tutoring.svg" />
      <ul className="flex flex-col max-w-3xl gap-4 p-2 text-xs rounded-lg md:text-lg bg-rattata/20">
        <li>
          Reach out to us to discuss personalized tutoring options for K-12
          students.
        </li>
       
      </ul>
      {isDisabled ? (
        <div className="flex items-center gap-4 p-2 text-sm">
          <img
            className="bg-white rounded-full"
            src="/images/freemium/greenCheck.svg"
          />
          <p>
            We got your request! We will reach out to you at your
            registered email ASAP.
          </p>
        </div>
      ) : (
        <Button
          size="large"
          disabled={isDisabled}
          label={`${"Request Info"}`}
          onClick={handleRequestClick}
        />
      )}
    </div>
  );
}
