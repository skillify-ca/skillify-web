import React from "react";
import Card, { CardData } from "../../../../../components/coding/Card";
import Navbar from "../../../../../components/ui/Navbar";

const React1 = () => {
  const data: CardData[] = [
    {
      title: "React Compoents and Props",
      link: "https://reactjs.org/docs/components-and-props.html",
      image: "/images/component.png",
      description: "Explore the building blocks of React",
    },
    {
      title: "React Hooks",
      link: "https://reactjs.org/docs/hooks-state.html",
      image: "/images/hook.jpeg",
      description: "How to make the most of the useState and useEffect hooks",
    },
    {
      title: "Conditional Rendering",
      link: "https://reactjs.org/docs/conditional-rendering.html",
      image: "/images/conditional.jpeg",
      description:
        "Have the power to render different pages, making your possibilities endless",
    },
    {
      title: "Getting your First App running",
      link: "https://reactjs.org/docs/create-a-new-react-app.html",
      image: "/images/steps.png",
      description: "Build your first app",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 bg-white p-8 m-8 space-y-4 space-x-8">
        <h1 className="font-bold text-5xl">React 1</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-white space-y-4">
          <div className="flex flex-col space-y-4">
            <p className="font-bold">Lessons</p>
            <p>
              React is a powerful library that makes web development very
              scalable and painless. With the React library we can use
              Javascript or TypeScript to make interactive webpages with many
              interesting built-in features which we will talk about in the next
              section.
            </p>

            <div className="flex flex-col space-y-2">
              <p className="font-bold">Tutorials</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          </div>
          <div className="flex flex-col space-y-2 sm:ml-4">
            <iframe
              width="750"
              height="400"
              src="https://www.youtube.com/embed/N3AkSS5hXMA?start=28"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <p className="font-bold">Key Concepts</p>
            <p className="">I can define and use:</p>
            <ul className="list-disc list-inside">
              <li>React Component and Props</li>
              <li>The useState hook</li>
              <li>The useEffect hook</li>
              <li>Conditional Rendering</li>
              <li>Handling Events</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default React1;
