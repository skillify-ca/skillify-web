import Card, { CardData } from "../../../../../components/coding/Card";
import Navbar from "../../../../../components/Navbar";

const JS1 = () => {
  const data: CardData[] = [
    {
      title: "Grasshopper",
      link: "https://grasshopper.app/",
      image:
        "https://grasshopper.app/assets/static/images/home-touts/adventure__journey.svg",
      description: "A mobile application with Javascript challenges",
    },
    {
      title: "Code HS",
      link: "https://codehs.com/textbook/introjs_textbook/",
      image: "https://codehs.com/static/img/logo.png",
      description: "Intro to Javascript Textbook",
    },
    {
      title: "Code Wars",
      link: "https://www.codewars.com/",
      image:
        "https://www.codewars.com/assets/logos/logo-square-red-big-c74ae0e7a89b33acd3beb1f08229630391934650e3bbd30ddc40e8be5bbfc71e.png",
      description:
        "Improve your development skills by training with your peers using coding challenges",
    },
    {
      title: "Codecademy JS Course",
      link: "https://www.codecademy.com/learn/introduction-to-javascript",
      image:
        "https://pentagram-production.imgix.net/1cbbfce1-48d5-4257-95e5-745c10e6492e/eo_codecademy_01.jpg?crop=edges&fit=crop&h=630&rect=375%2C0%2C2256%2C1412&w=1200",
      description: "An online course introducing you to Javascript",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 bg-white p-8 m-8 space-y-4">
        <h1 className="font-bold text-5xl">JavaScript 1</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-white space-y-4">
          <div className="flex flex-col space-y-4">
            <p className="font-bold">Lesson</p>
            <p>
              JavaScript is yet another language that you need to learn. This
              lesson will teach you the main concepts of JavaScript.
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
          <div className="sm:ml-4">
            <iframe
              width="560"
              height="315"
              className="w-full"
              src="https://www.youtube.com/embed/FCMxA3m_Imc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="flex flex-col space-y-2">
              <p className="font-bold">Key Concepts</p>
              <p className="">I can define and use:</p>

              <ul className="list-disc list-inside">
                <li>Variables</li>
                <li>Functions</li>
                <li>Conditionals</li>
                <li>Arrays</li>
                <li>Loops</li>
                <li>Objects</li>
                <li>Iterators</li>
              </ul>
            </div>
            <p className="font-bold mb-4 mt-8">
              10 Javascript Code Challlenges
            </p>
            <a href="https://www.codecademy.com/resources/blog/10-javascript-code-challenges-for-beginners/">
              <p className="bg-blue-500 p-4 text-white w-36 text-center rounded-lg border-b-4 border-blue-800">
                Start Quiz
              </p>
            </a>
            <img src="/images/coding/units/CSS/browsers.svg" className="w-96" />
          </div>
        </div>
      </div>
    </>
  );
};

export default JS1;
