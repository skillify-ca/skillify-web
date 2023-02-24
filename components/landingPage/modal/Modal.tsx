import { useRouter } from "next/router";
import { useState } from "react";
import * as fbq from "../../../../lib/fbPixel";
import ActiveCampaignWaitlistOptin from "../ActiveCampaignWaitlistOptIn";

export default function Modal({ handleClose }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const router = useRouter();

  const handleClick = async () => {
    if (email.length > 0) {
      fbq.event("Lead");

      // TODO (vithushan) delete this once emails are confirmed to be sending
      const slackURL =
        "https://math-app-1.herokuapp.com/notifications?product=request-demo";
      const slackOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          email: email,
        }),
      };
      fetch(slackURL, slackOptions);

      const url = "/api/email/join-waitlist";
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          email,
          name,
        }),
      };
      fetch(url, options).then((res) => router.push("/waitlist-thank-you"));
    }
  };
  return (
    <div>
      <div
        className="absolute top-0 right-0 p-4 text-white cursor-pointer"
        onClick={(e) => {
          handleClose();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <ActiveCampaignWaitlistOptin />
    </div>
  );
}
