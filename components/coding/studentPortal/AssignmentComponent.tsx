import React, { useState } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import HintRow from "./HintRow";
import AssignmentInputBox from "./AssignmentInputBox";

export type Hint = {
  description: string;
  icon?: string;
  link?: string;
};
export enum Stage {
  INCOMPLETE,
  SUBMITTED,
  COMPLETED,
}

export type AssignmentComponentData =
  | {
      component: "title";
      text: string;
    }
  | {
      component: "prompt";
      text: string;
    }
  | {
      component: "hint-list";
      hintRow: Hint[];
    }
  | {
      component: "output";
      title: string;
      screenshot: string;
    }
  | {
      component: "submission";
      codeSandboxTitle: string;
      link: string;
      placeholder: string;
      assignmentId: string;
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
      component: "loom-video";
      text?: string;
      videoId: string;
    }
  | {
      component: "completed";
      text: string;
      image?: string;
    };

export type AssignmentComponentProps = {
  data: AssignmentComponentData;
};
export default function AssignmentComponent({
  data,
}: AssignmentComponentProps) {
  if (data.component === "title") {
    return <h1 className="text-5xl font-bold">{data.text}</h1>;
  } else if (data.component === "prompt") {
    return <p className="text-lg">{data.text}</p>;
  } else if (data.component === "completed") {
    return <p>{data.text}</p>;
  } else if (data.component === "code-snippet") {
    return (
      <div className="mx-4 space-y-4">
        {data.text && <p>{data.text}</p>}
        <pre className="p-4 border-2 bg-slate-100 border-black-transparent rounded-xl">
          <Sandpack template="react-ts" files={{ "App.tsx": data.code }} />
        </pre>
      </div>
    );
  } else if (data.component === "hint-list") {
    return (
      <>
        <h1 className="font-bold text-lg">
          Hints...{" "}
          <p className="text-base font-normal italic">
            Click the arrow below to reveal
          </p>
        </h1>
        <div className="flex flex-col gap-2">
          {data.hintRow.map((it, index) => (
            <HintRow description={it.description} link={it.link} />
          ))}
        </div>
      </>
    );
  } else if (data.component === "submission") {
    return (
      <>
        <h1 className="text-lg">{data.codeSandboxTitle}</h1>
        <AssignmentInputBox
          placeholder={data.placeholder}
          assignmentId={data.assignmentId}
        />{" "}
      </>
    );
  } else if (data.component === "output") {
    return (
      <div>
        <p className="text-lg">{data.title}</p>
        <img src={data.screenshot} className="object-cover w-64 h-32 mb-4" />
      </div>
    );
  } else if (data.component === "loom-video") {
    return (
      <div className="pb-56 mb-8 h-96">
        {data.text && <p>{data.text}</p>}
        <iframe
          src={`https://www.loom.com/embed/${data.videoId}`}
          frameBorder="0"
          webkit-allowfullscreen
          moz-allowfullscreen
          allowFullScreen
          className="w-full h-96"
        />
      </div>
    );
  } else {
    return <h1>{data.component}</h1>;
  }
}
