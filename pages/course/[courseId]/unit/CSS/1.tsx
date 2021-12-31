import Navbar from "../../../../../components/Navbar";

const HTML1 = () => {
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-1 bg-white p-8 m-8 space-y-4">
        <h1 className="font-bold text-5xl">CSS 1</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-white space-y-4">
          <div className="flex flex-col space-y-4">
            <p className="font-bold">Lesson</p>
            <p>
              CSS stands for cascading style sheets. It's another language that
              you need to learn that has different rules and keywords compared
              to HTML. In this lesson you will learn about different styles that
              you can apply to your HTML elements.
            </p>
            <div className="flex flex-col space-y-2">
              <p className="font-bold">Tutorials</p>

              <a
                className="underline text-blue-600"
                href="https://www.w3schools.com/css/default.asp"
              >
                W3Schools CSS tutorial
              </a>
              <a
                className="underline text-blue-600"
                href="https://cssgridgarden.com/"
              >
                CSS Grid Garden
              </a>
              <a
                className="underline text-blue-600"
                href="https://flexboxfroggy.com/"
              >
                CSS Flexbox Froggy
              </a>
              <a
                className="underline text-blue-600"
                href="https://flukeout.github.io/"
              >
                CSS Diner
              </a>
            </div>
            <div>
              <p className="font-bold">Readings</p>

              <div className="underline text-blue-600 flex flex-col space-y-2">
                <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
                  CSS Tricks: Flexbox
                </a>
                <a href="https://css-tricks.com/snippets/css/complete-guide-grid/">
                  CSS Tricks: Grid
                </a>
                <a href="https://www.codecademy.com/learn/learn-css">
                  Codecademy CSS Course{" "}
                </a>
              </div>
            </div>
          </div>
          <img src="/images/coding/units/CSS/browsers.svg" className="w-96" />
        </div>
      </div>
    </>
  );
};

export default HTML1;
