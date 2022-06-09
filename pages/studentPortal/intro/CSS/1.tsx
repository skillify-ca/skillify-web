import React, { useEffect } from "react";
import CSSQuiz from "../../../../components/coding/CSSQuiz";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import LessonComponent, {
  LessonComponentData,
  Resource,
} from "../../../../components/coding/studentPortal/LessonComponent";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  lessonSelector,
  resetCurrentSteps,
  setTotalSteps,
} from "../../../../redux/lessonSlice";

const CSS1 = ({ lessonComponents, totalSteps }) => {
  const assignments = [
    { link: "/coding/css/sujee-week-1/index.html", title: "Sujee-Week1" },
    { link: "/coding/css/mau-week-1/index.html", title: "Mau-Week1" },
    { link: "/coding/css/vinon-week-1/indexflower.html", title: "Vinon-Week1" },
    { link: "/coding/css/jacky-week-1/index.html", title: "Jacky-Week1" },
    { link: "/coding/css/mithulan-week-1/index.html", title: "Mithulan-Week1" },
  ];

  const dispatch = useDispatch();
  const lessonState = useSelector(lessonSelector);
  useEffect(() => {
    dispatch(setTotalSteps(totalSteps));
    dispatch(resetCurrentSteps(null));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 p-8">
        <ProgressBar
          completed={(lessonState.currentStep * 100) / lessonState.totalSteps}
        />
        {lessonComponents.map((it) => (
          <LessonComponent data={it} />
        ))}
        <div className="pb-56 mb-8 h-96">
          <iframe
            src="https://www.loom.com/embed/0e30b6386ed847e490b849a2d24d6b60"
            frameBorder="0"
            webkit-allowfullscreen
            moz-allowfullscreen
            allowFullScreen
            className="w-full h-96"
          ></iframe>
        </div>
        <div className="pb-56 mb-8 h-96">
          <iframe
            src="https://www.loom.com/embed/13bf6c0abba840eba25daf94e332244f"
            frameBorder="0"
            webkit-allowfullscreen
            moz-allowfullscreen
            allowFullScreen
            className="w-full h-96"
          ></iframe>
        </div>

        <div className="flex mt-8 sm:justify-end">
          <a href={"/studentPortal/intro/CSS/2"}>
            <Button
              label="Continue"
              disabled={lessonState.totalSteps !== lessonState.currentStep}
            />
          </a>
        </div>

        {false && (
          <div>
            <div className="p-4">
              <p className="font-bold">Quiz</p>
              <CSSQuiz />
            </div>
            <div className="p-4">
              <p className="font-bold">Assignment</p>
              <div className="flex flex-col p-4 mt-4 space-y-2 bg-blue-100 shadow-lg rounded-xl">
                <img
                  src="/images/coding/units/css/layout1.png"
                  className="w-64"
                />
                <p>
                  Use styled divs to create this French Flag layout in your blog
                  assignment. Place your navigation menu in the top green header
                  and your main blog content inside of the grey div. After you
                  have laid out all your content, remove all the
                  background-colour styling from your divs so that you have a
                  consistent background and a professional looking website.
                </p>
              </div>
            </div>
            <img src="/images/coding/units/css/browsers.svg" className="w-96" />
            <div className="flex flex-col">
              <p className="font-bold">Previous Assignments</p>
              <p className="">
                You can look at how these pages were build by navigating to the
                page and right-clicking on it. Select View Page Source to see
                the HTML code that makes up the web page.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {assignments.map((it) => (
                  <div>
                    <Link href={it.link}>
                      <p className="text-blue-600 underline">{it.title}</p>
                    </Link>
                    <iframe
                      src={it.link}
                      className="w-full p-4 bg-white border-4 border-purple-400 shadow-lg h-96"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const resources: Resource[] = [
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
      title: "CSS Tricks: Grid",
      image:
        "https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/12/default-social-css-tricks.png",
      link: "https://css-tricks.com/snippets/css/complete-guide-grid/",
      description:
        "Skim through this reference guide on CSS Grid. But keep it handy when building websites.",
    },
    {
      title: "CSS Tricks: Flexbox",
      image:
        "https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/12/default-social-css-tricks.png",
      link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
      description:
        "Skim through this reference guide on CSS Flexbox. But keep it handy when building websites.",
    },
    {
      title: "CSS Grid Layout Crash Course",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s176-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=jV8B24rSN5o",
      description: "Optional - A 30 minute video explaining CSS Grid",
    },
    {
      title: "CSS Tricks: Flexbox",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s176-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=JJSoEo8JSnc",
      description: "Optional - A 30 minute video explaining CSS Flexbox.",
    },
  ];
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "CSS",
    },
    {
      component: "description",
      text:
        "CSS stands for cascading style sheets. It's another language that you need to learn that has different rules and keywords compared to HTML. In this lesson you will learn about different styles that you can apply to your HTML elements.",
    },
    {
      component: "resource-list",
      resources,
    },
  ];
  return { props: { lessonComponents, totalSteps: 4 } };
}

export default CSS1;
