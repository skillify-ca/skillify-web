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
        <div className="flex flex-col items-center py-4 text-white bg-murkrow">
          <img src="/images/logo-dark.svg" className="w-36" />
          <h1 className="mt-4 text-3xl font-bold text-center">
            Learn to Code Strategy Guide
          </h1>
          <p className="text-center">
            This free guide will help you kickstart your coding journey so you
            can work less and make more money.
          </p>
        </div>
        <EmailCapture />
        <div className="p-8 bg-gray-200 border-t-2">
          <h2 className="mb-4 text-3xl font-bold text-center">
            Who is this guide for
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="flex flex-col items-center p-4 m-4 transition-all transform bg-white rounded-lg shadow-lg hover:scale-110">
              <p className="mb-4 text-5xl">💼</p>
              <p>
                You want to transition into a career or get your{" "}
                <b>first job</b> in the tech industry.
              </p>
            </div>
            <div className="flex flex-col items-center p-4 m-4 transition-all transform bg-white rounded-lg shadow-lg hover:scale-110">
              <p className="mb-4 text-5xl ">💡</p>
              <p>
                You want build out your own startup <b>business ideas</b>.
              </p>
            </div>
            <div className="flex flex-col items-center p-4 m-4 transition-all transform bg-white rounded-lg shadow-lg hover:scale-110">
              <p className="mb-4 text-5xl ">🏫</p>
              <p>
                You want to learn a valuable skill that will{" "}
                <b>future-proof your career</b> in your any industry.
              </p>
            </div>
          </div>
        </div>
        <p className="p-4 text-center text-white bg-murkrow">
          Until now, this resource has only been available to Skillify students.
          But my team went through it last month and thought, “This is amazing
          and deserves to be shared with everyone!”
        </p>
        <div className="p-8 bg-gray-200 border-b-2">
          <h2 className="mb-4 text-3xl font-bold text-center">
            What you'll learn
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="flex flex-col items-center p-4 m-4 transition-all transform bg-white rounded-lg shadow-lg hover:scale-110">
              <p className="mb-4 text-5xl">👶</p>
              <p>
                How to start coding with <b>no previous experience</b>
              </p>
            </div>
            <div className="flex flex-col items-center p-4 m-4 transition-all transform bg-white rounded-lg shadow-lg hover:scale-110">
              <p className="mb-4 text-5xl ">😩</p>
              <p>
                How to <b>avoid getting overwhelmed</b> when learning this
                in-demand skill
              </p>
            </div>
            <div className="flex flex-col items-center p-4 m-4 transition-all transform bg-white rounded-lg shadow-lg hover:scale-110">
              <p className="mb-4 text-5xl ">📈</p>
              <p>
                12 strategies that will help you <b>make progress</b> no matter
                where you are in your journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
