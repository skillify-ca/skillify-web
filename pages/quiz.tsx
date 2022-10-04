import EmailCapture from "../components/coding/landing/EmailCapture";
import SEO from "../components/SEO";

export default function Page() {
  return (
    <div>
      <SEO
        title={"Breaking into Tech Career Personality Quiz"}
        description={
          "This quiz tells you best path to starting a career in tech"
        }
        image={"https://melv1n.com/img/learn-to-code-how-to-start.png"}
      />
      <div className="flex flex-col bg-white">
        <div className="flex flex-col items-center py-4 text-white bg-murkrow">
          <img src="/images/logo-dark.svg" className="w-36" />
          <h1 className="mt-4 text-3xl font-bold text-center">
            Career in Tech Personality Quiz
          </h1>
          <p className="text-center">
            This free quiz will help you figure out what job in tech is the best
            fit for you.
          </p>
        </div>

        <div className="bg-gray-200">
          <iframe
            src="https://ly0na3vldi7.typeform.com/to/m5Omy5la"
            className="w-full h-screen"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
