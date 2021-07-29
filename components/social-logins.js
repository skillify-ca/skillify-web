import { useState } from "react";

const SocialLogins = ({ onSubmit }) => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  return (
    <>
      <button
        type="submit"
        className="flex justify-between items-center bg-white border border-black rounded-2xl p-4 w-64 hover:bg-gray-100 shadow-lg"
        onClick={() => {
          setIsRedirecting(true);
          onSubmit("google");
        }}
        key={"google"}
      >
        Sign in with Google
        <img className="w-8" src="/images/googleLogo.png" />
      </button>
      {isRedirecting && <div className="redirecting">Redirecting...</div>}
    </>
  );
};

export default SocialLogins;
