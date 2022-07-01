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
      <div className="flex flex-col items-center justify-center h-screen py-4 text-white text-4xl text-red-700">
        Hello World
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
