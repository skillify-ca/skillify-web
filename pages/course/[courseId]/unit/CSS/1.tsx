import Card, { CardData } from "../../../../../components/coding/Card";
import Navbar from "../../../../../components/Navbar";

const CSS = () => {
  const data: CardData[] = [
    {
      title: "W3Schools CSS tutorial",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png",
      link: "https://www.w3schools.com/css/default.asp",
      description: "",
    },
    {
      title: "CSS Grid Garden",
      image: "https://cssgridgarden.com/favicon.ico",
      link: "https://cssgridgarden.com/",
      description: "",
    },
    {
      title: "CSS Flexbox Froggy",
      image:
        "https://www.saashub.com/images/app/service_logos/82/fc3339facb56/large.png?1569287111",
      link: "https://flexboxfroggy.com/",
      description: "",
    },
    {
      title: "CSS Diner",
      image:
        "https://i.pinimg.com/originals/8a/b1/ad/8ab1ad8128508785f956eb6f58779b47.jpg",
      link: "https://flukeout.github.io/",
      description: "",
    },
  ];
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
              {data.map((it) => (
                <Card
                  title={it.title}
                  image={it.image}
                  description={it.description}
                  link={it.link}
                />
              ))}
            </div>
          </div>
          <div className="ml-4">
            <div className="p-4">
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
            <img src="/images/coding/units/CSS/browsers.svg" className="w-96" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CSS;
