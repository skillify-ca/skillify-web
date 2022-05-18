import EmailCapture from "../components/coding/landing/EmailCapture";
import SEO from "../components/SEO";

export default function Page() {
  return (
    <div>
      <SEO
        title={"Learning to Code Guide"}
        description={
          "This guide teaches you our top strategies for learning how to code"
        }
        image={"https://melv1n.com/img/learn-to-code-how-to-start.png"}
      />
      <div className="flex justify-center w-full p-4 bg-murkrow">
        <img src="/images/logo-dark.svg" className="w-36" />
      </div>
      <div className="flex flex-col items-center justify-center h-screen py-4 text-white bg-murkrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-36 h-36"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        <h1 className="my-4 text-3xl font-bold text-center">
          Thank you for requesting a demo!
        </h1>
        <p className="text-center">
          Check your inbox for a link to schedule a call. I'm excited to meet
          you and see how I can help!
        </p>
        <p className="p-4 text-center text-white bg-murkrow">
          No email? Be sure to check your spam folder. You can contact me at{" "}
          <a
            href="mailto:vithushan@skillify.ca"
            className="underline text-charmander"
          >
            vithushan@skillify.ca
          </a>{" "}
          if you need additional assistance.
        </p>
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
