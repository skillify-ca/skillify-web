import Card, { CardData } from "../../../../../components/coding/Card";
import Navbar from "../../../../../components/Navbar";

const CSS = () => {
  const data: CardData[] = [
    {
      title: "W3Schools CSS tutorial",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png",
      link: "https://www.w3schools.com/css/default.asp",
      description: "Start at the beginning and stop at CSS Overflow.",
    },
    {
      title: "CSS Grid Garden",
      image: "https://cssgridgarden.com/favicon.ico",
      link: "https://cssgridgarden.com/",
      description: "Do all levels.",
    },
    {
      title: "CSS Flexbox Froggy",
      image:
        "https://www.saashub.com/images/app/service_logos/82/fc3339facb56/large.png?1569287111",
      link: "https://flexboxfroggy.com/",
      description: "Do all levels.",
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
            <div className="flex flex-col space-y-8">
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
            </div>{" "}
            <div className="p-4">
              <p className="font-bold">Assignments</p>

              <div className="flex flex-col space-y-2">
                Create the following layouts
                <ul className="list-disc list-decimal">
                  <li>
                    <img
                      src="/images/coding/units/css/layout1.png"
                      className="w-64"
                    />
                  </li>
                  <li>
                    <p>
                      Create a grid layout that looks like the one in{" "}
                      <a href="nba.com" className="underline text-blue-600">
                        nba.com
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <img src="/images/coding/units/css/browsers.svg" className="w-96" />
          </div>
          //Adding HTML component from W3S
          <div class="container">
            // Full-width images with number text
            <div class="mySlides">
              <div class="numbertext">1 / 6</div>
              <img src="img_woods_wide.jpg" style="width:100%" />
            </div>
            <div class="mySlides">
              <div class="numbertext">2 / 6</div>
              <img src="img_5terre_wide.jpg" style="width:100%" />
            </div>
            <div class="mySlides">
              <div class="numbertext">3 / 6</div>
              <img src="img_mountains_wide.jpg" style="width:100%" />
            </div>
            <div class="mySlides">
              <div class="numbertext">4 / 6</div>
              <img src="img_lights_wide.jpg" style="width:100%" />
            </div>
            <div class="mySlides">
              <div class="numbertext">5 / 6</div>
              <img src="img_nature_wide.jpg" style="width:100%" />
            </div>
            <div class="mySlides">
              <div class="numbertext">6 / 6</div>
              <img src="img_snow_wide.jpg" style="width:100%" />
            </div>
            //Next and previous buttons
            <a class="prev" onclick="plusSlides(-1)">
              &#10094;
            </a>
            <a class="next" onclick="plusSlides(1)">
              &#10095;
            </a>
            // Image text
            <div class="caption-container">
              <p id="caption"></p>
            </div>
            // Thumbnail images
            <div class="row">
              <div class="column">
                <img
                  class="demo cursor"
                  src="img_woods.jpg"
                  style="width:100%"
                  onclick="currentSlide(1)"
                  alt="The Woods"
                />
              </div>
              <div class="column">
                <img
                  class="demo cursor"
                  src="img_5terre.jpg"
                  style="width:100%"
                  onclick="currentSlide(2)"
                  alt="Cinque Terre"
                />
              </div>
              <div class="column">
                <img
                  class="demo cursor"
                  src="img_mountains.jpg"
                  style="width:100%"
                  onclick="currentSlide(3)"
                  alt="Mountains and fjords"
                />
              </div>
              <div class="column">
                <img
                  class="demo cursor"
                  src="img_lights.jpg"
                  style="width:100%"
                  onclick="currentSlide(4)"
                  alt="Northern Lights"
                />
              </div>
              <div class="column">
                <img
                  class="demo cursor"
                  src="img_nature.jpg"
                  style="width:100%"
                  onclick="currentSlide(5)"
                  alt="Nature and sunrise"
                />
              </div>
              <div class="column">
                <img
                  class="demo cursor"
                  src="img_snow.jpg"
                  style="width:100%"
                  onclick="currentSlide(6)"
                  alt="Snowy Mountains"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CSS;
