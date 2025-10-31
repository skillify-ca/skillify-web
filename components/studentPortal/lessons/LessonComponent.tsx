import { Sandpack } from "@codesandbox/sandpack-react";
import React from "react";
import Carousel from "../../ui/Carousel";
import CheckboxForm from "../../ui/CheckboxForm";
import SliderList from "../../ui/SliderList";
import WebhookInputBox from "../../ui/WebhookInputBox";
import { Hint } from "../assignments/AssignmentComponent";
import Quiz from "../quiz/Quiz";
import ResourceRow from "./ResourceRow";

export type Resource = {
  title: string;
  description?: string;
  image: string;
  link: string;
};

export type QuizData = {
  questions: QuizQuestion[];
};

export type QuizQuestion = {
  A: string;
  B: string;
  C: string;
  D: string;
  text: string;
  answer: string;
  image?: string;
};

export type LessonComponentData =
  | {
    component: "title";
    text: string;
  }
  | {
    component: "description";
    text: string;
    bold?: boolean;
  }
  | {
    component: "image";
    url: string;
  }
  | {
    component: "caption";
    text: string;
  }
  | {
    component: "resource-list";
    title?: string;
    resources: Resource[];
  }
  | { component: "quiz"; data: QuizData }
  | {
    component: "code-sandbox";
    title: string;
    link: string;
  }
  | {
    component: "list";
    items: string[];
  }
  | {
    component: "loom-video";
    videoId: string;
  }
  | {
    component: "submission";
    codeSandboxTitle: string;
    link: string;
    placeholder: string;
    assignmentId: string;
  }
  | {
    component: "video";
    url: string;
  }
  | {
    component: "custom";
    children: React.ReactNode;
  }
  | {
    component: "code-snippet";
    text?: string;
    code: string;
  }
  | {
    component: "youtube";
    url: string;
  }
  | {
    component: "template";
    templateLink: string;
  }
  | {
    component: "hint-list";
    hintRow: Hint[];
  }
  | {
    component: "prompt";
    header: string;
    bullets: string[];
  }
  | {
    component: "checkboxForm";
    items: { label: string; required: boolean }[];
    url: string;
    title: string | undefined;
  }
  | {
    component: "carousel",
    items: { text: string; image: string }[]
  }
  | {
    component: "slider-list",
    items: string[]
  }

export type LessonComponentProps = {
  data: LessonComponentData;
};

export default function LessonComponent({ data }: LessonComponentProps) {
  if (data.component === "title") {
    return <h1 className="text-5xl font-bold">{data.text}</h1>;
  }
  if (data.component === "description") {
    if (data.bold) {
      return <p className="whitespace-pre-line font-bold">{data.text}</p>;
    }
    return <p className="whitespace-pre-line">{data.text}</p>;
  }
  if (data.component === "caption") {
    return <p className="italic whitespace-pre-line">{data.text}</p>;
  }
  if (data.component === "image") {
    return <img src={data.url} />;
  }
  if (data.component === "custom") {
    return <p className="whitespace-pre-line">{data.children}</p>;
  }
  if (data.component === "code-snippet") {
    return (
      <div className="mx-4 space-y-4">
        {data.text && <div>{data.text}</div>}
        <pre className="p-4 border-2 bg-slate-100 border-black-transparent rounded-xl">
          <Sandpack template="react-ts" files={{ "App.tsx": data.code }} />
        </pre>
      </div>
    );
  }
  if (data.component === "submission") {
    return (
      <>
        <div className="mx-4">
          <p className="text-lg">{data.codeSandboxTitle}</p>
          <WebhookInputBox
            placeholder={data.placeholder}
            validationRequirement={"vercel.app"}
          />
        </div>
      </>
    );
  }
  if (data.component === "resource-list") {
    return (
      <div>
        <h1 className="font-bold mb-4">{data.title ?? "Resources"}</h1>
        <div className="flex flex-col gap-8">
          {data.resources.map((it, index) => (
            <ResourceRow
              key={index}
              title={it.title}
              description={it.description}
              disabled={false}
              image={it.image}
              link={it.link}
            />
          ))}
        </div>
      </div>
    );
  }
  if (data.component === "list") {
    return (
      <div>
        <ul className="flex flex-col gap-4 list-disc list-inside">
          {data.items.map((it, index) => (
            <li>{it}</li>
          ))}
        </ul>
      </div>
    );
  }
  if (data.component === "carousel") {
    return <Carousel items={data.items} />
  }
  if (data.component === "slider-list") {
    return <SliderList items={data.items} />
  }
  if (data.component === "quiz") {
    return <Quiz quizData={data.data} />;
  }
  if (data.component === "code-sandbox") {
    return (
      <>
        <h1 className="font-bold">{data.title}</h1>
        <div className="aspect-w-16 aspect-h-9">
          <iframe className="rounded-xl" src={data.link} />
        </div>
      </>
    );
  }
  if (data.component === "loom-video") {
    return (
      <div className="pb-56 mb-8 h-96">
        <iframe
          src={`https://www.loom.com/embed/${data.videoId}`}
          frameBorder="0"
          webkit-allowfullscreen
          moz-allowfullscreen
          allowFullScreen
          className="w-full h-96"
        ></iframe>
      </div>
    );
  }
  if (data.component === "video") {
    return (
      <div className="h-full flex flex-col">
        <h3 className="font-bold mb-4">Video</h3>
        {/* <iframe
          src={`${data.url}`}
          frameBorder="0"
          webkit-allowfullscreen
          moz-allowfullscreen
          allowFullScreen
          className="w-full h-96"
        ></iframe> */}
        <video
          src={`${data.url}`}
          controls
          className="h-full w-full"
        />
      </div>
    );
  }
  if (data.component === "youtube") {
    return (
      <div className="w-full overflow-scroll">
        <iframe
          width="560"
          height="315"
          src={data.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
  if (data.component === "checkboxForm") {
    return (
      <CheckboxForm items={data.items} url={data.url} title={data.title} />
    );
  }

  return null;
}
