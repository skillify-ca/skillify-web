import React from "react";
import Quiz from "./quiz/Quiz";
import ResourceRow from "./ResourceRow";
import { Sandpack } from "@codesandbox/sandpack-react";
import WebhookInputBox from "../../ui/WebhookInputBox";

export type Resource = {
  title: string;
  description?: string;
  image: string;
  link: string;
};
export type LessonComponentData =
  | {
      component: "title";
      text: string;
    }
  | {
      component: "description";
      text: string;
    }
  | {
      component: "resource-list";
      resources: Resource[];
    }
  | { component: "quiz" }
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
    };

export type LessonComponentProps = {
  data: LessonComponentData;
};

export default function LessonComponent({ data }: LessonComponentProps) {
  if (data.component === "title") {
    return <h1 className="text-5xl font-bold">{data.text}</h1>;
  }
  if (data.component === "description") {
    return <p className="whitespace-pre-line">{data.text}</p>;
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
      <>
        <h1 className="font-bold">Resources</h1>
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
      </>
    );
  }
  if (data.component === "quiz") {
    return <Quiz />;
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
      <div className="pb-56 mb-8 h-96">
        <iframe
          src={`${data.url}`}
          frameBorder="0"
          webkit-allowfullscreen
          moz-allowfullscreen
          allowFullScreen
          className="w-full h-96"
        ></iframe>
      </div>
    );
  }
}
