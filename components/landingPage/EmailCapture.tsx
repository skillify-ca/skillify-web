import React from "react";
import { Button } from "../ui/Button";
import { HighlightableText } from "./Hero";

type EmailCaptureProps = {
  headerText: HighlightableText[];
  description: string;
  onSubmit: (name, email) => void;
};

const EmailCapture = ({
  headerText,
  description,
  onSubmit,
}: EmailCaptureProps) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [showError, setShowError] = React.useState(false);

  function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

  function handleSubmitClick(name, email) {
    if (name && isValidEmail(email)) {
      onSubmit(name, email);
    } else {
      setShowError(true);
    }
  }

  return (
    <div>
      <div className="grid h-full grid-cols-1 bg-no-repeat sm:p-16 sm:grid-cols-2 bg-email-capture bg-charmander bg-blend-multiply">
        <div className="grid grid-cols-1 p-4 bg-white sm:p-16">
          <h1 className="mb-4 font-extrabold tracking-tight text-gray-900">
            <p className="text-3xl text-gray-900">
              {headerText.map((line) => (
                <span
                  key={line.text}
                  className={`${line.highlight ? "text-charmander" : ""}`}
                >
                  {line.text}{" "}
                </span>
              ))}
            </p>{" "}
          </h1>
          <p className="text-sm font-bold text-gray-500">Name</p>
          <input
            type="text"
            className="w-full p-2 my-2 border-2 border-gray-300 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="text-sm font-bold text-gray-500">Email</p>
          <input
            type="email"
            className="w-full p-2 my-2 border-2 border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            label="Submit"
            textColor="text-white"
            size="large"
            onClick={() => handleSubmitClick(name, email)}
          />
          {showError && (
            <p className="text-red-500">
              Please enter a valid name and email address
            </p>
          )}
        </div>
        <div className="grid grid-cols-1">
          <div className="flex flex-col items-center justify-center p-4">
            <p className="text-xl font-bold text-white sm:text-2xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCapture;
