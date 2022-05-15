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
      <div className="flex flex-col bg-white">
        <h1 className="my-4 text-2xl font-bold text-center">
          Learning to Code Strategy Guide
        </h1>
        <p className="mb-4 text-center">Here is a little gift for you!</p>

        <EmailCapture />
        <div className="p-8 border-b-2">
          <p className="font-bold ">What you'll learn:</p>
          <ul className="list-disc list-inside">
            <li>👶 How to start coding with no previous experience</li>
            <li>
              😩 How to avoid getting overwhelmed when learning this in-demand
              skill
            </li>
            <li>
              📈 12 strategies that will help you make progress no matter where
              you are in your journey
            </li>
          </ul>
        </div>
        <p className="p-4 text-center text-white bg-murkrow">
          Until now, this resource has only been available to Skillify students.
          But my team went through it last month and thought, “This is amazing
          and deserves to be shared with everyone!”
        </p>
        <div className="p-8 border-t-2">
          <p className="font-bold">This guide is for you if:</p>
          <ul className="list-disc list-inside">
            <li>
              💼 You want to transition into a career or get your first job in
              the tech industry.
            </li>
            <li>💡 You want build out your own startup business ideas.</li>
            <li>
              🏫 You want to learn a valuable skill that will future-proof your
              career in your any industry.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
